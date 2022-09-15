import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  SimpleGrid,
  Image,
  Modal,
  LoadingOverlay,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import React from "react";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons";
import {
  axiosPost,
  breakpoints,
  capitalizeFirstLetter,
 
  failedNotification,
  successNotification,
} from "../../constants/constants";
import  { coursesInfoData} from '../../constants/constants_1'
import { useForm } from "@mantine/form";
import CustomDropDown from "../CustomDropDown";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 80,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: "white",
    borderTop: `1px solid ${theme.colors.gray[2]}`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const CustomFooter = () => {
  const { classes } = useStyles();
  const [enqDialog, setEnqDialog] = React.useState(false);
  const [enquiryLoading, setEnquiryLoading] = React.useState(false);
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
  const facultiesNames = coursesInfoData.map((e) => {
    if (e.name === "dairy") {
      return "Dairy & Food Technology";
    } else {
      return capitalizeFirstLetter(e.name);
    }
  });
  const submitEnquiry = async (values) => {
    setEnquiryLoading(true);
    const data = await axiosPost("receptionist/enquiry", values);
    if (data.status == 200) {
      setEnqDialog(false);
      successNotification(data.message);
      enquiryForm.reset();
    } else {
      failedNotification(data.message);
    }
    setEnquiryLoading(false);
  };
  return (
    <footer className={classes.footer}>
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
              data={facultiesNames}
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
      <Container p={0}>
        <SimpleGrid cols={3} breakpoints={breakpoints("xs")}>
          <Container>
            <Text size="lg" weight={900}>
              Primary Contacts
            </Text>
            <Text size={"sm"} mt={20}>
              Pacific Academy of Higher Education & Research University{" "}
            </Text>
            <Text size={"xs"} mt={5}>
              Pacific Hills, Pratapnagar Extn., Airport Road, Debari, Udaipur -
              313003{" "}
            </Text>
            <Text size={"xs"} mt={10}>
              Mobile : +91 9672970940, +91 7665017785, +91 7665017787
            </Text>
            <Text size={"xs"} mt={5}>
              Landline No. : 02942665000
            </Text>
            <Text size={"xs"} mt={10}>
              Email: info@pacific-university.ac.in{" "}
            </Text>
            <Text size={"xs"} mt={5}>
              Website: www.pacific-university.ac.in
            </Text>
          </Container>
          <Container className="d-flex flex-column justify-content-center" >
            <Text>Pacific Youtube Channel</Text>
            <iframe
              title="title"
              src="https://www.youtube.com/embed/6d8z0P7jXuA"
            ></iframe>
            <Button
            mt={25}
              color="pink.9"
              radius="md"
              onClick={() => setEnqDialog(true)}
            >
              Enquiry
            </Button>
          </Container>
          <Container>
            <Text>Like us on Facebook</Text>
            <Image src="https://www.pacific-university.ac.in/images/fb.jpg" />
          </Container>
        </SimpleGrid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 Pacific University. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default React.memo(CustomFooter);
