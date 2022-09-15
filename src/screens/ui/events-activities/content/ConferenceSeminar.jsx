import { SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";
import CustomInfoBox from "../../components/CustomInfoBox";
function ConferenceSeminar({ images }) {
  return (
    <div>
      <Text size="lg" weight={500}>
        {" "}
        Successfully Organised Conferences
      </Text>
      <SimpleGrid mt={30} cols={3} breakpoints={breakpoints("md")}>
        {images.map((e) => (
          <CustomInfoBox data={e} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default ConferenceSeminar;
