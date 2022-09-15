import { Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { breakpoints } from "../../../../constants/constants";

function WestZoneChampionship({ images }) {
  return (
    <div>
      <Text size="xl" color="primary" weight={500} align="center">
        West Zone Inter University Handball (Men) Championship 2021-22
      </Text>
      <Text size="lg" mt={20} weight={500} align="center">
        6 States | 68 Teams | 4 Days | 64 Match
      </Text>
      <Text mt={10} weight={500}>
        Fixtures of West Zone Inter University Handball (Men) Championship
        2021-22
      </Text>
      <SimpleGrid mt={20} cols={4} breakpoints={breakpoints("xs")}>
        {images.map((e) => (
          <Image withPlaceholder height={200} fit="contain" src={e} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default WestZoneChampionship;
