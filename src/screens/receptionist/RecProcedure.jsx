import React from "react";
import { Accordion, createStyles, Text } from "@mantine/core";
function RecProcedure({ name }) {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
    },

    item: {
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      backgroundColor: "white",
      boxShadow: "0px 0px 10px " + theme.colors.gray[1],
    },
  }));
  const { classes } = useStyles();

  const placeholder =
    "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

  return (
    <div>
      <Text size="xl" weight={600}>
        {name}
      </Text>
      <div className="d-flex justify-content-center align-items-center">
        <Accordion
          mt={25}
          chevronPosition="right"
          defaultValue="reset-password"
          variant="separated"
          sx={(theme) => ({
            width: "80%",
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              width: "98%",
            },
          })}
        >
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>How can I reset my password?</Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>
              Can I create more that one account?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              How can I subscribe to monthly newsletter?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              Do you store credit card information securely?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              What payment systems to you work with?
            </Accordion.Control>
            <Accordion.Panel>{placeholder}</Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default RecProcedure;
