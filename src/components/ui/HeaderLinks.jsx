import {
  Group,
  Text,
  createStyles,
  Container,
  Header,
  Burger,
  Menu,
  Center,
  Button,
  Drawer,
  ScrollArea,
  Grid,
  MediaQuery,
} from "@mantine/core";
import React from 'react'
import { IconChevronDown } from "@tabler/icons";
import { useDisclosure } from "@mantine/hooks";
import DrawerLinks from "./DrawerLinks";
import { useNavigate } from "react-router-dom";

const HeaderLinks = ({ links }) => {
  const HEADER_HEIGHT = 60;
  const navigate = useNavigate();

  const useStyles = createStyles((theme) => ({
    chevron: {
      transition: "transform 200ms ease",
    },
    inner: {
      height: HEADER_HEIGHT,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    burger: {
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
    },

    link: {
      cursor:'pointer',
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      },
    },

    linkLabel: {
      marginRight: 5,
    },
  }));
  const { classes } = useStyles();
  const [headerOpened, { toggle }] = useDisclosure(false);
  const headerItems = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Grid.Col md={link.links.length > 7 ? 4 : 12}>
        <Menu.Item key={item.link} onClick={()=>{
                navigate(item.link)
              }}>{item.label} </Menu.Item>
      </Grid.Col>
    ));
    if (menuItems.length > 0) {
      return (
        <Menu
          width={link.links.length > 7 ? 550 : 200}
          key={link.label}
          trigger="hover"
          exitTransitionDuration={50}
        >
          <Menu.Target>
            <Text
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center >
                <span className={classes.linkLabel} style={{cursor:'default'}}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </Text>
          </Menu.Target>
          <Menu.Dropdown>
            <Grid>{menuItems}</Grid>
          </Menu.Dropdown>
        </Menu>
      );
    }
    return (
      <Text
        key={link.label}
        className={classes.link}
        onClick={()=>{
          navigate('/'+link.link)
        }}
      >
        {link.label}
      </Text>
    );
  });
  return (
    <Header
    // position={''}
      height={HEADER_HEIGHT}
      sx={(theme) => ({
        position:'sticky',
        boxShadow: "0px 1px 10px #eeeeee",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        borderBottom:'1px solid #dddddd'
      })}
    >
      <Container className={classes.inner} fluid>
        <Group>
          <Burger
            opened={headerOpened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <Drawer opened={headerOpened} onClose={toggle} size="md">
            <ScrollArea style={{ height: "100%" }}>
              <DrawerLinks links={links} toggle={toggle} />
            </ScrollArea>
          </Drawer>
          <Text color="primary" weight={600} sx={{cursor:'pointer'}} onClick={()=>{
            navigate('/')
          }}>
            Pacifico
          </Text>
        </Group>
        <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
          <Grid>{headerItems}</Grid>
        </MediaQuery>
        <Button radius="sm" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Container>
    </Header>
  );
};

export default React.memo(HeaderLinks);
