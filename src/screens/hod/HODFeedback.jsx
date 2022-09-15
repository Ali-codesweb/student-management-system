import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  LoadingOverlay,
  Modal,
  Select,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import CustomDeleteModal from "../../components/CustomDeleteModal";
import HODAppshell from "../../components/HODAppshell";
import { UserState } from "../../context/UserContext";
import Feedback from "./components/Feedback";
import axios from "axios";
import { customURL } from "../../constants/constants";
import { showNotification } from "@mantine/notifications";
import ScrollToTop from "../../components/ScrollToTop";
function HODFeedback({ name }) {
  const { getUserFromLocalStorage, authHeader } = UserState();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [semester, setSemester] = useState("");
  const getFeedbacks = async () => {
    setLoading(true);
    if (semester == null || semester == undefined) {
      setSemester("");
    }
    if (type == null || type == undefined) {
      setType("");
    }

    const { data } = await axios.get(customURL + `hod/feedback`, {
      headers: {
        Authorization: `Bearer ` + getUserFromLocalStorage(),
      },
      params: {
        type,
        semester,
      },
    });
    setFeedbacks(data.data);
    setLoading(false);
  };
  React.useEffect(() => {
    getFeedbacks();
  }, [type, semester]);

  return (
    <>
      <Text size="xl" weight={600}>
        {name}
      </Text>
      <Card radius={10} shadow={"sm"} p={20} sx={(theme)=>({
        minHeight:'600px'
      })} mt={20}>
        <LoadingOverlay visible={loading} />
        <SimpleGrid cols={3}>
          <div></div>
          <Select
          dropdownPosition='bottom'
            placeholder="All"
            clearable
            value={type}
            onChange={(e) => {
              console.log(e);
              setType(e);
              setSemester("");
            }}
            zIndex={200}
            label="Type"
            data={[
              { value: "Student", label: "Student" },
              { value: "Staff", label: "Staff" },
              { value: "HOD", label: "HOD" },
            ]}
          />
          {type == "Student" && (
            <Select
            dropdownPosition='bottom'
              placeholder="All"
              clearable
              value={semester}
              onChange={(e) => {
                setSemester(e);
              }}
              label="Semester"
              data={[
                { value: "1", label: "I" },
                { value: "2", label: "II" },
                { value: "3", label: "III" },
                { value: "4", label: "IV" },
                { value: "5", label: "V" },
                { value: "6", label: "VI" },
                { value: "7", label: "VII" },
                { value: "8", label: "VIII" },
              ]}
            />
          )}
        </SimpleGrid>

        {feedbacks.length > 0 ? (
          feedbacks.map((e) => {
            return <Feedback getFeedbacks={getFeedbacks} fb={e} />;
          })
        ) : (
          <Text>No Feedbacks</Text>
        )}
      </Card>
      <ScrollToTop />
    </>
  );
}

export default HODFeedback;
