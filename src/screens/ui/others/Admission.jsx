import {
  ActionIcon, Button, Center,
  Checkbox, FileButton, Grid,
  Group, Image, Paper, Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import CustomFooter from "../../../components/ui/CustomFooter";
import CustomNavbar from "../../../components/ui/CustomNavbar";
import {
  breakpoints,
  capitalizeFirstLetter,
 
  UIHeaderLinks
} from "../../../constants/constants";
import { coursesInfoData} from '../../../constants/constants_1'
import AdmissionCustomCard from "../components/AdmissionCustomCard";

function Admission() {
  const [sameAsCorr, setSameAsCorr] = React.useState(false);
  const [policyAgree, setPolicyAgree] = React.useState(false);

  const fullAddress = {
    full_address: "",
    email: "",
    mobile: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    district: "",
    pincode: "",
  };
  const academicInformation = {
    school_college_name: "",
    board_name: "",
    subject: "",
    year: "",
    marks: "",
    div: "",
    per: "",
  };
  const occupation = {
    organization: "",
    duration: "",
    post_reg: "",
    nature_of_duties: "",
  };

  const documents = {
    photo: new File([], "image.png"),
    sign: new File([], "image.png"),
    tenth: new File([], "image.png"),
    twelth: new File([], "image.png"),
    ug_photo: new File([], "image.png"),
    pg_photo: new File([], "image.png"),
  };
  const initialValues = {
    faculty: "",
    salution: "",
    full_name: "",
    email: "",
    guardian_name: "",
    guardian_occupation: "",
    mother_name: "",
    mother_occupation: "",
    dob: "",
    marital_status: "",
    category: "",
    gender: "",
    nationality: "",
    handicapped: false,
    convinience_desired: false,
    apply_hostel: true,
    corresponding_address: fullAddress,
    permanent_address: fullAddress,
    X: academicInformation,
    XII: academicInformation,
    UG: academicInformation,
    PG: academicInformation,
    OTH: academicInformation,
    occupation_1: occupation,
    occupation_2: occupation,
    occupation_3: occupation,
    documents,
  };
  const form = useForm({
    initialValues: initialValues,
  });
  const facultiesNames = coursesInfoData.map((e) => {
    if (e.name === "dairy") {
      return "Dairy & Food Technology";
    } else {
      return capitalizeFirstLetter(e.name);
    }
  });
  return (
    <div>
      <CustomNavbar links={UIHeaderLinks} />

      <form
        className="mt-4 w-100"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <Center className="flex-column" mt={40}>
          <AdmissionCustomCard
            h1={"Personal Information"}
            h2=" Fill the formspersonal information or personally identifiable
              information of student."
          >
            <Grid align={"center"}>
              <Grid.Col xs={12} md={6}>
                <Select
                  label="Faculties"
                  data={facultiesNames}
                  {...form.getInputProps("faculty")}
                />
              </Grid.Col>
              <Grid m={0}>
                <Grid.Col xs={12} md={6} className="d-flex">
                  <Select
                    data={["Mr.", "Ms.", "Mrs."]}
                    label="Salution"
                    className="w-100"
                    {...form.getInputProps("salution")}
                  />
                </Grid.Col>
                <Grid.Col xs={12} md={6} className="d-flex">
                  <TextInput
                    label="Full Name"
                    className="w-100"
                    {...form.getInputProps("full_name")}
                  />
                </Grid.Col>
              </Grid>
            </Grid>
            <Grid mt={10}>
              <Grid.Col xs={12} md={6}>
                <TextInput label="Email ID" {...form.getInputProps("email")} />
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <TextInput
                  label="Father/Husband/Gaurdian Name"
                  {...form.getInputProps("guardian_name")}
                />
              </Grid.Col>
            </Grid>
            <Grid mt={10}>
              <Grid.Col xs={12} md={6}>
                <TextInput
                  label="Father/Husband/Gaurdian name Occuption"
                  {...form.getInputProps("guardian_occupation")}
                />
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <TextInput
                  label="Mother Name"
                  {...form.getInputProps("mother_name")}
                />
              </Grid.Col>
            </Grid>
            <Grid mt={10}>
              <Grid.Col xs={12} md={6}>
                <TextInput
                  label="Mother Occuption"
                  {...form.getInputProps("mother_occupation")}
                />
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <TextInput
                  label="Date of Birth"
                  {...form.getInputProps("dob")}
                />
              </Grid.Col>
            </Grid>
            <Grid mt={10}>
              <Grid.Col xs={12} md={6}>
                <Select
                  data={["Single", "Married"]}
                  label="Marital Status"
                  {...form.getInputProps("marital_status")}
                />
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <Select
                  data={["General", "OBC", "SC", "ST", "SBC", "Other"]}
                  label="Category"
                  {...form.getInputProps("category")}
                />
              </Grid.Col>
            </Grid>
            <Grid mt={10}>
              <Grid.Col xs={12} md={6}>
                <Select
                  data={["male", "Female"]}
                  label="Gender"
                  {...form.getInputProps("gender")}
                />
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <Select
                  data={["Rajasthan", "Other"]}
                  label="Nationality"
                  {...form.getInputProps("nationality")}
                />
              </Grid.Col>
            </Grid>
          </AdmissionCustomCard>
          <AdmissionCustomCard
            h1={"College Facilities"}
            h2="  Use the facilities.(Tick if Yes)"
          >
            <Group mt={10}>
              <Checkbox
                radius="xl"
                label="Handicapped"
                {...form.getInputProps("handicapped")}
              />
              <Checkbox
                radius="xl"
                label="Convience Desired"
                {...form.getInputProps("convinience_desired")}
              />
              <Checkbox
                radius="xl"
                label="Applying for Hostel"
                {...form.getInputProps("apply_hostel")}
              />
            </Group>
          </AdmissionCustomCard>
          <SimpleGrid
            cols={2}
            sx={(theme) => ({
              width: "80%",
              [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                width: "90%",
              },
            })}
            breakpoints={breakpoints("lg")}
          >
            <AdmissionCustomCard noWidth h1="Corresponding Address">
              {Object.keys(form.values.corresponding_address).map((e) => {
                return (
                  <TextInput
                    label={capitalizeFirstLetter(e).replace("_", " ")}
                    mt={20}
                    {...form.getInputProps("corresponding_address." + e)}
                  />
                );
              })}
            </AdmissionCustomCard>
            <AdmissionCustomCard noWidth h1="Permanent Address">
              <Checkbox
                mt={10}
                size="xs"
                label="Same as Corresponding address"
                value={sameAsCorr}
                onChange={(event) => {
                  if (event.currentTarget.checked) {
                    form.setFieldValue(
                      "permanent_address",
                      form.values.corresponding_address
                    );
                  } else {
                    form.setFieldValue("permanent_address", fullAddress);
                  }
                  setSameAsCorr(event.currentTarget.checked);
                }}
              />
              {Object.keys(form.values.permanent_address).map((e) => {
                return (
                  <TextInput
                    label={capitalizeFirstLetter(e).replace("_", " ")}
                    mt={20}
                    {...form.getInputProps("permanent_address." + e)}
                  />
                );
              })}
            </AdmissionCustomCard>
          </SimpleGrid>
          <AdmissionCustomCard
            h1="Academics Information"
            h2="fill the .Academic-Informations This course will introduce you to
              the basic elements of academic information"
          >
            <Grid align="center" mt={20}>
              <Grid.Col xs={1}>
                <ThemeIcon color="secondary">
                  <Text>X</Text>
                </ThemeIcon>
              </Grid.Col>
              {Object.keys(form.values.X).map((e) => {
                var cols = 1;
                if (e === "school_college_name") {
                  cols = 3;
                } else if (e === "board_name") {
                  cols = 2;
                }
                return (
                  <Grid.Col xs={12} md={cols}>
                    <TextInput
                      placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                      label={capitalizeFirstLetter(e).replace("_", " ")}
                      {...form.getInputProps("X." + e)}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
            <Grid align="center" mt={10}>
              <Grid.Col xs={1}>
                <ThemeIcon color="secondary">
                  <Text>XII</Text>
                </ThemeIcon>
              </Grid.Col>
              {Object.keys(form.values.XII).map((e) => {
                var cols = 1;
                if (e === "school_college_name") {
                  cols = 3;
                } else if (e === "board_name") {
                  cols = 2;
                }
                return (
                  <Grid.Col xs={12} md={cols}>
                    <TextInput
                      placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                      {...form.getInputProps("XII." + e)}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
            <Grid align="center" mt={10}>
              <Grid.Col xs={1}>
                <ThemeIcon color="secondary">
                  <Text>UG</Text>
                </ThemeIcon>
              </Grid.Col>
              {Object.keys(form.values.UG).map((e) => {
                var cols = 1;
                if (e === "school_college_name") {
                  cols = 3;
                } else if (e === "board_name") {
                  cols = 2;
                }
                return (
                  <Grid.Col xs={12} md={cols}>
                    <TextInput
                      placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                      {...form.getInputProps("UG." + e)}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
            <Grid align="center" mt={10}>
              <Grid.Col xs={1}>
                <ThemeIcon color="secondary">
                  <Text>PG</Text>
                </ThemeIcon>
              </Grid.Col>
              {Object.keys(form.values.PG).map((e) => {
                var cols = 1;
                if (e === "school_college_name") {
                  cols = 3;
                } else if (e === "board_name") {
                  cols = 2;
                }
                return (
                  <Grid.Col xs={12} md={cols}>
                    <TextInput
                      placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                      {...form.getInputProps("PG." + e)}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
            <Grid align="center" mt={10}>
              <Grid.Col xs={1}>
                <ThemeIcon color="secondary" size={"lg"}>
                  <Text>OTH</Text>
                </ThemeIcon>
              </Grid.Col>
              {Object.keys(form.values.OTH).map((e) => {
                var cols = 1;
                if (e === "school_college_name") {
                  cols = 3;
                } else if (e === "board_name") {
                  cols = 2;
                }
                return (
                  <Grid.Col xs={12} md={cols}>
                    <TextInput
                      placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                      {...form.getInputProps("OTH." + e)}
                    />
                  </Grid.Col>
                );
              })}
            </Grid>
          </AdmissionCustomCard>
          <AdmissionCustomCard
            h1="Employment Information (If Employed)"
            h2="Use the .form-inline Further information: Application for employment."
          >
            <Text size="sm" mt={15}>
              Job 1{" "}
            </Text>
            <SimpleGrid cols={4} mt={10} breakpoints={breakpoints("sm")}>
              {Object.keys(form.values.occupation_1).map((e) => {
                return (
                  <TextInput
                    placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                  />
                );
              })}
            </SimpleGrid>
            <Text size="sm" mt={15}>
              Job 2{" "}
            </Text>
            <SimpleGrid cols={4} mt={10} breakpoints={breakpoints("sm")}>
              {Object.keys(form.values.occupation_2).map((e) => {
                return (
                  <TextInput
                    placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                  />
                );
              })}
            </SimpleGrid>
            <Text size="sm" mt={15}>
              Job 3{" "}
            </Text>
            <SimpleGrid cols={4} mt={10} breakpoints={breakpoints("sm")}>
              {Object.keys(form.values.occupation_3).map((e) => {
                return (
                  <TextInput
                    placeholder={capitalizeFirstLetter(e).replace("_", " ")}
                  />
                );
              })}
            </SimpleGrid>
          </AdmissionCustomCard>
          <AdmissionCustomCard
            h1="Upload Documents & Photo -Signature"
            h2="Upload Photo-Sign . Need to upload documents with your online application"
          >
            <SimpleGrid cols={3} breakpoints={breakpoints("xs")}>
              {Object.keys(form.values.documents).map((e) => {
                console.log(form.values.documents);
                return (
                  <Paper
                    mt={10}
                    shadow={0}
                    px={10}
                    py={10}
                    radius="xs"
                    withBorder
                  >
                    <Group className="justify-content-between">
                      <Stack spacing={0}>
                        <Text m={0} size="sm">
                          {capitalizeFirstLetter(e).replace("_", " ")} *
                        </Text>
                        <Text size="xs" m={0} color="red">
                          (Max 50-KB, JPG OR PNG ONLY )
                        </Text>
                      </Stack>
                      <FileButton
                        m={0}
                        {...form.getInputProps("documents." + e)}
                      >
                        {(props) => (
                          <ActionIcon
                            variant="gradient"
                            {...props}
                            color="primary"
                          >
                            <i className="fas fa-upload"></i>
                          </ActionIcon>
                        )}
                      </FileButton>
                      <Image
                        height={50}
                        width={50}
                        withPlaceholder
                        fit="contain"
                        src={URL.createObjectURL(form.values.documents[e])}
                      />
                    </Group>
                  </Paper>
                );
              })}
            </SimpleGrid>
          </AdmissionCustomCard>
          <AdmissionCustomCard
            h1="Payment Details & Declaration"
            h2="APPLICATION FORM FEES : INR 900"
          >
            <div className="d-flex align-items-start mt-3">
              <ThemeIcon color="primary" radius={"xl"} mr={7}>
                1
              </ThemeIcon>{" "}
              <Text size="sm" m={0}>
                I Declare that entries made by me in this Admission form and the
                document submitted by me with the admission form are true in all
                respected and in any case, any information is found to be
                false,this shall entail automatic cancellation of my admission
                beside rendering me lible to such action, as the University may
                deem proper.
              </Text>
            </div>
            <div className="d-flex align-items-start mt-3">
              <ThemeIcon color="primary" radius={"xl"} mr={7}>
                2
              </ThemeIcon>{" "}
              <Text size="sm" m={0}>
                I note that my admission to the University and my continuance on
                it rolls are subject to the provision/rules of the University,
                issued from time to time.I shall abide by the rules of
                discipline and proper conduct.I am fully aware of the law
                regarding as well as the punishment and that if found guilty on
                this account I am liable to be punished appropriately.
              </Text>
            </div>
            <div className="d-flex align-items-start mt-3">
              <ThemeIcon color="primary" radius={"xl"} mr={7}>
                3
              </ThemeIcon>
              <Text size="sm" m={0}>
                I Declare that I have read the prospectus carefully and
                understood that the dispute if any will be subject to
                jurisdiction, Udaipur, Rajasthan Only.
              </Text>
            </div>
            <Checkbox
              mt={20}
              checked={policyAgree}
              onChange={(e) => setPolicyAgree(e.currentTarget.checked)}
              label="I agree to our Terms & Conditions, Agreement and Privacy Policy."
            />
          <Button type="submit" mt={20}>Submit & Pay Now</Button>
          </AdmissionCustomCard>
        </Center>
      </form>

      <CustomFooter />

      <ScrollToTop />
    </div>
  );
}

export default Admission;
