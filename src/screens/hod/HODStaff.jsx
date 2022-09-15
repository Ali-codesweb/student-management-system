import { Card, LoadingOverlay, Text } from "@mantine/core";
import { MDBDataTableV5 } from "mdbreact";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import {
  axiosDelete,
  axiosGet, axiosPut, failedNotification,
  successNotification
} from "../../constants/constants";
import { UserState } from "../../context/UserContext";
import EditButton from "./components/EditButton";
function HODStaff({ name }) {
  const { user, getUserFromLocalStorage } = UserState();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Name",
        field: "name",
        width: 50,
      },
      {
        label: "Subject",
        field: "subject",
        width: 50,
      },
      {
        label: "Edit",
        field: "edit",
        width: 50,
      },
      {
        label: "Remove",
        field: "remove",
        width: 50,
      },
    ],
    rows: [],
  });

  const deleteStaff = async (id) => {
    const data = await axiosDelete("hod/staff?id=" + id);
    if (data.status == 200) {
      successNotification(data.message);
    }
  };
  const updateStaff = async (id, form) => {
    const data = await axiosPut("hod/staff?id=" + id, {
      first_name: form.firstName,
      last_name: form.lastName,
      subjects: form.value,
    });
    if (data && data.status == 200) {
      successNotification(data.message);
    }
    getStaff();
  };
  const getStaff = async () => {
    setVisible(true);
    const data = await axiosGet("hod/staff");
    if (data.status == 200) {
      const rows = data.data.map((e) => {
        return {
          name: e["name"],
          subject: e["subjects"].join(),
          edit: (
            <EditButton
              staff
              staffSubjects={e["subjects"]}
              type="Staff"
              id={e["id"]}
              name={e["name"]}
              onClick={updateStaff}
            />
          ),
          remove: (
            <>
              <EditButton
                type="Staff"
                remove
                onClick={async () => {
                  await deleteStaff(e["id"]);
                  await getStaff();
                }}
              />
            </>
          ),
        };
      });
      setDatatable({ ...datatable, rows });
    } else {
      failedNotification(data.message);
    }

    setVisible(false);
  };
  React.useEffect(() => {
    getStaff();
  }, []);
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

export default HODStaff;
