import { List, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";

function OrdinanceRegulation() {
  const navigate = useNavigate();
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4185/_default.jpg",
      ]}
    >
      <Text size="xl" align="center">
        Ordinance & Regulation
      </Text>
      <Text mt={30}>
        University offers Doctoral Research Programme leading to Ph.D. degree in
        the following faculties.{" "}
      </Text>

      <Text size="sm" mt={30}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        Faculty of Management
      </Text>
      <Text size="sm" mt={10}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        Faculty of Engineering
      </Text>
      <Text size="sm" mt={10}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        Faculty of Dentistry
      </Text>
      <Text size="sm" mt={10}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        Faculty of Pharmacy
      </Text>
      <Text size="sm" mt={10}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        Faculty of Commerce
      </Text>
      <Text size="sm" mt={10}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        Faculty of Science
      </Text>
      <Text size="sm" mt={10}>
        <ThemeIcon color="primary" mr={7}>
          <i className="fas fa-shield-alt"></i>{" "}
        </ThemeIcon>
        Faculty of Education
      </Text>
      <Text mt={30}>Ordinances & Regulations for Ph.D Program</Text>
      <List
        mt={20}
        size="sm"
        spacing={20}
        icon={
          <ThemeIcon color="primary" mr={7}>
            <i className="fas fa-shield-alt"></i>{" "}
          </ThemeIcon>
        }
      >
        <List.Item role={"button"} onClick={() => navigate("preamble")}>
          <Text component="a">Preamble</Text>
        </List.Item>
        <List.Item role={"button"} onClick={() => navigate("definitions")}>
          <Text component="a">Definitions</Text>
        </List.Item>
        <List.Item role={"button"} onClick={() => navigate("ordinances")}>
          <Text component="a">Ordinances</Text>
        </List.Item>
        <List.Item>
          Regulations
          <List.Item
            mt={20}
            role="button"
            onClick={() => navigate("reg-eligibility")}
          >
            <Text component="a">Eligibility Criteria for Ph.D. Supervisor</Text>
          </List.Item>
          <List.Item
            role="button"
            onClick={() => navigate("procedure-for-admission")}
          >
            <Text component="a">Procedure for Admission</Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              onClick={() => navigate("allocation-for-supervisor")}
            >
              {" "}
              Allocation of Supervisor/Co – Supervisor/Industry Advisor
            </Text>
          </List.Item>
          <List.Item role="button" onClick={() => navigate("course-work")}>
            <Text component="a">Course work</Text>
          </List.Item>
          <List.Item
            role="button"
            onClick={() => navigate("procedure-for-synopsis-approval")}
          >
            <Text component="a">Procedure for Synopsis Approval</Text>
          </List.Item>
          <List.Item role="button" onClick={() => navigate("fees")}>
            <Text component="a">Fees</Text>
          </List.Item>
          <List.Item
            role="button"
            onClick={() => navigate("evaluation-and-assessment-methods")}
          >
            <Text component="a">Evaluation & Assessment Methods</Text>
          </List.Item>
          <List.Item role="button" onClick={() => navigate("attendance")}>
            <Text component="a">Attendance</Text>
          </List.Item>
          <List.Item
            role="button"
            onClick={() => navigate("format-for-thesis-preparation")}
          >
            <Text component="a">Format for thesis preparation</Text>
          </List.Item>
          <List.Item
            role="button"
            onClick={() => navigate("withdrawal-from-the-program")}
          >
            <Text component="a">Withdrawal from the Programme</Text>
          </List.Item>
          <List.Item
            role="button"
            onClick={() => navigate("cancellation-of-registration")}
          >
            <Text component="a">Cancellation of Registration</Text>
          </List.Item>
          <List.Item role="button" onClick={() => navigate("general")}>
            <Text component="a"> General</Text>
          </List.Item>
          <List.Item
            role="button"
            onClick={() => navigate("admission-test-phd-program")}
          >
            <Text component="a"> Admission Test for Ph.D. Programme</Text>
          </List.Item>
          <List.Item role="button" onClick={() => navigate("schedule-I")}>
            <Text component="a">
              Schedule I (Minimum Educational Qualification)
            </Text>
          </List.Item>
          <List.Item role="button" onClick={() => navigate("schedule-II")}>
            <Text component="a">Schedule II (Fees)</Text>
          </List.Item>
          <List.Item role="button" onClick={() => navigate("/")}>
            <Text component="a">Schedule III (Course Work)</Text>
          </List.Item>
          <List.Item onClick={() => navigate("schedule-IV")}>
            <Text component="a">
              Schedule IV (Ph.D. Entrance test Examination Syllabus Section A &
              Section-B)
            </Text>
          </List.Item>
        </List.Item>
        <List.Item >
          Appendices
          <List.Item mt={20} role="button">
            <Text
              component="a"
              href="http://phd.pacific-university.ac.in/OnlineService/"
              target="_blank"
            >
              B1 - Online Application form for Admission Test of Ph.D. Programme
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/B2.pdf"
              target="_blank"
            >
              B2 - Admit Card (Centre Copy)
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/B3.pdf"
              target="_blank"
            >
              B3 - Admit Card (Student Copy )
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/B4%20New.pdf"
              target="_blank"
            >
              B4 - Application for registration for the degree of Ph.D.
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/B5.pdf"
              target="_blank"
            >
              B5 - Format for Outline of Proposed Research Work
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/C1.pdf"
              target="_blank"
            >
              C1 - Format of Cover & title Page
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/C2new.pdf"
              target="_blank"
            >
              C2 - Declaration to be given by the Candidate and Supervisor
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/C3_new.pdf"
              target="_blank"
            >
              C3 - Certificate to be given by the Supervisor
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text component="a" href="" target="_blank">
              C4 - Photocopies of Research Papers published
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/Certificate%20of%20Grades7july.pdf"
              target="_blank"
            >
              C5 - Certificate of Grades to be given by the Supervisor/Course
            </Text>
            Instructor for Ph.D.{" "}
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/C6.pdf"
              target="_blank"
            >
              C6 - Format of Synopsis Cover Page.{" "}
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/Copyright.pdf"
              target="_blank"
            >
              C7 - Copyright Form{" "}
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/CheckListAtTheTimeOfThesisSubmission.pdf"
              target="_blank"
            >
              C8 - Check List for at the time of Thesis Submission{" "}
            </Text>
          </List.Item>
          <List.Item role="button">
            <Text
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/Format%20of%20Six%20Mothly%20Progress%20Report.pdf"
              target="_blank"
            >
              E1 - Format of Six Mothly Progress Report
            </Text>{" "}
          </List.Item>
        </List.Item>
      </List>
    </CustomHeroSection>
  );
}

export default OrdinanceRegulation;
