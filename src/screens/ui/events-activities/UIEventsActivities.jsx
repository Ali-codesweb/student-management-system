import { Box, Text } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";
import { capitalizeFirstLetter } from "../../../constants/constants";
import { UIEventsActivitiesData } from "../../../constants/constants_2";
function UIEventsActivities() {
  const { item } = useParams();
  const data = UIEventsActivitiesData.find((e) => e.link === item);
  console.log(data);
  return (
    <CustomHeroSection carouselImages={data.carouselImages}>
      <Text size="xl" weight={900} align="center">
        {capitalizeFirstLetter(item).replace("-", " & ")}
      </Text>
      <Box mt={40}>{<data.component images={data.images} />}</Box>
    </CustomHeroSection>
  );
}

export default UIEventsActivities;
