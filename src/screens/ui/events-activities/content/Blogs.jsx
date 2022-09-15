import { SimpleGrid } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";
import CustomInfoBox from "../../components/CustomInfoBox";

function Blogs({ images }) {
  return (
    <SimpleGrid cols={3} breakpoints={breakpoints("sm")}>
      {images.map((e) => (
        <CustomInfoBox data={e} />
      ))}
    </SimpleGrid>
  );
}

export default Blogs;
