import { List, SimpleGrid, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../constants/constants";

const placementItem = [
  {
    year: "2019-2022",
    data: [
      {
        text: "International Placements in 2019-2022",
        link: "/",
      },
    ],
  },
  {
    year: "2019-2022",
    data: [
      {
        text: "National Placements in 2019-2022",
        link: "/",
      },
    ],
  },
  {
    year: "2018-2019",
    data: [
      {
        text: "Faculty of Engineering 2018-2019",
        link: "/",
      },
      {
        text: "Faculty of Management 2018-2019",
        link: "/",
      },
    ],
  },
  {
    year: "2017-2018",
    data: [
      {
        text: "Faculty of Engineering 2017-2018",
        link: "/",
      },
      {
        text: "Faculty of Management 2017-2018",
        link: "/",
      },
    ],
  },
  {
    year: "2016-2017",
    data: [
      {
        text: "Faculty of Management 2016 - 2017",
        link: "/",
      },
      {
        text: "Faculty of Science 2016-2017",
        link: "/",
      },
    ],
  },
  {
    year: "2014-2015",
    data: [
      {
        text: "Faculty of Management Placements 2014-2015",
        link: "/",
      },
    ],
  },
  {
    year: "2013-2014",
    data: [
      {
        text: "Faculty of Management Placements 2013-2014",
        link: "/",
      },
      {
        text: "Faculty of Engineering 2013-2014",
        link: "/",
      },
    ],
  },
  {
    year: "2012-2013",
    data: [
      {
        text: "Faculty of Management 2012-2013",
        link: "/",
      },
      {
        text: "Faculty of Engineering 2012-2013",
        link: "/",
      },
    ],
  },
];

function UIPlacementRecord() {
  const navigate = useNavigate();

  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/6029/_default.jpg",
      ]}
    >
      <Text size="xl" align="center" weight={600} color="primary">
        Student Placement Record
      </Text>
      <SimpleGrid cols={2} breakpoints={breakpoints("xs")} mt={50}>
        {placementItem.map((e) => (
          <div className="mt-5">
            <Text size="lg" align="center" weight={600}>
              {" "}
              Record Breaking Placement in {e.year}
            </Text>
            <List
              mt={10}
              spacing={15}
              size="sm"
              icon={
                <ThemeIcon color="primary" mr={7}>
                  <i className="fas fa-shield-alt"></i>
                </ThemeIcon>
              }
            >
              {e.data.map((j) => (
                <List.Item
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate(j.link)}
                >
                  {j.text}
                </List.Item>
              ))}
            </List>
          </div>
        ))}
      </SimpleGrid>
    </CustomHeroSection>
  );
}

export default UIPlacementRecord;
