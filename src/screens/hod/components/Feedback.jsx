import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Input,
  LoadingOverlay,
  Modal,
  Select,
  SimpleGrid,
  Text,
  Textarea,
} from "@mantine/core";
import CustomDeleteModal from "../../../components/CustomDeleteModal";
import axios from "axios";
import { customURL,romanize } from "../../../constants";
import { UserState } from "../../../context/UserContext";
import { showNotification } from "@mantine/notifications";

function Feedback({ fb,getFeedbacks }) {
 
  const { authHeader } = UserState();
  const [opened, setOpened] = useState(false);
  const [reply, setReply] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [overlay, setOverlay] = useState(false);

  const replyFeedback = async () => {
    setOverlay(true);
    const { data } = await axios.put(
      customURL + "hod/feedback",
      {
        id: fb["id"],
        reply: replyText,
      },
      authHeader
    );

    showNotification({
      title: data.status == 200 ? "Success" : "Error",
      color: data.status == 200 ? "primary" : "red",
      message: data.message,
    });
  };

  return (
    <>
      <CustomDeleteModal
        setOpened={setOpened}
        title="Delete this feedback ?"
        opened={opened}
        onDelete={() => {}}
      />
      <Modal
        opened={reply}
        onClose={() => setReply(false)}
        title={"Reply this feedback"}
        centered
        size={700}
      >
        <LoadingOverlay visible={overlay} />
        <Input.Wrapper label="Enter your reply for this feedback">
          <Textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Enter your Feedback"
            autosize
            minRows={4}
            autoFocus
            maxRows={10}
          />
        </Input.Wrapper>
        <Button
          mt={20}
          className="float-right"
          s
          leftIcon={<i class="fas fa-reply"></i>}
          color="primary"
          variant="filled"
          onClick={() => {
            replyFeedback().then((_) => {
              setOverlay(false);
              setReply(false);
              getFeedbacks()
            });
          }}
        >
          Send Reply
        </Button>
      </Modal>
      <Card
        mt={15}
        shadow="sm"
        sx={(theme) => ({
          backgroundColor: theme.colors.primary[4],
          color: "white",
          borderRadius: theme.radius.lg,
          "&:hover": {
            backgroundColor: theme.colors.primary[3],
          },
        })}
      >
        <Grid>
          <Grid.Col xs={2} lg={1}>
            {" "}
            <Avatar radius="xl" />
          </Grid.Col>
          <Grid.Col xs={10} lg={11}>
            <Grid>
              <Grid.Col xs={10} lg={10}>
                <Text size="xs">{fb["name"]}</Text>
                <Text size="xs">
                  {romanize(parseInt(fb["type_semester"])) ? romanize(parseInt(fb["type_semester"])) : fb["type_semester"] }- {fb["department"]}
                </Text>
              </Grid.Col>
              <Grid.Col xs={2} lg={2} className="d-flex">
                <i class="far fa-calendar mr-1"></i>
                <Text size="xs">
                  {fb["posted_on"].split("-").reverse().join("-")}
                </Text>
              </Grid.Col>
            </Grid>
            <Text size="xs" mt={7}>
              {fb["feedback"]}
            </Text>
            <div className="d-flex justify-content-between mt-4">
              <Button
                leftIcon={<i class="fas fa-trash"></i>}
                color="red"
                variant="white"
                onClick={() => setOpened(true)}
              >
                Delete
              </Button>
              <Button
                leftIcon={<i class="fas fa-reply"></i>}
                color="secondary"
                variant="white"
                onClick={() => {
                  setReply(true);
                }}
              >
                Reply
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}

export default Feedback;
