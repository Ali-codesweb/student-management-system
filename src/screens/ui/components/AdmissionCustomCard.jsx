import { Card, createStyles, Text } from "@mantine/core";
import React from "react";

function AdmissionCustomCard({ h1, h2, children,noWidth }) {
  const useStyles = createStyles((theme) => ({
    responsiveWidth: {
      width: "80%",
      [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
        width: "90%",
      },
    },
  }));
  const { classes } = useStyles();
  return (
    <Card
      py={30}
      mt={40}
      radius={"lg"}
      shadow="sm"
      withBorder
      className={noWidth ? '' : classes.responsiveWidth}
    >
      <Text weight={700} size="lg">
        {h1}
      </Text>
      {h2 && (
        <Text color="dimmed" size="xs" mt={20}>
          {h2}
        </Text>
      )}
      {children}
    </Card>
  );
}

export default React.memo(AdmissionCustomCard);
