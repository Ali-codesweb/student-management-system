import {
  List,
  SimpleGrid, Text,
  ThemeIcon
} from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../constants/constants";
import PlacementsTable1 from "./components/PlacementsTable1";

function UIPlacements() {
  const coreStrength = [
    "A good education should be followed by prime placement. The placements cell of the Pacific University has credit of securing average two job offers per passing out student.",
    "Our students are being placed across a various sectors, throughout the length & breadth of the country and as well as overseas.",
    "A Strong base of alumni placed worldwide and across all major sectors. This facilitates placements of newer batches with greater ease.",
  ];

  const highlights = [
    "Pacific University has highest number of placement drives in Rajasthan & Record breaking placement record for all the years of its existence",
    "Having raised its benchmark, Pacific University has maintained its trust with regular recruiters, who yet again trusted the quality of students, sensing a potential value addition to their respective firms and recruited in large numbers, offering exciting profiles. There has been a substantial rise in the number of offers made by each company and the average compensation saw a significant increase of 21.18% over the last year.",
    "Job profiles like Relationship Managers, HR Recruiters, Portfolio Managers, Education B2B Marketing, Media and Advertising, Digital Marketing and Financial/ Data Analytics are being offered in line with the changing trends.",
    "Pre-placement of majority of students before completion of second year.",
    "Alumni placed worldwide across different sectors and throughout the country.",
  ];

  const placementsTable = [
    {
      year: "2017-2018",
      data: [
        { title: "No. of Corporates Visited", data: 60 },
        { title: "Highest Package", data: "8.4 Lakh" },
        { title: "Average Package", data: "3 Lakh" },
      ],
    },
    {
      year: "2018-2019",
      data: [
        { title: "No. of Corporates Visited", data: 70 },
        { title: "Highest Package", data: "12 Lakh" },
        { title: "Average Package", data: "3.9 Lakh" },
      ],
    },
    {
      year: "2019-2020",
      data: [
        { title: "No. of Corporates Visited", data: 47 },
        { title: "Highest Package", data: "9 Lakh" },
        { title: "Average Package", data: "3.6 Lakh" },
      ],
    },
    {
      year: "2020-2021",
      data: [
        { title: "No. of Corporates Visited", data: 8675 },
        { title: "Highest Package", data: "10 Lakh" },
        { title: "Average Package", data: "4.25 Lakh" },
      ],
    },
    {
      year: "2021-2022",
      data: [
        { title: "No. of Corporates Visited", data: 85 },
        { title: "Highest Package", data: "10 Lakh" },
        { title: "Average Package", data: "4.5 Lakh" },
      ],
    },
  ];
  const jobFairDetails = [
    {
      year: "2016-2017",
      data: [
        { title: "Total No. of Corporates Visited", data: 73 },
        { title: "No. of vaccines", data: 10200 },
        { title: "Candidates Appeared ", data: 9000 },
        { title: "Candidates Shortlisted ", data: 4450 },
      ],
    },
    {
      year: "2015-2016",
      data: [
        { title: "Total No. of Corporates Visited", data: 102 },
        { title: "No. of vaccines", data: 7000 },
        { title: "Candidates Appeared ", data: 10400 },
        { title: "Candidates Shortlisted ", data: 3994 },
      ],
    },
    {
      year: "2014-2015",
      data: [
        { title: "Total No. of Corporates Visited", data: 109 },
        { title: "No. of vaccines", data: 11300 },
        { title: "Candidates Appeared ", data: 4700 },
        { title: "Candidates Shortlisted ", data: 2112 },
      ],
    },
  ];
  return (
     
      <CustomHeroSection
        carouselImages={[
          "https://www.pacific-university.ac.in/uploads/PageHeaders/4849/_default.jpg",
        ]}
      >
        <Text size="xl" align="center" weight={600} color="primary">
          Placements
        </Text>
        <Text size="lg" align="center" mt={20} weight={500}>
          The Core Strength of the Pacific Group
        </Text>
        <Text size="sm" mt={20}>
          Pacific has aimed at fostering talents of the youth by carving a path
          for their prosperous future. The placement cell has credit of securing
          average 02 job offers per passing out student.{" "}
        </Text>

        <List
          mt={20}
          spacing={10}
          size="sm"
          icon={
            <ThemeIcon color="primary" mr={7}>
              <i className="fas fa-shield-alt"></i>
            </ThemeIcon>
          }
        >
          {coreStrength.map((e) => (
            <List.Item>{e}</List.Item>
          ))}
        </List>
        <Text size="lg" align="center" mt={60} weight={500}>
          Placements in India and Overseas
        </Text>
        <SimpleGrid breakpoints={breakpoints("xs")} mt={30} cols={3}>
          {placementsTable.reverse().map((e) => (
            <PlacementsTable1 key={e.year} year={e.year} data={e.data} />
          ))}
        </SimpleGrid>
        <Text size="lg" align="center" mt={60} weight={500}>
          Placement Hub for North India: Mega Job Fairs, a Regular Feature
        </Text>
        <Text size="sm" mt={20}>
          5th successful Multi-Industry National, Job Fair was organized on 1st
          June, 2016 in the Pacific University in asscociation with District
          Employment Bureau, Udaipur and witnessed an over-whelming response
          from job seekers and companies from across the region. The event
          observed over 150+ job seekers and 73 corporate employers from across
          the country, representing all sectors with 10200 job offers and 4450
          shortlisted candidates. Participating companies spanned across
          industries including IT, ITES & Insurance Sectors, Banking, Telecom,
          KPO, BPO and Automobiles etc. and included reputed names like, NIIT,
          Collabera, Chai Point, Qx Ltd., Advaiya Solutions, Teleperformance,
          Fusion, ArcGate, Universal Hunt, IDBI Fedral, Kotak Mahindra Bank,
          Atlas, WPW, Omnichrome, Ananta Group of Hotels, Skytech, Holister,
          Koak, ICICI Bank, Brand Masala, Ruva Customer. A number of MNCs and
          Indian Players participated. The rules governing selection differed
          from company to company and required that all employees be selected
          and promoted through a written examination of merit or through
          personal interview, group discussion etc. Number of vacancies were
          available for qualified professionals like B.Tech., M.Tech, M.Pharma
          and MBA and even degree holders like B.Com, B.A, B.Sc, B.B.A and
          B.Pharma could grab good job offers.
        </Text>
        <Text size="lg" align="center" mt={60} weight={500}>
          Highlights
        </Text>
        <List
          mt={20}
          spacing={10}
          size="sm"
          icon={
            <ThemeIcon color="primary" mr={7}>
              <i className="fas fa-shield-alt"></i>
            </ThemeIcon>
          }
        >
          {highlights.map((e) => (
            <List.Item>{e}</List.Item>
          ))}
        </List>
        <Text size="lg" align="center" mt={60} weight={500}>
          Details of Job Fair conducted
        </Text>
        <SimpleGrid breakpoints={breakpoints("xs")} mt={30} cols={3}>
          {jobFairDetails.reverse().map((e) => (
            <PlacementsTable1 key={e.year} year={e.year} data={e.data} />
          ))}
        </SimpleGrid>
      </CustomHeroSection>
  );
}

export default UIPlacements;
