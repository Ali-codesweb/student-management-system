import {
  createStyles,
  Grid,
  Group,
  Image,
  Menu,
  ScrollArea,
  UnstyledButton,
} from "@mantine/core";
import React from "react";

function CustomDropDown({ data, value, onChange }) {
  const [opened, setOpened] = React.useState(false);
  const useStyles = createStyles((theme, { opened }) => ({
    control: {
      width: 200,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 15px",
      borderRadius: theme.radius.md,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2]
      }`,
      transition: "background-color 150ms ease",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[opened ? 5 : 6]
          : opened
          ? theme.colors.gray[0]
          : theme.white,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[0],
      },
    },

    label: {
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,
    },

    icon: {
      transition: "transform 150ms ease",
      transform: opened ? "rotate(180deg)" : "rotate(0deg)",
    },
  }));
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = React.useState(data[0]);
  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      position="bottom"
      zIndex={10}
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <span className={classes.label}>{value}</span>
          </Group>
          <i className={"fas fa-angle-down " + classes.icon}></i>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <ScrollArea style={{ height: 270 }}>
          {data.map((e, i) => {
            return <Menu.Item onClick={() => onChange(e)}>{e}</Menu.Item>;
          })}
        </ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
}

export default CustomDropDown;
