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
import { customURL } from "../constants";
import axios from "axios";
import { showNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { UserState } from "../context/UserContext";
function LoginScreen() {
  const { setUser, user } = UserState();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = async () => {
    try {
      setLoading(true);
      const { data, status } = await axios.post(customURL + "login", {
        username,
        password,
      });
      
      if (status >= 400) {
       
      } else {
        await localStorage.setItem("token", JSON.stringify(data.token));

        setUser({ ...user, ...data });
        if (data.role == "Student") {
          navigate("/student/dashboard");
        }
        if (data.role == "HOD") {
          navigate("/hod/dashboard");
        }
        if (data.role == "Staff") {
          navigate("/staff/dashboard");
        }

        showNotification({
          title: "Hi " + data.name,
          message: "We hope you are a better " + data.role,
        });
      }
    } catch (error) {
      showNotification({
        title: "Error",
        message: "Unauthorized",
        color: "red",
      });
    }
    setLoading(false);
  };
  return (
    <div>
      <AppBar>
        <LoadingOverlay visible={loading} />
        <Center>
          <form onSubmit={(e) => e.preventDefault()}>
            <Card
              mt={40}
              className="bg-light"
              sx={{
                width: "500px",
              }}
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

export default LoginScreen;
