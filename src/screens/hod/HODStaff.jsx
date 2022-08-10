import React, { useState } from "react";
import HODAppshell from "../../components/HODAppshell";
import { MDBDataTableV5 } from "mdbreact";
import { Card, LoadingOverlay, Text } from "@mantine/core";
import { UserState } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { customURL } from "../../constants";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
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
    try {
      const { data } = await axios.delete(customURL + "hod/staff?id=" + id, {
        headers: {
          Authorization: "Bearer " + getUserFromLocalStorage(),
        },
      });
      if (data.status == 200) {
        showNotification({
          tite: "Success",
          message: data.message,
        });
      }
    } catch (error) {
      showNotification({
        tite: "Error",
        message: error.message,
        color: "red",
      });
    }
  };
  const updateStaff = async(id,form)=>{
    try {
      const {data} = await axios.put(customURL+'hod/staff?id='+id,{
        first_name:form.firstName,
        last_name:form.lastName,
        subjects:form.value
      },{
        headers: {
          Authorization: "Bearer " + getUserFromLocalStorage(),
        },
      })
      console.log(data)
      if (data.status==200){
        showNotification({
          tite: "Success",
          message: data.message,
        });
      }
    } catch (error) {
      showNotification({
        tite: "Error",
        message: error.message,
        color: "red",
      });
    }
    getStaff()
  }
  const getStaff = async () => {
    setVisible(true)
    try {
      const { data } = await axios.get(customURL + "hod/staff", {
        headers: {
          Authorization: "Bearer " + getUserFromLocalStorage(),
        },
      });

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
                  onClick={async() => {
                    await deleteStaff(e["id"]);
                    await getStaff()
                  }}
                />
              </>
            ),
          };
        });
        setDatatable({ ...datatable, rows });
      } else {
        showNotification({
          tite: "Error",
          message: data.message,
          color: "red",
        });
      }
    } catch (error) {
      showNotification({
        tite: "Error",
        message: error.message,
        color: "red",
      });
    }
    setVisible(false)
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
    </>
  );
}

export default HODStaff;
