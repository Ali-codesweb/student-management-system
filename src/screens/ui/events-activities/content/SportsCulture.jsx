import { SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";
import CustomImageBox from '../../components/CustomImageBox';
function SportsCulture({ images }) {


  return (
    <div>
      <Text size="sm">
        The University believes that a healthy mind works better and that sports
        help to inculcate good qualities in the students. Involving oneself in
        competitive sports encourages healthy competition, co-operation and
        leadership qualities. Apart from sports activities the college has plans
        for an annual visit to the industries in the nearby area. This helps in
        bridging the gap between industry and college.
      </Text>
      <Text size="sm">
        Also, we encourage and appreciate students to participate in our annual
        festival.
      </Text>
      <SimpleGrid breakpoints={breakpoints('sm')} cols={4} mt={30}>
        {images.topImages.map((e) => (
          <CustomImageBox src={e}  />
        ))}
      </SimpleGrid>
      <Text mt={40} weight={600} color='primary' size='lg'>Gargi Images</Text>
      <SimpleGrid breakpoints={breakpoints('sm')} cols={4} mt={30}>
        {images.gargiImages.map((e) => (
          <CustomImageBox src={e}  />
        ))}
      </SimpleGrid>
      <Text mt={40} weight={600} color='primary' size='lg'>Pacific Chopati</Text>
      <SimpleGrid breakpoints={breakpoints('sm')} cols={4} mt={30}>
        {images.chopatiImages.map((e) => (
          <CustomImageBox src={e}  />
        ))}
      </SimpleGrid>
      <Text mt={40} weight={600} color='primary' size='lg'>Prashantam</Text>
      <SimpleGrid breakpoints={breakpoints('sm')} cols={4} mt={30}>
        {images.prashantamImages.map((e) => (
          <CustomImageBox src={e}  />
        ))}
      </SimpleGrid>
      <Text mt={40} weight={600} color='primary' size='lg'>Uttarayan</Text>
      <SimpleGrid breakpoints={breakpoints('sm')} cols={4} mt={30}>
        {images.uttarayanImages.map((e) => (
          <CustomImageBox src={e}  />
        ))}
      </SimpleGrid>
      <Text mt={40} weight={600} color='primary' size='lg'>Sports</Text>
      <SimpleGrid breakpoints={breakpoints('sm')} cols={4} mt={30}>
        {images.sportsImages.map((e) => (
          <CustomImageBox src={e}  />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default SportsCulture;
