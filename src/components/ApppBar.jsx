import {
  AppShell,
  Burger,
  Button,
  Card,
  Center,
  Header,
  Input,
  InputWrapper,
  MediaQuery,
  Navbar,
  PasswordInput,
  Tabs,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React, { useState } from "react";

function AppBar({children,setRole}) {
  const [opened, setOpened] = useState(false);

  const theme = useMantineTheme();
  return (
    <AppShell
      padding="md"
      header={
        <Header height={70} p="md" className="appbar bg-light">
          <div className="d-flex justify-content-between align-items-center">
            {/* <MediaQuery largerThan="xs" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery> */}

            <Text ml={10} className="font-weight-bold" color={"primary"}>
              Pacifico
            </Text>
          
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default AppBar;
