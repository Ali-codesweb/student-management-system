import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Divider,
  Header,
  Indicator,
  MediaQuery,
  Menu,
  Navbar,
  Stack,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { receptionistLinks, hodLinks } from "../constants/constants";
function CommonAppshell({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [navLinks, setNavLinks] = React.useState([]);
  const [active, setActive] = useState(0);
  const [showAppShell, setShowAppShell] = useState(true);

  React.useEffect(() => {
    const path = location.pathname.split("/");
    
    if (path[1] == "receptionist") {
      setNavLinks(receptionistLinks);
      setShowAppShell(true)
    } else if (path[1] == "hod") {
      setNavLinks(hodLinks);
      setShowAppShell(true)
    } else {
      setShowAppShell(false);
    }
  }, [location.pathname,navLinks]);

  const links = navLinks?.map((link, index) => (
    <div
      className="d-flex cursor-pointer"
      onClick={() => {
        navigate( "/"+location.pathname.split("/")[1] + "/" + link.link);
        setActive(index);
        setOpened(false);
      }}
    >
      <Tooltip label={link.label} position="right" transitionDuration={200}>
        <ActionIcon
          size="xl"
          mb={20}
          radius="md"
          variant={active == index ? "filled" : "outline"}
          p={10}
          color={"secondary"}
        >
          {link.icon}
        </ActionIcon>
      </Tooltip>{" "}
      <Text
        ml={20}
        mt={10}
        color="white"
        sx={(theme) => ({
          display: "none",
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            display: "block",
          },
        })}
      >
        {link.label}
      </Text>
    </div>
  ));

  return (
    showAppShell ? <AppShell
      p={10}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        (
          <Navbar
            hiddenBreakpoint="sm"
            hidden={!opened}
            height={750}
            width={{ sm: 200, lg: 80 }}
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
        )
      }
      header={
         (
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
                Pacifico
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
                        <i className="fas fa-bell"></i>
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
                      <i className="fas fa-cog"></i>
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item
                      icon={<i className="fa fa-user" aria-hidden="true"></i>}
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Profile
                    </Menu.Item>
                    <Menu.Item
                      color="red"
                      icon={<i className="fas fa-sign-out-alt"></i>}
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
        )
      }
    >
      {children}
    </AppShell> : <div>{children}</div>
  );
}

export default CommonAppshell;
