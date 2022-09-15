import {
  ActionIcon,
  Card,
  LoadingOverlay,
  Pagination,
  Table,
  Text,
  ThemeIcon,
} from "@mantine/core";
import React, { useState } from "react";
import HODAppshell from "../../components/HODAppshell";
import { MDBDataTableV5 } from "mdbreact";
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  axiosDelete,
  axiosGet,
  axiosPut,
  customURL,
  failedNotification,
  romanize,
  successNotification,
  UnauthorizedRedirect,
} from "../../constants/constants";
import { UserState } from "../../context/UserContext";
import EditButton from "./components/EditButton";
import CustomDeleteModal from "../../components/CustomDeleteModal";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

function HODStudents({ name }) {
  const { user, getUserFromLocalStorage } = UserState();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const editStudent = useForm({
    initialValues: {
      students: [],
    },
  });
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "Roll No.",
        field: "roll_num",
        width: 100,
      },
      {
        label: "Name",
        field: "name",
        width: 50,
      },
      {
        label: "Semester",
        field: "semester",
        width: 50,
      },
      {
        label: "Course",
        field: "course",
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
  const deleteStudent = async (id) => {
    const data = await axiosDelete("hod/get-students?id=" + id);
    getStudents();
  };

  const getStudents = async () => {
    setVisible(true);
    const data = await axiosGet("hod/get-students");
    if (data && data.status == 200) {
      const rows = data.data.map((e, index) => {
        return {
          roll_num: e["roll_number"],
          name: e["name"],
          semester: romanize(e["semester"]),
          course: e["course"],
          edit: (
            <EditButton
              type="Student"
              id={e["id"]}
              name={e["name"]}
              semester={e["semester"]}
              onClick={updateStudent}
            />
          ),
          remove: (
            <>
              <EditButton
                type="Student"
                remove
                semester={e["semester"]}
                onClick={() => {
                  deleteStudent(e["id"]).then((e) => {
                    getStudents();
                  });
                }}
              />
            </>
          ),
        };
      });

      setDatatable({ ...datatable, rows });
    } else {
      navigate("/login");
    }
    setVisible(false);
  };
  const updateStudent = async (id, form) => {
    const data = await axiosPut("hod/get-students?id=" + id, {
      first_name: form.firstName,
      last_name: form.lastName,
      semester: form.semester,
    });
    console.log(data);
    if (data && data.status == 200) {
      successNotification(data.message);
    } else {
      failedNotification(data?.message ? data?.message : "Failed");
    }
    getStudents();
  };

  React.useEffect(() => {
    console.log("user effect claaed");
    getStudents();
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

export default HODStudents;
