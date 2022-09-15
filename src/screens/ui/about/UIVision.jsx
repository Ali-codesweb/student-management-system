import { Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";
function UIVision() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/14932/_default.jpg",
        "https://www.pacific-university.ac.in/uploads/PageHeaders/14932/_default.jpg",
      ]}
    >
      <Text size="xl" weight={900} align="center">
        Vision
      </Text>
      <Text mt={40} size="sm">
        In view of the Growing Human resource needs to sustain and enhance
        development and growth at home and to bridge the demographic deficit for
        almost 57 million Position by 2021 in various knowledge based sectors
        with the superannuating population across the world; The country has to
        turn out an ever- growing pool of globally employable talent, and extend
        the contours of knowledge and intellectual property in all fields of
        priority for the global humanity.
      </Text>
    </CustomHeroSection>
  );
}

export default React.memo(UIVision);
