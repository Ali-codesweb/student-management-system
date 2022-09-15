import { Box, Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";

function SocialInitiatives({ images }) {
  return (
    <div>
      <Text>
        Pacific University is pioneer in taking social initiatives by organizing
        various events for full filling social objectives to create social
        awareness and to recognize talent in youth . It inclusive of Donacharya
        Award for teachers , Gargi Award, Free Dental Check up, Scholarship
        Awards , Swachta Abhiyaan
      </Text>
      <SimpleGrid cols={4} mt={20} breakpoints={breakpoints('sm')}>
        {images.map((e) => (
          <Box
          key={e.title}
            py={10}
            className="border"
            sx={(theme) => ({
              transition: "100ms ease-in",
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
              {e.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default SocialInitiatives;
