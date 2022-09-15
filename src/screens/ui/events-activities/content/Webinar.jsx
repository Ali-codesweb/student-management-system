import { Text, SimpleGrid } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";
import CustomInfoBox from "../../components/CustomInfoBox";

function Webinar({ images }) {
  return (
    <div>
      <Text size="lg" color="primary" weight={600}>
        Successful Webinars
      </Text>
      <SimpleGrid cols={3} breakpoints={breakpoints("sm")}>
        {images.map((e) => (
          <CustomInfoBox data={e} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Webinar;
