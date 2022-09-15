import {
  Box,
  Collapse,
  createStyles,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function DrawerLinks({ links, toggle }) {
  const navigate = useNavigate();
  const useStyles = createStyles((theme) => ({
    control: {
      fontWeight: 500,
      display: "block",
      width: "100%",
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
      fontSize: theme.fontSizes.sm,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },

    link: {
      fontWeight: 500,
      display: "block",
      textDecoration: "none",
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      paddingLeft: 31,
      marginLeft: 30,
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      borderLeft: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      cursor: "pointer",
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },

    chevron: {
      transition: "transform 200ms ease",
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
  }));
  const { classes, theme } = useStyles();
  const ChevronIcon = (props) =>
    theme.dir === "ltr" ? (
      <i {...props} className="fas fa-angle-right"></i>
    ) : (
      <i {...props} classNameName="fas fa-angle-left"></i>
    );
  const LinksGroup = (link) => {
    const [opened, setOpened] = useState(false);
    const items = link?.link?.links?.map((e) => {
      return (
        <Text
          component="a"
          className={classes.link}
          key={e.label}
          onClick={() => {
            if(link.link.links.length < 1){
            }
            navigate(e.link);
            toggle();
          }}
        >
          {e.label}
        </Text>
      );
    });

    return (
      <>
        <UnstyledButton
          onClick={() => {
            setOpened((o) => !o);
            if(link.link.links.length < 1){
              navigate(''+link.link.link)
            }

          }}
          className={classes.control}
        >
          <Group position="apart" spacing={0}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                {link.link.icon}
              </ThemeIcon>
              <Box ml="md">{link.link.label}</Box>
            </Box>
           {link.link.links.length > 0 && <ChevronIcon
              className={classes.chevron}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />}
          </Group>
        </UnstyledButton>
        <Collapse in={opened}>{items}</Collapse>
      </>
    );
  };

  return (
    <Box
      pb={60}
      sx={(theme) => ({
        minHeight: 220,
        padding: theme.spacing.md,
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
      })}
    >
      {links.map((e) => {
        return <LinksGroup key={e} link={e} />;
      })}
    </Box>
  );
}

export default DrawerLinks;
