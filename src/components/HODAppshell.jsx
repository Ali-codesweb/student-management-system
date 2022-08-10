import {
  ActionIcon, AppShell, Avatar,
  Divider, Header, Indicator, Menu, Navbar, Stack, Text, Tooltip, useMantineTheme
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function HODAppshell({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const mockdata = [
    {
      icon: <i className="fa fa-chart-line"></i>,
      label: "Dashboard",
      link: "dashboard",
    },
    {
      icon: <i className="fa fa-graduation-cap"></i>,
      label: "Students",
      link: "students",
    },
    {
      icon: <i className="fa fa-comments"></i>,
      label: "Feedbacks",
      link: "feedback",
    },
    {
      icon: <i className="fa fa-users"></i>,
      label: "Staff",
      link: "staff",
    },
    {
      icon: <i className="fa fa-book"></i>,
      label: "Subjects",
      link: "dashboard",
    },
  ];
  const [active, setActive] = useState(0);

  React.useEffect(() => {
    if (location.pathname.split("/")[1] != "hod") {
      setActive(0);
    }
  }, [location.pathname]);

  const links = mockdata.map((link, index) => (
    <Tooltip label={link.label} position="right" transitionDuration={0}>
      <ActionIcon
        onClick={() => {
          navigate("/hod/" + link.link);
          console.log(index);
          setActive(index);
        }}
        size="xl"
        mb={20}
        radius="md"
        variant={active == index ? "filled" : "outline"}
        p={10}
        color={"secondary"}
      >
        {link.icon}
      </ActionIcon>
    </Tooltip>
  ));

  console.log("Beares ????");
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return location.pathname.split("/")[1] != "hod" ? null : (
    <AppShell
      p={0}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          height={750}
          width={{ base: 80 }}
          p="md"
          sx={(theme) => ({
            backgroundColor: theme.fn.variant({
              variant: "filled",
              color: theme.primaryColor,
            }).background,
          })}
        >
          <Navbar.Section grow mt={50}>
            <Stack justify="center" spacing={0}>
              {links}
            </Stack>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={70} p="md">
          <div className="d-flex justify-content-between align-items-center">
            <Text ml={10} className="font-weight-bold" color={"primary"}>
              Manager
            </Text>
            <div className="d-flex">
              <Menu
                position="bottom"
                placement="center"
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <Indicator mr={60}>
                    <ActionIcon>
                      <i class="fas fa-bell"></i>
                    </ActionIcon>
                  </Indicator>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item icon={<Avatar size={25} />}>
                    <Text size="xs" lineClamp={2}>
                      This is the notification of bla bla lba
                    </Text>
                  </Menu.Item>
                  <Menu.Item icon={<Avatar size={25} />}>
                    <Text size="xs">
                      This is the notification of bla bla lba
                    </Text>
                  </Menu.Item>
                  <Menu.Item icon={<Avatar size={25} />}>
                    <Text size="xs">
                      This is the notification of bla bla lba
                    </Text>
                  </Menu.Item>
                  <Menu.Item icon={<Avatar size={25} />}>
                    <Text size="xs">
                      This is the notification of bla bla lba
                    </Text>
                  </Menu.Item>
                  <Menu.Item icon={<Avatar size={25} />}>
                    <Text size="xs">
                      This is the notification of bla bla lba
                    </Text>
                  </Menu.Item>
                  <Menu.Item icon={<Avatar size={25} />}>
                    <Text size="xs">
                      This is the notification of bla bla lba
                    </Text>
                  </Menu.Item>
                  <Divider />
                  <Menu.Item>
                    <Text size="xs">Show All</Text>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              <Menu
                position="bottom"
                placement="center"
                shadow="md"
                width={200}
              >
                <Menu.Target>
                  <ActionIcon mr={40}>
                    <i class="fas fa-cog"></i>
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
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
                </Menu.Dropdown>
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

// navbar={
//   <Navbar
//     p="xs"
//     hiddenBreakpoint="sm"
//     hidden={!opened}
//     width={{ sm: 200, lg: 300 }}
//     height={"110vh"}
//     zIndex={10}
//     sx={(theme) => ({
//       backgroundColor: theme.colors.primary[5],
//     })}
//   >
//     <Box mt={50}>
//       <HoverBox
//         onClick={() => {
//           navigate("/hod/dashboard");
//         }}
//       >
//         <Group>
//           <ThemeIcon>
//             <i class="fa fa-chart-line" aria-hidden="true"></i>{" "}
//           </ThemeIcon>
//           <Text>Dashboard</Text>
//         </Group>
//       </HoverBox>
//       <HoverBox
//         onClick={() => {
//           navigate("/hod/students");
//         }}
//       >
//         <Group>
//           <ThemeIcon>
//             <i class="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
//           </ThemeIcon>
//           <Text>Students</Text>
//         </Group>
//       </HoverBox>
//       <HoverBox
//         onClick={() => {
//           navigate("/hod/feedback");
//         }}
//       >
//         <Group>
//           <ThemeIcon>
//             <i class="fa fa-comments" aria-hidden="true"></i>{" "}
//           </ThemeIcon>
//           <Text>Feedback</Text>
//         </Group>
//       </HoverBox>
//       <HoverBox
//         onClick={() => {
//           navigate("/hod/staff");
//         }}
//       >
//         <Group>
//           <ThemeIcon>
//             <i class="fa fa-users" aria-hidden="true"></i>{" "}
//           </ThemeIcon>
//           <Text>Staff</Text>
//         </Group>
//       </HoverBox>
//       <HoverBox
//         onClick={() => {
//           navigate("/hod/dashboard");
//         }}
//       >
//         <Group>
//           <ThemeIcon>
//             <i class="fa fa-book" aria-hidden="true"></i>{" "}
//           </ThemeIcon>
//           <Text>Subjects</Text>
//         </Group>
//       </HoverBox>
//     </Box>
//   </Navbar>
// }
