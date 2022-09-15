import {
  ActionIcon,
  Affix,
  createStyles,
  Tooltip,
  Transition,
} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import React from "react";
function ScrollToTop() {
  const [opened, setOpened] = React.useState(false);
  const useStyles = createStyles((theme) => ({
    fab: {
      transform: opened ? "rotate(45deg)" : "",
    },
    buttons: {
      transition: "200ms ease-in-out",
      boxShadow: "0px 2px 4px gray!important",
    },
    button1: {
      marginBottom: opened ? 70 : 0,
    },
    button2: {
      marginBottom: opened ? 130 : 0,
    },
  }));
  const { classes, cx } = useStyles();

  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              color="primary"
              variant="filled"
              radius={"xl"}
              p={20}
              style={transitionStyles}
              sx={{ boxShadow: "0px 0px 5px #eeeeee" }}
              onClick={() => scrollTo({ y: 0 })}
            >
              <i className="fas fa-arrow-up"></i>
            </ActionIcon>
          )}
        </Transition>
      </Affix>

      <Affix position={{ bottom: 20, left: 20 }}>
        <Tooltip label="Call" position="right">
          <ActionIcon
            color="pink"
            variant="filled"
            radius={"xl"}
            p={20}
            className={cx(classes.buttons, classes.button2)}
          >
            <i class="fas fa-phone"></i>
          </ActionIcon>
        </Tooltip>
      </Affix>

      <Affix position={{ bottom: 20, left: 20 }}>
        <Tooltip label="Message" position="right">
          <ActionIcon
            color="pink"
            variant="filled"
            radius={"xl"}
            p={20}
            className={cx(classes.buttons, classes.button1)}
          >
            <i class="fas fa-comment"></i>
          </ActionIcon>
        </Tooltip>
      </Affix>
      <Affix position={{ bottom: 20, left: 20 }}>
        <ActionIcon
          className={cx(classes.fab,classes.buttons)}
          color="pink"
          variant="filled"
          radius={"xl"}
          p={20}
          onClick={() => setOpened(!opened)}
        >
          <i className="fas fa-plus"></i>
        </ActionIcon>
      </Affix>
    </>
  );
}

export default React.memo(ScrollToTop);
