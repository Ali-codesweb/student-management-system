import { Carousel } from "@mantine/carousel";
import {
  Box,
  Button,
  Center,
  createStyles,
  Image,
  List,
  Paper,
  Text,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../../components/ScrollToTop";
import CustomFooter from "../../../components/ui/CustomFooter";
import CustomNavbar from "../../../components/ui/CustomNavbar";
import { UIHeaderLinks } from "../../../constants/constants";

function PreAdmission() {
  const navigate = useNavigate();
  const useStyles = createStyles((theme) => ({
    responsiveWidth: {
      width: "80%",
      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        width: "90%",
      },
    },
    headerText: {
      borderBottom: "1px solid #aaaaaa",
      backgroundColor: "#eeeeee",
    },
  }));
  const { classes } = useStyles();
  return (
    <div>
      <CustomNavbar links={UIHeaderLinks} />
      <Carousel
        className="bg-light"
        loop
        controlsOffset={"xl"}
        controlSize={50}
        withIndicators
        mt={10}
      >
        <Carousel.Slide className="d-flex justify-content-center align-items-center">
          <Image
            withPlaceholder
            height={500}
            fit="contain"
            src={"http://paher.pacific-university.ac.in/images/common.jpg"}
          />
        </Carousel.Slide>
      </Carousel>
      <Center mt={35}>
        <Paper withBorder shadow={"lg"} className={classes.responsiveWidth}>
          <Text size="lg" className={classes.headerText} py={25} px={20}>
            How To Apply ?{" "}
          </Text>
          <Box py={30}>
            <Text weight={700} size="sm" ml={30}>
              Important Guidelines to be followed by all Candidates willing to
              apply for Any Course:
            </Text>
            <List type="ordered" size="sm" mt={20} px={20} spacing={15}>
              <List.Item>
                All information filled by you in the application form will
                automatically be converted to upper case (in capital letters)
              </List.Item>
              <List.Item>
                All the fields indicated as “*” are mandatory fields.
                Application form will not be saved/submitted until and unless
                there information are filled.
              </List.Item>
              <List.Item>
                Before filling the application form please keep scan copy of
                your passport size photograph and signature ready for uploading.
                Size of photograph and signature shall be 10-50 KB
              </List.Item>
              <List.Item>
                Please ensure that you have entered your correct email id in the
                application form, as a copy of submitted application form will
                automatically be sent to your entered e-mail id.
              </List.Item>
              <List.Item>Please fill in all the required information</List.Item>
              <List.Item>
                The charges for online registration form is Rs. 900/-
              </List.Item>
              <List.Item>
                In all matters relating to the admission, the decision of the
                University shall be final. No correspondence from the applicant
                with respect to his/her non-selection will be entertained. The
                admission process at the university shall be subject to the
                jurisdiction of Udaipur.
              </List.Item>
            </List>

            <Box mt={25} ml={25}>
              <Text weight={700} size="sm">
                More Details, contact at:
              </Text>
              <Text size="sm">
                Mobile : +91 9672970940, 9672927863, 7665017787
              </Text>
              <Text size="sm">E-mail : info@pacific-university.ac.in</Text>
            </Box>
            <Box mt={25} ml={25}>
              <Text weight={700} size="sm">
                Pacific University
              </Text>
              <Text size="sm">
                Pacific Hills, Pratap Nagar Extn., Near Transport Nagar,Airport
                Road, Debari, Udaipur - 313003,
              </Text>
              <Text size="sm">Phone : +91-294 - 2665000</Text>
              <Text size="sm">
                Mobile : +91 9672927863, 9672970940,7665017787
              </Text>
            </Box>
            <Center mt={25}>
              <Button
                onClick={() => navigate("/admission")}
                size="lg"
                radius="md"
                color="pink.9"
              >
                Click to continue
              </Button>
            </Center>
          </Box>
        </Paper>
      </Center>
      <ScrollToTop />
      <CustomFooter />
    </div>
  );
}

export default React.memo(PreAdmission);
