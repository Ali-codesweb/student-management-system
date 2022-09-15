import { List, Paper, SimpleGrid, Text, ThemeIcon } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";
import {
  breakpoints,
  capitalizeFirstLetter,
} from "../../../../../../constants/constants";

const Notice = () => {
  return (
    <List
      mt={35}
      spacing={15}
      size="sm"
      icon={
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
      }
    >
      <List.Item>
        Minimum Paper Publication required for Thesis Submission
      </List.Item>
      <List.Item>Notice for Diwali holiday</List.Item>
    </List>
  );
};
const SeatMatrix = () => {
  const facultiesList = [
    {
      faculty: "Management",
      seats: 25,
    },
    {
      faculty: "Commerce",
      seats: 8,
    },
    {
      faculty: "Hotel Management",
      seats: 3,
    },
    {
      faculty: "Life Sciences",
      seats: 4,
    },
    {
      faculty: "Chemistry",
      seats: 8,
    },
    {
      faculty: "Mathematical Sciences",
      seats: 5,
    },
    {
      faculty: "Physics",
      seats: 2,
    },
    {
      faculty: "Physical Education",
      seats: 7,
    },
    {
      faculty: "Psychology",
      seats: 4,
    },
    {
      faculty: "Library Science",
      seats: 5,
    },
    {
      faculty: "Geography",
      seats: 2,
    },
    {
      faculty: "History",
      seats: 6,
    },
    {
      faculty: "Economics",
      seats: 8,
    },
    {
      faculty: "Hindi",
      seats: 6,
    },
    {
      faculty: "Social Work",
      seats: 6,
    },
    {
      faculty: "Education",
      seats: 12,
    },
    {
      faculty: "Pharmacy",
      seats: 8,
    },
    {
      faculty: "Dentistry",
      seats: 17,
    },
    {
      faculty: "Computer Science",
      seats: 7,
    },
    {
      faculty: "Yoga",
      seats: 4,
    },
    {
      faculty: "Law",
      seats: 8,
    },
    {
      faculty: "English",
      seats: 4,
    },
    {
      faculty: "Computer Engineering",
      seats: 6,
    },
    {
      faculty: "Mechanical Engineering",
      seats: 5,
    },
    {
      faculty: "Civil  Engineering",
      seats: 6,
    },
    {
      faculty: "Electrical   Engineering",
      seats: 6,
    },
    {
      faculty: "Media and Mass Communication",
      seats: 4,
    },
    {
      faculty: "Political Science",
      seats: 4,
    },
    {
      faculty: "Drawing and Painting",
      seats: 4,
    },
  ];

  return (
    <>
      <Text size="sm" mt={40} color="blue">
        The seats may increased as per the availability at the time of
        Interview.
      </Text>
      <SimpleGrid mt={30} cols={4} breakpoints={breakpoints("xs")}>
        {facultiesList.map((e) => (
          <Paper className="border" p={10}>
            <Text size="sm">{e.faculty}</Text>
            <Text size="sm">Number of Seats : {e.seats}</Text>
          </Paper>
        ))}
      </SimpleGrid>
    </>
  );
};
const CheckList = () => {
  const [checklistsData, setCheckListData] = useState([
    "Submission of Declaration as per Form No. C20",
    "Certificate to be given by Supervisor as per Form No. C3",
    "2 (two) Hard copies duly singed by you Supervisor in Spiral Binding and 1 Soft copy both in Word as well as PDF Format.",
    "Details of Minimum two paper presentation and at least one participation in any National /International Conference pertaining to the research topic selected for the award of Ph.D degree. Copy of certificate of the same should be enclosed in Spiral Binding.",
  ]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
    if (params.id && params.id === "1") {
      setCheckListData([
        ...checklistsData,
        "Details of minimum Two Paper Publications in Journal having ISSN during the research period for the award of Ph.D. degree and pertaining to the topic related to the Ph.D. research work. Copy of full length paper it be enclosed in Spiral Binding.",
      ]);
    } else if (params.id && params.id === "2") {
      setCheckListData([
        ...checklistsData,
        "Details of minimum Two Paper Publications in Journal having ISSN and out of which at least one should be in any of the Journal indexed with Pubmed, Elsevier, SCOPUS, Springer or Journal having SCI (Science Citation Index) Impact Factor by Thomson Reuters during the research period for the award of Ph.D. degree and pertaining to the topic related to the Ph.D. research work. Copy of full length paper it be enclosed in Spiral Binding.S",
      ]);
    }
    console.log(checklistsData);
  }, [params.id]);
  return (
    <List
    size='sm'
      spacing={15}
      mt={40}
      icon={
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
      }
    >
      {params["id"] ? (
        <>
          {checklistsData.map((e) => (
            <List.Item>{e}</List.Item>
          ))}
        </>
      ) : (
        <>
          <List.Item>
            <Text role="button" onClick={() => navigate("1")} component="a">
              Check List For Pre Thesis Prsentation
            </Text>
          </List.Item>
          <List.Item>
            <Text role="button" onClick={() => navigate("2")} component="a">
              Check List For Pre Thesis Prsentation (Dentistry / Engineering /
              Pharmacy / Science)
            </Text>
          </List.Item>
        </>
      )}
    </List>
  );
};

function NoticeSeatMatrixChecklist() {
  const location = useLocation();
  const path = location.pathname.split("/")[3];

  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4788/_default.jpg",
      ]}
    >
      <Text weight={600} size="xl" color="primary" align="center">
        {capitalizeFirstLetter(path).replace("-", " ")}
      </Text>
      {path === "notice" ? (
        <Notice />
      ) : path === "seat-matrix" ? (
        <SeatMatrix />
      ) : path === "check-list" ? (
        <CheckList />
      ) : null}
    </CustomHeroSection>
  );
}

export default NoticeSeatMatrixChecklist;
