import { Card, LoadingOverlay, Text, ThemeIcon } from "@mantine/core";
import { MDBDataTableV5 } from "mdbreact";
import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import {
  axiosGet,
  axiosPut, DateDMY,
  failedNotification,
  successNotification
} from "../../constants/constants";
import { UserState } from "../../context/UserContext";
import LeaveDetailButton from "./components/LeaveDetailButton";
function HODLeave({ name }) {
  const [visible, setVisible] = React.useState(false);
  const { authHeader } = UserState();
  const updateLeave = async (answer, id) => {
    const data = await axiosPut("leave", {
      status: answer,
      id,
    });
    if (data.status == 200) {
      successNotification(data.message);
    } else {
      failedNotification(data.message);
    }
    getLeaves();
  };
  const getLeaves = async () => {
    setVisible(true);
    const data = await axiosGet("leave")
    if (data.status == 200) {
      const rows = data.data.map((e) => ({
        name: e["user"],
        type: e["role"],
        subject: e["subject"],
        from: DateDMY(e["leave_from"]),
        till: DateDMY(e["leave_till"]),
        accepted: (
          <ThemeIcon
            variant="light"
            color={e["accepted"] ? "primary" : "red"}
          >
            {e["accepted"] ? (
              <i className="fas fa-check"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </ThemeIcon>
        ),
        details: <LeaveDetailButton updateLeave={updateLeave} leave={e} />,
      }));
      setDatatable({ ...datatable, rows });
    }
    setVisible(false);
  };
  React.useEffect(() => {
    getLeaves();
  }, []);
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 50,
      },
      {
        label: "Type",
        field: "type",
        width: 50,
      },
      {
        label: "Subject",
        field: "subject",
        width: 50,
      },
      {
        label: "From",
        field: "from",
        width: 50,
      },
      {
        label: "Till",
        field: "till",
        width: 50,
      },
      {
        label: "Accepted",
        field: "accepted",
        width: 50,
      },
      {
        label: "Details",
        field: "details",
        width: 50,
      },
    ],
    rows: [],
  });
  return (
    <>
      <Text size="xl" weight={600}>
        {name}
      </Text>
      <Card
        sx={{
          minWidth: "600px",
        }}
        mt={20}
        shadow="sm"
        radius={10}
      >
        <LoadingOverlay visible={visible} />
        <MDBDataTableV5
          hover
          entriesOptions={[5, 20, 25]}
          entries={5}
          pagesAmount={4}
          data={datatable}
        />
      </Card>
      <ScrollToTop />
    </>
  );
}

export default HODLeave;
