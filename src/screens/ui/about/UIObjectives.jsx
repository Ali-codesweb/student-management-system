import { Text, ThemeIcon } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";

function UIObjectives() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/867/_default.jpg",
      ]}
    >
      <Text size="xl" weight={900} align="center">
        Objectives
      </Text>
      <Text size="sm" mt={40}>
        In order to fulfillment of its mission and vision, and to continuously
        strides towards educational excellence, the University has following
        objectives:
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To impart quality education in various technical, non-technical and
        professional disciplines.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To bring academic excellence in various spheres of knowledge.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To establish world class & state-of-the-art infrastructure to facilitate
        quality education.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To cultivate skills to enhance employability of the students including
        inclination for self-employment.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To promote quality research and publications.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To focus on holistic student development by using the latest pedagogical
        inputs and through extra-curricular activities like sports, cultural
        programme, project etc.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To be engaged in socially relevant community development projects.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To forge strong industry- institute linkages for mutually beneficial
        exchanges.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To create and disseminate knowledge by conducting and participating in
        national and international conferences.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To create a platform through which other institutions can participate
        and share in activities.
      </Text>
      <Text size="sm" mt={20}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        To inculcate entrepreneurial ability among the students.
      </Text>
    </CustomHeroSection>
  );
}

export default React.memo(UIObjectives);
