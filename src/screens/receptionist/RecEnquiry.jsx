import {
  Button,
  Card, createStyles, Group, LoadingOverlay,
  Modal, ScrollArea, Table, Text, Textarea,
  TextInput
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import CustomDropDown from "../../components/CustomDropDown";
import {
  axiosGet,
  axiosPost,
  failedNotification,
  successNotification
} from "../../constants/constants";

function RecEnquiry({ name }) {
  const useStyles = createStyles((theme) => ({
    header: {
      position: "sticky",
      top: 0,

      transition: "box-shadow 150ms ease",

      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        borderBottom: theme.colors.dark[3],
      },
    },

    scrolled: {
      boxShadow: theme.shadows.sm,
    },
  }));

  const [enqDialog, setEnqDialog] = React.useState(false);
  const [courses, setCourses] = React.useState([]);
  const [enquiries, setEnquiries] = React.useState([]);
  const [enquiryLoading, setEnquiryLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = React.useState(false);
  const enquiryForm = useForm({
    initialValues: {
      name: "",
      address: "",
      mobile: "",
      email: "",
      course: "",
    },
    validate: {
      name: (value) => (value.length < 3 ? "Invalid Name" : null),
      address: (value) => (value.length < 3 ? "Invalid Address" : null),
      course: (value) => (value.length < 2 ? "Select a course" : null),
      mobile: (value) =>
        value.length < 6 ? "Enter a valid mobile Number" : null,
    },
  });
  const submitEnquiry = async (values) => {
    setEnquiryLoading(true);
    const data = await axiosPost("receptionist/enquiry", values);
    if (data.status === 200) {
      setEnqDialog(false);
      successNotification(data.message);
      enquiryForm.reset();
    } else {
      failedNotification(data.message);
    }
    setEnquiryLoading(false);
    fetchEnquiries()
  };

  const fetchDepartments = async () => {
    const data = await axiosGet("departments");
    if (data.status === 200) {
      setCourses(data.data);
    }
  };
  const fetchEnquiries = async () => {
    setLoading(true);
    const data = await axiosGet("receptionist/enquiry");
    console.log(data);
    if (data && data.status === 200) {
      setEnquiries(data.data);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchEnquiries();
    fetchDepartments();
  }, []);

  return (
    <div>
      <Text size="xl" weight={600}>
        {name}
      </Text>
      <Modal
        opened={enqDialog}
        centered
        onClose={() => {
          setEnqDialog(false);
          setEnquiryLoading(false);
          enquiryForm.reset();
        }}
        title="Add Enquiry"
      >
        <LoadingOverlay visible={enquiryLoading} />
        <form onSubmit={enquiryForm.onSubmit(submitEnquiry)}>
          <TextInput
            label="Name of the Student"
            required
            {...enquiryForm.getInputProps("name")}
            placeholder="Name"
          />
          <Textarea
            mt={15}
            label="Address"
            required
            {...enquiryForm.getInputProps("address")}
            placeholder="Address"
          />
          <TextInput
            type={"number"}
            mt={15}
            label="Mobile Number"
            required
            {...enquiryForm.getInputProps("mobile")}
            placeholder="Mobile Number"
          />
          <TextInput
            type={"email"}
            mt={15}
            label="Email"
            required
            {...enquiryForm.getInputProps("email")}
            placeholder="Email"
          />
          <Group position="apart" mt={20}>
            <Text size="sm">Select Course: </Text>
            <CustomDropDown
              {...enquiryForm.getInputProps("course")}
              data={courses.map((e) => e.name)}
            />
          </Group>
          <Text size="xs" className="float-right" color="red">
            {enquiryForm?.errors?.course}
          </Text>
          <Button type="submit" mt={20}>
            Submit
          </Button>
        </form>
      </Modal>

      <Card shadow={"md"} mt={20}>
        <LoadingOverlay visible={loading} />
        <Button
          className="float-right"
          leftIcon={<i className="fas fa-plus"></i>}
          onClick={() => setEnqDialog(true)}
        >
          Add Enquiry
        </Button>
        <ScrollArea
          mt={60}
          sx={{ height: 300 }}
          onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
          <Table sx={{ minWidth: 700 }}>
            <thead
              className={cx(classes.header, { [classes.scrolled]: scrolled })}
            >
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Date</th>
                <th>Course</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {enquiries?.map((e, i) => {
                return (
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.mobile}</td>
                    <td>{e.email}</td>
                    <td>{e.date}</td>
                    <td>{e.course}</td>
                    <td>{e.address}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </ScrollArea>
      </Card>
    </div>
  );
}

export default RecEnquiry;
