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
import { customURL, romanize, UnauthorizedRedirect } from "../../constants";
import { UserState } from "../../context/UserContext";
import EditButton from "./components/EditButton";
import CustomDeleteModal from "../../components/CustomDeleteModal";
import {  useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";

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
    const { data } = await axios.delete(
      customURL + "hod/get-students?id=" + id,
      {
        headers: {
          Authorization: "Bearer " + getUserFromLocalStorage(),
        },
      }
    );
    console.log(data);
  };

  const getStudents = async () => {
    try {
      editStudent.setFieldValue("students", []);
      setVisible(true);
      const { data } = await axios.get(customURL + "hod/get-students", {
        headers: {
          Authorization: "Bearer " + getUserFromLocalStorage(),
        },
      });
      data.students.map((e) => {});
      const rows = data.students.map((e, index) => {
        console.log(e["roll_number"]);
        return {
          roll_num: e["roll_number"],
          name: e["name"],
          semester: romanize(e["semester"]),
          course: e["course"],
          edit: (
            <EditButton type='Student' id={e["id"]} name={e["name"]} onClick={updateStudent} />
          ),
          remove: (
            <>
              <EditButton type='Student'
                remove
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
    } catch (error) {
      showNotification({
        message: "Please login again",
        title: "Error",
        color: "red",
      });
      navigate("/login");
    }
    setVisible(false);
  };
  const updateStudent = async (id, form) => {
    const { data } = await axios.put(
      customURL + "hod/get-students?id=" + id,
      {
        first_name: form.firstName,
        last_name: form.lastName,
      },
      {
        headers: {
          Authorization: "Bearer " + getUserFromLocalStorage(),
        },
      }
    );
    if (data.status == 200) {
      showNotification({
        title: "Success",
        message: data.message,
      });
    } else {
      showNotification({
        title: "Error",
        message: data?.message ? data?.message : data?.details,
      });
    }
    getStudents();
  };

  React.useEffect(() => {
    console.log('user effect claaed')
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
    </>
  );
}

export default HODStudents;
