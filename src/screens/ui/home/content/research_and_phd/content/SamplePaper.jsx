import { List, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";

function SamplePaper() {
  const data = [
    {
      faculty: "Biotechnology",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Biotechnology12012.pdf",
    },
    {
      faculty: "Civil Engineering",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Civil%20Engineering.pdf",
    },
    {
      faculty: "Commerce",
      link: "https://pacific-university.ac.in/Userfiles/Documents/commerce12012.pdf",
    },
    {
      faculty: "Computer Science",
      link: "https://pacific-university.ac.in/Userfiles/Documents/computerscience.pdf",
    },
    {
      faculty: "Dental Science",
      link: "https://pacific-university.ac.in/Userfiles/Documents/dental%20modify.pdf",
    },
    {
      faculty: "Economics",
      link: "https://pacific-university.ac.in/Userfiles/Documents/ECONOMICS.pdf",
    },
    {
      faculty: "Electronics  & Communication Engineering",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Electronics%20&%20Communication%20Engineering.pdf",
    },
    {
      faculty: "Fashion Technology",
      link: "https://pacific-university.ac.in/Userfiles/Documents/fashion%20technology-v%20test%20correct.pdf",
    },
    {
      faculty: "Management",
      link: "https://pacific-university.ac.in/Userfiles/Documents/MANAGEMENT12.pdf",
    },
    {
      faculty: "Tourism Management",
      link: "https://pacific-university.ac.in/Userfiles/Documents/final%20tourism%20management.pdf",
    },
    {
      faculty: "Journalism & Mass Communication",
      link: "https://pacific-university.ac.in/Userfiles/Documents/jmc.pdf",
    },
    {
      faculty: "Philosophy",
      link: "https://pacific-university.ac.in/Userfiles/Documents/philosophy%20final.pdf",
    },
    {
      faculty: "Pharmacy",
      link: "https://pacific-university.ac.in/Userfiles/Documents/phamacy.pdf",
    },
    {
      faculty: "Physics",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Physics12012.pdf",
    },
    {
      faculty: "Sociology",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Sociology%20-%20Eng.pdf",
    },
    {
      faculty: "Education",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Education12.pdf",
    },
    {
      faculty: "Chemistry",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Chemistry1.pdf",
    },
    {
      faculty: "Drawing & Painting",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Drawing_Painting.pdf",
    },
    {
      faculty: "Electrical Engineering",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Electrical_Engineering.pdf",
    },
    {
      faculty: "English",
      link: "https://pacific-university.ac.in/Userfiles/Documents/English.pdf",
    },
    {
      faculty: "Geography",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Geography.pdf",
    },
    {
      faculty: "Hindi",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Hindi.pdf",
    },
    {
      faculty: "History",
      link: "https://pacific-university.ac.in/Userfiles/Documents/History.pdf",
    },
    {
      faculty: "Law",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Law.pdf",
    },
    {
      faculty: "Library Science",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Library_Science.pdf",
    },
    {
      faculty: "Mathematical Science",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Mathematical_Science.pdf",
    },
    {
      faculty: "Mechanical Engineering",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Mechanical_Engineering.pdf",
    },
    {
      faculty: "Physical Education",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Physical_Edcation.pdf",
    },
    {
      faculty: "Political Science",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Political_Science.pdf",
    },
    {
      faculty: "Psychology",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Psychology.pdf",
    },
    {
      faculty: "Public Administration",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Public_Administration.pdf",
    },
    {
      faculty: "Sanskrit",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Sanskrit.pdf",
    },
    {
      faculty: "Social Work",
      link: "https://pacific-university.ac.in/Userfiles/Documents/Social_Work.pdf",
    },
  ];
  return (
    <CustomHeroSection
      carouselImages={["https://www.pacific-university.ac.in/home"]}
    >
      <Text size="xl" weight={600} color="primary">
        Sample Paper
      </Text>
      <List
        spacing={15}
        mt={40}
        icon={
          <ThemeIcon color="primary" mr={7}>
            <i className="fas fa-shield-alt"></i>{" "}
          </ThemeIcon>
        }
      >
        <List.Item role="button">
          <Text
            component="a"
            href="https://pacific-university.ac.in/Userfiles/Documents/GENERAL_APTITUDE.pdf"
            target={"_blank"}
            size='sm'
          >
            Sample Paper for Ph.D. Section A
          </Text>
        </List.Item>
        {data.map((e) => (
          <List.Item role="button" key={e.faculty}>
            <Text size='sm' component="a" arget={"_blank"} href={e.link}>
              Sample Paper For Ph.D Section B {e.faculty}
            </Text>
          </List.Item>
        ))}
      </List>
    </CustomHeroSection>
  );
}

export default SamplePaper;
