import {
  ActionIcon,
  Button,
  Input,
  LoadingOverlay,
  Modal,
} from "@mantine/core";
import axios from "axios";
import React from "react";
import CustomDeleteModal from "../../../components/CustomDeleteModal";
import { customURL } from "../../../constants";
import { MultiSelect } from "@mantine/core";

function EditButton({ onClick, remove, id, name, type, staff, staffSubjects }) {
  const [value, setValue] = React.useState([]);

  const [edit, setEdit] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [firstName, setFirstName] = React.useState(name?.split(" ")[0]);
  const [lastName, setLastName] = React.useState(name?.split(" ")[1]);
  const [subjects, setSubjects] = React.useState([]);

  const getSubjects = async () => {
    const { data } = await axios.get(customURL + "subjects");
    const subs = data.data.map((e) => {
      return {
        value: e.name,
        label: e.name,
      };
    });
    setSubjects(subs);
  };
  React.useEffect(() => {
    if (staff) {
      setValue(staffSubjects)
      getSubjects();
    }
  }, []);

  return (
    <>
      <CustomDeleteModal
        title={`Delete This ${type} ? (it will remove all the records of this student from your database ) `}
        opened={opened}
        setOpened={setOpened}
        onDelete={async () => {
          setVisible(true);
          await onClick();
          setVisible(false);
        }}
      />

      <Modal
        opened={edit}
        onClose={() => setEdit(false)}
        title={"Edit your " + type}
        centered
      >
        <LoadingOverlay visible={visible} />
        <Input.Wrapper id="first_name" required label="First Name">
          <Input
            id="first_name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </Input.Wrapper>
        <Input.Wrapper id="last_name" required label="Last Name" mt={10}>
          <Input
            id="last_name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </Input.Wrapper>

        {staff && (
          <MultiSelect
          mt={10}
            value={value}
            onChange={(e) => {
              setValue(e);
              console.log(e);
            }}
            data={subjects}
            label="Subjects"
            placeholder="Subjects"
          />
        )}

        <Button
          onClick={async () => {
            setVisible(true);
            if(staff){

              await onClick(id, { firstName, lastName,value });
            }else{

              await onClick(id, { firstName, lastName });
            }
            setVisible(false);
            setEdit(!edit);
          }}
          mt={20}
          fullWidth
        >
          Save
        </Button>
      </Modal>
      <ActionIcon
        color={remove ? "red" : "primary"}
        onClick={() => {
          if (remove) {
            setOpened(true);
          } else {
            setEdit(!edit);
          }
        }}
      >
        {remove ? (
          <i className={`fas fa-trash`}></i>
        ) : (
          <i className={`fas fa-${edit ? "check" : "edit"}`}></i>
        )}
      </ActionIcon>
    </>
  );
}

export default EditButton;
