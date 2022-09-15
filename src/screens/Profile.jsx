import {
  Button,
  Card,
  Center,
  Grid,
  Image,
  Input,
  LoadingOverlay,
  PasswordInput, Text
} from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import axios from "axios";
import Compressor from "compressorjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import { customURL } from "../constants/constants";
import { UserState } from "../context/UserContext";

import ScrollToTop from "../components/ScrollToTop";
function Profile() {
 
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { getUserFromLocalStorage } = UserState();
  const form = useForm({
    initialValues: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      profile_picture: new File([], "image.jpg"),
      role: "",
      roll_number: "",
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    },
  });

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(customURL + "profile", {
        headers: {
          Authorization: "Bearer " + getUserFromLocalStorage(),
        },
      });
      if (data.status === 200) {
        const {
          username,
          department,
          email,
          first_name,
          last_name,
          profile_picture,
          role,
          roll_number,
          // semester,
          // subjects,
        } = data.data;
        fetch(profile_picture).then(async (response) => {
          const contentType = response.headers.get("content-type");
          const blob = await response.blob();
          const file = new File([blob], "dbnra7fegc8zqec57wpp.png", {
            contentType,
          });
          form.setFieldValue("profile_picture", file);
        });
        form.setFieldValue("username", username);
        form.setFieldValue("first_name", first_name);
        form.setFieldValue("last_name", last_name);
        form.setFieldValue("email", email);
        form.setFieldValue("department", department);
        form.setFieldValue("role", role);
        form.setFieldValue("roll_number", roll_number);
      }
    } catch (error) {
      showNotification({
        title: "Error",
        message: error.message,
        color: "red",
      });
    }
    setLoading(false);
  };

  React.useEffect(() => {
    fetchUserDetails();
  },[]);
  const updateProfile = async () => {
    if (form.values.new_password !== "") {
      if (form.values.new_password !== form.values.confirm_new_password) {
        showNotification({
          title: "Error",
          message: "Please Confirm both new passwords are same",
          color: "red",
        });
        return;
      }
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", form.values.profile_picture);
      formData.append("upload_preset", "utiox3dj");
      formData.append("cloud_name", "dzwamemqe");
      formData.append("folder", "college-erp");
      const { data: imageData } = await axios.post(
        " https://api.cloudinary.com/v1_1/dzwamemqe/image/upload",
        formData
      );
      const { data } = await axios.post(
        customURL + "profile",
        { ...form.values, profile_picture: imageData.secure_url },
        {
          headers: {
            Authorization: "Bearer " + getUserFromLocalStorage(),
          },
        }
      );
      if (data.status === 200) {
        showNotification({
          title: "Success",
          message: data.message,
        });
        navigate(-1);
      } else {
        showNotification({
          title: "Error",
          message: data.message,
          color: "red",
        });
      }
    } catch (error) {
      showNotification({
        title: "Error",
        message: error.message,
        color: "red",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <Center>
        <form onSubmit={(e) => e.preventDefault()}>
          <Card
            mb={40}
            mt={40}
            sx={(theme) => ({
              width: "700px",
              [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                width: "400px",
              },
            })}
            shadow="lg"
            p="lg"
          >
            <LoadingOverlay visible={loading} />
            <Text weight={500} align="center" size="xl" color={"gray"}>
              Profile
            </Text>
            <Grid align={"center"} justify={"center"}>
              <Grid.Col xs={12} md={6}>
                <Input.Wrapper
                  mt={30}
                  id="username"
                  required
                  label="Username"
                  error={null}
                >
                  <Input
                    {...form.getInputProps("username")}
                    id="username"
                    placeholder="Your username"
                  />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <Input.Wrapper
                  mt={30}
                  id="first_name"
                  required
                  label="First Name"
                  error={null}
                >
                  <Input
                    id="first_name"
                    {...form.getInputProps("first_name")}
                    placeholder="Your First Name"
                  />
                </Input.Wrapper>
              </Grid.Col>
            </Grid>
            <Grid>
              <Grid.Col xs={12} md={6}>
                <Input.Wrapper
                  mt={20}
                  id="last_name"
                  required
                  label="Last Name"
                  error={null}
                >
                  <Input
                    id="last_name"
                    {...form.getInputProps("last_name")}
                    placeholder="Your Last Name"
                  />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <Input.Wrapper
                  mt={20}
                  id="email"
                  required
                  label="Email"
                  error={null}
                >
                  <Input
                    id="email"
                    {...form.getInputProps("email")}
                    placeholder="Your Email"
                  />
                </Input.Wrapper>
              </Grid.Col>
            </Grid>

            <Grid align="center" mt={20}>
              <Grid.Col xs={12} md={6}>
                <Center mt={20}>
                  <Image
                    withPlaceholder={loading}
                    fit="contain"
                    src={URL.createObjectURL(form.values.profile_picture)}
                  />
                </Center>
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <Dropzone
                  sx={(theme) => ({
                    height: "150px",
                  })}
                  accept={[MIME_TYPES.png, MIME_TYPES.jpeg]}
                  onDrop={(e) => {
                    new Compressor(e[0], {
                      quality: 0.3,
                      success: (compressedResult) => {
                        form.setFieldValue("profile_picture", compressedResult);
                      },
                    });
                  }}
                >
                  <Text align="center">Image should be under 3 mb</Text>
                </Dropzone>
              </Grid.Col>
            </Grid>

            <Grid>
              <Grid.Col xs={12} md={6}>
                {/* Role */}
                <Input.Wrapper
                  mt={20}
                  id="role"
                  required
                  label="Role"
                  error={null}
                >
                  <Input
                    id="role"
                    {...form.getInputProps("role")}
                    value={"HOD"}
                    disabled
                  />
                </Input.Wrapper>
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                {/* Course / Department */}
                <Input.Wrapper
                  mt={20}
                  id="department"
                  required
                  label="Department"
                  error={null}
                >
                  <Input
                    {...form.getInputProps("department")}
                    id="department"
                    value={"CSE"}
                    disabled
                  />
                </Input.Wrapper>
              </Grid.Col>
            </Grid>

            <Text mt={30} align="center">
              Change you password
            </Text>

            <Input.Wrapper
              mt={20}
              id="current_password"
              required
              label="Current Password"
              error={null}
            >
              <PasswordInput
                {...form.getInputProps("current_password")}
                id="current_password"
                placeholder="Current Password"
              />
            </Input.Wrapper>

            <Input.Wrapper
              mt={20}
              id="new_password"
              required
              label="New Password"
              error={null}
            >
              <PasswordInput
                {...form.getInputProps("new_password")}
                id="new_password"
                placeholder="New Password"
              />
            </Input.Wrapper>
            <Input.Wrapper
              mt={20}
              id="confirm_new_password"
              required
              label="Confirm New Password"
              error={null}
            >
              <PasswordInput
                {...form.getInputProps("confirm_new_password")}
                id="confirm_new_password"
                placeholder="Confirm New Password"
              />
            </Input.Wrapper>

            <Button
              type="submit"
              onClick={updateProfile}
              fullWidth
              radius={"md"}
              mt={30}
            >
              Update Profile
            </Button>
          </Card>
        </form>
      </Center>
      <ScrollToTop/>
    </div>
  );
}

export default Profile;
