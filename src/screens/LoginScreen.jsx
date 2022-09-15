import {
  Button,
  Card,
  Center,
  Input,
  LoadingOverlay,
  PasswordInput,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import AppBar from "../components/ApppBar";
import {
  axiosPost,
  customURL,
  failedNotification,
  successNotification,
} from "../constants/constants";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { UserState } from "../context/UserContext";
import { mainStore } from "../store";
function LoginScreen() {
  const { setUser, user } = UserState();
  const { setUser: saveUser } = mainStore();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = async () => {
    try {
      setLoading(true);
      const data = await axiosPost("login", { username, password });

      await localStorage.setItem("token", JSON.stringify(data.token));

      setUser({ ...user, ...data });
      saveUser(data);
      if (data.role === "Student") {
        navigate("/student/dashboard");
      }
      if (data.role === "HOD") {
        navigate("/hod/dashboard");
      }
      if (data.role === "Staff") {
        navigate("/staff/dashboard");
      }
      if (data.role === "Receptionist") {
        navigate("/receptionist/enquiry");
      }

      successNotification(
        "Hi " + data.name + ". We hope you are a better " + data.role
      );
    } catch (error) {
      failedNotification("Unauthorized");
    }
    setLoading(false);
  };
  return (
    <div>
      <AppBar>
        <LoadingOverlay visible={loading} />
        <Text
          weight={500}
          p={15}
          
          align="center"
          size="xl"
          sx={(theme) => ({
            boxShadow:theme.shadows.md,
            borderRadius: theme.spacing.xs,
            backgroundColor: theme.colors.cyan[0],
          })}
        >
          Under Development
        </Text>
        <Center>
          <form onSubmit={(e) => e.preventDefault()}>
            <Card
              mt={40}
              className="bg-light"
              sx={(theme) => ({
                width: "500px",
                [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
                  width: "350px",
                },
              })}
              shadow="sm"
              p="lg"
            >
              <Text weight={500} align="center" size="xl" color={"gray"}>
                Login
              </Text>
              <Input.Wrapper
                mt={40}
                id="username"
                required
                label="Username / Student ID"
                error={null}
              >
                <Input
                  id="username"
                  placeholder="Your username / Student ID"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Input.Wrapper>
              <Input.Wrapper
                mt={20}
                id="password"
                required
                label="Password"
                error={null}
              >
                <PasswordInput
                  description="Password must include at least one letter, number and special character"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Input.Wrapper>

              <Button
                type="submit"
                fullWidth
                radius={"md"}
                mt={30}
                onClick={login}
              >
                Login
              </Button>
            </Card>
          </form>
        </Center>
      </AppBar>
    </div>
  );
}

export default React.memo(LoginScreen);
