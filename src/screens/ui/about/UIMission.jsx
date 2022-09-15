import { Text, ThemeIcon } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";

function UIMission() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/6739/_default.jpg",
      ]}
    >
        <Text size="xl" weight={900} align="center">
          Mission
        </Text>
        <Text size="sm" mt={40}>
          To promote educational institutions of higher learning in various fast
          emerging knowledge based disciplines, for the talented youth, where
          they can:
        </Text>
        <Text size="sm" mt={20}>
          <ThemeIcon color="primary" mr={7}>
            <i className="fas fa-shield-alt"></i>{" "}
          </ThemeIcon>
          Acquire and create most advanced knowledge in their respective
          disciplines of interest.
        </Text>
        <Text size="sm" mt={10}>
          <ThemeIcon color="primary" mr={7}>
            <i className="fas fa-shield-alt"></i>{" "}
          </ThemeIcon>
          Manifest their creative potentials through research and applications.
        </Text>
        <Text size="sm" mt={10}>
          <ThemeIcon color="primary" mr={7}>
            <i className="fas fa-shield-alt"></i>{" "}
          </ThemeIcon>
          Develop holistic competence with global vision, local interface,
          social orientation, industrial applicability and patriotic passions.
        </Text>
        <Text size="sm" mt={10}>
          <ThemeIcon color="primary" mr={7}>
            <i className="fas fa-shield-alt"></i>{" "}
          </ThemeIcon>
          Make an effective contribution to the society in a dynamic
          environment.
        </Text>
        </CustomHeroSection>
  );
}

export default React.memo(UIMission);
