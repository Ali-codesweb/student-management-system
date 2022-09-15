import { Center, Image, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";

function UIRecognition() {
  return (
    
    <CustomHeroSection
    carouselImages={[
      "https://www.pacific-university.ac.in/uploads/PageHeaders/14380/_default.jpg",
    ]}
  >
        <Text size="xl" weight={900} align="center">
          UGC Approval
        </Text>
        <Text size="sm" mt={20}>
          Pacific University - UGC Recognition under section 2(f) of UGC Act,
          1956
        </Text>
        <Center mt={20}>
          <Image
            height={700}
            fit="contain"
            src="http://www.pacific-university.ac.in/uploads/Pages/Document/UGC21.JPG"
          />
        </Center>
        <Text size="xl" weight={900} mt={40} align="center">
          AIU Membership
        </Text>
        <Center mt={20}>
          <Image
            height={700}
            fit="contain"
            src="http://www.pacific-university.ac.in/uploads/Pages/Document/Form1.JPG"
          />
        </Center>
        <Center mt={20}>
          <Image
            height={700}
            fit="contain"
            src="http://www.pacific-university.ac.in/uploads/Pages/Document/Form2.JPG"
          />
        </Center>
        </CustomHeroSection>
  );
}

export default React.memo(UIRecognition);
