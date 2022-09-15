import { Box, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../components/ui/CustomHeroSection";
import PlacementsTable1 from "../../../placement/components/PlacementsTable1";

const header =
  "5-6 OCTOBER, 2018\n\nDEPARTMENT OF PG STUDIES & DEPARTMENT OF CHEMISTRY (PAHER UNIVERSITY UDAIPUR, INDIA)\n\nIn association with INDIAN CHEMICAL SOCIETY, KOLKATA";
const conference_theme =
  "Chemical Sciences provide desired materials to the society; may be new drugs, textiles, etc. Sidewise, it is also considered responsible for environmental pollution. Chemist has to perform dual duty to synthesize chemicals but with less harmful effects. Apart from it, it is entering a new era with development of newer branches of chemistry and therefore, an International Conference on “Chemical Sciences in New Era” is being organized at this University in Association with Indian Chemical Society, Kolkata, where our younger chemists will get an opportunity to present their research output and to discuss their ideas with the established chemists for furtherance of their research.";
const department_of_chemistry =
  "Department of Chemistry was incepted in 2011. Presently, it is being headed by Dr. Surbhi Benjamin. It is still in its infant age; even then it has organized 1 International and 5 National Conferences/Seminars in last six years. The Department has published 6 books by Taylor & Francis, Elsevier and Apple Academic Press, USA. The researchers are working in versatile fields of Chemistry like Waste Water Treatment, Photocatalysis, Green Chemistry, Nanochemistry, Environmental Chemistry, etc.";
const department_of_pgstudies =
  "Department of PG Studies is continuously inclined towards building the capacity of scholars and making them aware about emerging trends in research in various disciplines. During the nascent period of its inception, scholars have published research papers in reputed journals being published by indexed with Elsevier, Scopus, Pubmed, IEEE springer etc. and has also endeavoured in obtaining patents. The department also encourages research in newer areas which are beneficial for the society at large.";
const indian_chemical_society =
  "Indian Chemical Society, Kolkata is a prime body of Chemistry in India and it was instituted in 1924 by Stalwarts of Chemistry like Prof. PC Ray, Prof. JN Mukherjee, Prof. JC Ghosh and Prof. SS Bhatnagar. It is devoted to development of teaching and research in Chemical Sciences.";

const table_1 = [
  {
    title: "Green Chemistry",
    data: "Nanochemistry",
  },
  {
    title: "Organic Synthesis",
    data: "Material Science",
  },
  {
    title: "Chemical Kinetics",
    data: "Waste Water Management",
  },
  {
    title: "Solar Energy",
    data: "Pharmaceutical Chemistry",
  },
];
const table_2 = [
  {
    title: "Last Date of submission of Abstract and Form",
    data: "September 15, 2018",
  },
  {
    title: "Research Scholars (Indian National)",
    data: "800/- Per Person",
  },
  {
    title: "Academicians (Indian National)",
    data: "1200/- Per Person",
  },
  {
    title: "Professionals Industrial (Indian National)",
    data: "3000/- Per Person",
  },
  {
    title: "International Participants",
    data: "5000/- Per Person",
  },
];
function IConChemicalSCiences() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/7706/_default.jpg",
      ]}
      text={"International Conference on Chemical Sciences"}
    >
      <Text
        mt={40}
        sx={{
          whiteSpace: "pre-wrap",
        }}
        weight={600}
        align="center"
      >
        {header}
      </Text>
      <Text mt={30} weight={600} size="sm">
        Conference Theme
      </Text>
      <Text mt={15} size="sm">
        {conference_theme}
      </Text>
      <Box
        mt={30}
        sx={(theme) => ({
          maxWidth: 600,
          minWidth: 400,
        })}
      >
        <PlacementsTable1
          text={"Themes for Oral/Poster Presentation"}
          data={table_1}
        />
      </Box>
      <Text mt={30} weight={600} size="sm">
        Department of Chemistry
      </Text>
      <Text mt={15} size="sm">
        {department_of_chemistry}
      </Text>
      <Text mt={30} weight={600} size="sm">
        Department of PG Studies
      </Text>
      <Text mt={15} size="sm">
        {department_of_pgstudies}
      </Text>
      <Text mt={30} weight={600} size="sm">
        Indian Chemical Society
      </Text>
      <Text mt={15} size="sm">
        {indian_chemical_society}
      </Text>
      <Box
        mt={30}
        sx={(theme) => ({
          maxWidth: 600,
          minWidth: 400,
        })}
      >
        <PlacementsTable1
          text={"Registration, Mode of Fee Payment and Submission of Abstract"}
          data={table_2}
        />
      </Box>
      <Text mt={30} size="sm">
        International Participants may also make their presentation online on
        October 06, 2018.
      </Text>
      <Text mt={15} size="sm">
        Participants would be able to submit the registration fee, registration
        form and abstract only through online mode. The link for the same is :
      </Text>
      <Text mt={30} weight={600} size="sm">
        Best Oral/Poster Awards
      </Text>
      <Text mt={15} size="sm">
        Two Best Oral/Poster Presentation in each of the category viz. Scientist
        and Young Scientist, respectively would be awarded in the conference.
      </Text>
      <Text mt={30} weight={600} size="sm">
        Guidelines for Formatting of the Abstract/ Poster
      </Text>
      <Text mt={15} size="sm">
        Abstracts are invited from researchers, academicians, professionals and
        students on the issues from the theme.
      </Text>
      <Box
        mt={30}
        sx={(theme) => ({
          maxWidth: 600,
          minWidth: 400,
        })}
      >
        <PlacementsTable1
          text={" "}
          data={table_2}
        />
      </Box>
    </CustomHeroSection>
  );
}

export default IConChemicalSCiences;
