import { SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";

function Alumni({ images }) {
  return (
    <div>
      <Text size="lg">Pacific Institute of Hotel Management</Text>
      <SimpleGrid mt={20} cols={4} breakpoints={breakpoints("sm")}>
        {images.map((e) => (
          <iframe
            width="260"
            height="215"
            src={e}
            title="Pacific University"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Alumni;
