import { Box, Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";

function Media({ images }) {
  return (
    <SimpleGrid cols={4} breakpoints={breakpoints("sm")}>
      {images.map((e) => (
        <Box
          py={10}
          className='border'
          sx={(theme) => ({
            transition:'100ms ease-in',
            borderRadius: "10px",
            backgroundColor: theme.colors.gray[0],
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.colors.blue[0],
            },
          })}
        >
          <Image
            src={e.image}
            withPlaceholder
            key={e}
            height={150}
            fit="contain"
          />
          <Text
            //   onclick to /gallery/2016 wagera wagera
            size="xs"
            align="center"
            mt={10}
          >
            {e.year}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default Media;
