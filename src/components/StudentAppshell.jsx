import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  ThemeIcon,
  Menu,
  ActionIcon,
  Avatar,
  Divider,
  Indicator,
  Box,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import HoverBox from "./HoverBox";
import { useNavigate } from "react-router-dom";

function StudentAppshell({ children }) {
  const navigate = useNavigate();
  console.log("Beares ????");
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      p={0}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="xs"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          height={"110vh"}
          zIndex={10}
          sx={(theme) => ({
            backgroundColor: theme.colors.primary[5],
          })}
        >
          <Box mt={50}>
            <HoverBox
              onClick={() => {
                navigate("/student/dashboard");
              }}
            >
              <Group>
                <ThemeIcon>
                  <i class="fa fa-chart-line" aria-hidden="true"></i>{" "}
                </ThemeIcon>
                <Text>Dashboard</Text>
              </Group>
            </HoverBox>
            <HoverBox
              onClick={() => {
                navigate("/student/leave");
              }}
            >
              <Group>
                <ThemeIcon>
                <i class="fas fa-bookmark"></i>
                </ThemeIcon>
                <Text>Leave</Text>
              </Group>
            </HoverBox>
            <HoverBox
              onClick={() => {
                navigate("/student/feedback");
              }}
            >
              <Group>
                <ThemeIcon>
                  <i class="fas fa-comment"></i>
                </ThemeIcon>
                <Text>Feedback</Text>
              </Group>
            </HoverBox>
          </Box>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div className="d-flex justify-content-between align-items-center">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text ml={10} className="font-weight-bold" color={"primary"}>
              Manager
            </Text>
            <div>
              <Menu
                position="bottom"
                placement="center"
                control={
                  <Indicator mr={60}>
                    <ActionIcon>
                      <i class="fas fa-bell"></i>
                    </ActionIcon>
                  </Indicator>
                }
              >
                <Menu.Item icon={<Avatar size={25} />}>
                  <Text size="xs" lineClamp={2}>
                    This is the notification of bla bla lba
                  </Text>
                </Menu.Item>
                <Menu.Item icon={<Avatar size={25} />}>
                  <Text size="xs">This is the notification of bla bla lba</Text>
                </Menu.Item>
                <Menu.Item icon={<Avatar size={25} />}>
                  <Text size="xs">This is the notification of bla bla lba</Text>
                </Menu.Item>
                <Menu.Item icon={<Avatar size={25} />}>
                  <Text size="xs">This is the notification of bla bla lba</Text>
                </Menu.Item>
                <Menu.Item icon={<Avatar size={25} />}>
                  <Text size="xs">This is the notification of bla bla lba</Text>
                </Menu.Item>
                <Menu.Item icon={<Avatar size={25} />}>
                  <Text size="xs">This is the notification of bla bla lba</Text>
                </Menu.Item>
                <Divider />
                <Menu.Item>
                  <Text size="xs">Show All</Text>
                </Menu.Item>
              </Menu>
              <Menu
                position="bottom"
                placement="center"
                control={
                  <ActionIcon mr={40}>
                    <i class="fas fa-cog"></i>
                  </ActionIcon>
                }
              >
                <Menu.Item
                  icon={<i class="fa fa-user" aria-hidden="true"></i>}
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  Profile
                </Menu.Item>
                <Menu.Item
                  color="red"
                  icon={<i class="fas fa-sign-out-alt"></i>}
                  onClick={() => {
                    localStorage.removeItem("token");
                    showNotification({
                      title: "Success",
                      message: "Successfully logged out",
                    });
                    navigate("/login");
                  }}
                >
                  Logout
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default StudentAppshell;
