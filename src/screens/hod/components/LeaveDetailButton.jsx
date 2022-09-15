import {
  ActionIcon,
  Button,
  Grid,
  LoadingOverlay,
  Modal,
  Text
} from "@mantine/core";
import React, { useState } from "react";
import { UserState } from "../../../context/UserContext";

function LeaveDetailButton({ leave,updateLeave }) {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const { authHeader } = UserState();
 
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={"Leave Application of " + leave["user"]}
        centered
      >
        <LoadingOverlay visible={loading} />
        <Text size={"sm"}>Designation : {leave["role"]}</Text>
        <Grid mt={3}>
          <Grid.Col md={6}>
            <Text size={"sm"}>From : {leave["leave_from"]}</Text>
          </Grid.Col>
          <Grid.Col md={6}>
            <Text size={"sm"}>Till : {leave["leave_till"]}</Text>
          </Grid.Col>
        </Grid>
        <Text mt={20} size="xs">
          Message:
        </Text>
        <Text>{leave["message"]}</Text>
        {leave["accepted"] ? (
          <Text color={"primary"} mt={25} align="center">
            Leave is already accepted on {leave["updated_on"]}
          </Text>
        ) : (
          <Grid mt={25}>
            <Grid.Col md={6}>
              <Button
                leftIcon={<i className="fas fa-times"></i>}
                fullWidth
                color="red"
                onClick={async() => {
                  setLoading(true);
                  await updateLeave("reject",leave["id"]);
                  setLoading(false);
                  setOpened(false);
                }}
              >
                Reject
              </Button>
            </Grid.Col>
            <Grid.Col md={6}>
              <Button
                onClick={async() => {
                  setLoading(true);
                  await updateLeave("accept",leave["id"]);
                  setLoading(false);
                  setOpened(false);
                }}
                leftIcon={<i className="fas fa-check"></i>}
                fullWidth
              >
                Accept
              </Button>
            </Grid.Col>
          </Grid>
        )}
      </Modal>
      <ActionIcon
        onClick={() => setOpened(true)}
        color={"secondary"}
        variant="filled"
      >
        <i className="fas fa-info"></i>
      </ActionIcon>
    </div>
  );
}

export default LeaveDetailButton;
