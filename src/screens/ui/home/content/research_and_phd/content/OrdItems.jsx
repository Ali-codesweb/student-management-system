import { List, ScrollArea, Table, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";
import { capitalizeFirstLetter } from "../../../../../../constants/constants";
import { ordinanceRegulationData } from "../../../../../../constants/constants_3";

function OrdItems() {
  const { item } = useParams();
  const data = ordinanceRegulationData.find((e) => e.link === item);
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/images/course.jpg",
      ]}
    >
      <Text size="xl" color="primary" align="center" weight={600}>
        {capitalizeFirstLetter(data.link).replace("-", " ")}
      </Text>
      {data.title && (
        <Text size="md" align="center" weight={600} mt={30} color="primary">
          {data.title}
        </Text>
      )}
      <ScrollArea>
        {data.data && (
          <Table highlightOnHover striped border mt={30} className="border">
            <thead>
              <tr>
                <th className="w-10 text-center">Sr. No.</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((e, i) => (
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td>
                    <Text
                      style={{
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {e}
                    </Text>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </ScrollArea>
      {data.title2 && (
        <Text size="md" align="center" weight={600} mt={70} color="primary">
          {data.title2}
        </Text>
      )}
      <ScrollArea>
        {data.data2 && (
          <Table highlightOnHover striped border mt={30} className="border">
            <thead>
              <tr>
                <th className="w-10 text-center">Sr. No.</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.data2.map((e, i) => (
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td>{e}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </ScrollArea>
      {data.link === "admission-test-phd-program" && (
        <>
          <Text size="sm" mt={40}>
            A candidate/student shall be admitted to the Ph.D. Degree through an
            admission test maximum of 200 marks organized by the University for
            this purpose. The admission test shall comprise of two sections
            viz.:
          </Text>
          <Text size="sm" mt={10}>
            Section A : General Aptitude and General Awareness
          </Text>
          <Text size="sm" mt={10}>
            ( 50 Objective questions of 2 marks each)
          </Text>
          <Text size="sm" mt={10}>
            Section B: Subject oriented 50 Objectives questions of 2 marks
            each..
          </Text>
          <Text size="sm" mt={40} weight={600}>
            Note: 1. No negative marking for the above Sections.
          </Text>
          <Text size="sm" mt={10} weight={600} ml={40}>
            1. No negative marking for the above Sections.
          </Text>
        </>
      )}
      {data.link === "schedule-I" && (
        <ScrollArea>
          <Table highlightOnHover striped border mt={30} className="border">
            <thead>
              <tr>
                <th className="w-10 text-center">Sr. No.</th>
                <th className="w-25">Faculty</th>
                <th>Minimal Education Qualification</th>
              </tr>
            </thead>
            <tbody>
              {data.scheduleData1.map((e, i) => (
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td>{e.faculty}</td>
                  <td>{e.text}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollArea>
      )}
      {data.link === "schedule-II" && (
        <>
          <Text weight={600} mt={30} size="lg" align="center">
            Post Graduate Studies(Ph.D)
          </Text>
          <Text weight={600} mt={25} size="sm">
            A candidate shall deposit the under mentioned fee either in
            Cash/Demand Draft in favor of “Pacific Academy of Higher Education
            and Research University” payable at Udaipur in the office of the
            Dean, P.G. Studies.
          </Text>
          <ScrollArea>
            <Table highlightOnHover striped border mt={30} className="border">
              <thead>
                <tr>
                  <th className="w-10 text-center">Sr. No.</th>
                  <th className="w-25">Faculty</th>
                  <th className="text-center">Enrollment Fees</th>
                  <th className="text-center">Admission Fees</th>
                  <th className="text-center">Term Fees</th>
                  <th className="text-center">Thesis Fees</th>
                </tr>
              </thead>
              <tbody>
                {data.scheduleData2.map((e, i) => (
                  <tr>
                    <td className="text-center">
                      {!e["sub_faculty"] && i + 1}
                    </td>
                    <td>{e["sub_faculty"] ? e["sub_faculty"] : e.faculty}</td>
                    <td className="text-center">{e.enrollment_fees}</td>
                    <td className="text-center">{e.admission_fees}</td>
                    <td className="text-center">{e.term_fees}</td>
                    <td className="text-center">{e.thesis_fees}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollArea>
          <Text weight={600} size="sm" mt={35}>
            Note: The term means a period of six months.
          </Text>
          <Text weight={600} size="sm" mt={15}>
            * The Research Scholars shall bear all other expenses by themselves
            towards conduct of the study for research work. The available
            physical infrastructure and library facility of the University can
            be used for the research work.
          </Text>
          <Text weight={600} size="sm" mt={15}>
            ** For Ph.D. scholars who are employed in Pacific University, a
            relaxation of 25% in the term fee shall be granted.
          </Text>
          <Text weight={600} size="sm" mt={15}>
            *** If the candidate receives the financial assistance from any of
            the university/organization/agency for the purpose of pursuing Ph.
            D. work, he/she shall not entitled for any relaxation in the
            University fee.
          </Text>
          <Text weight={600} size="md" color="red" mt={35}>
            Fees once paid to the university shall be not refundable.
          </Text>
          <Text weight={600} size="md" color="red" mt={15}>
            Student needs to deposit fees within 15 days from the date it falls
            due otherwise they shall be levied penalty
          </Text>
        </>
      )}
      {data.link === "schedule-IV" && (
        <>
          <div className="mt-4">
            <Text
              size="lg"
              role={"button"}
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/Syllabus%20A%20Section.pdf"
              target="_blank"
            >
              Syllabus for Section A
            </Text>
          </div>
          <div className="mt-3">
            <Text
              size="lg"
              role={"button"}
              component="a"
              href="https://pacific-university.ac.in/Userfiles/Documents/Syllabus%20A%20Section.pdf"
              target="_blank"
            >
              Syllabus for Section B
            </Text>
          </div>
          {data.scheduleData4.map((e) => (
            <>
              <Text color="primary" size="lg" weight={600} mt={40}>
                Faculty Of {e.faculty}
              </Text>
              <List
                mt={20}
                spacing={10}
                icon={
                  <ThemeIcon>
                    <i className="fas fa-shield-alt"></i>{" "}
                  </ThemeIcon>
                }
              >
                {e.syllabuses.map((j) => (
                  <List.Item role="button">
                    <Text component="a" href={j.link} target="_blank">
                      Syllabus of {j.name}
                    </Text>
                  </List.Item>
                ))}
              </List>
            </>
          ))}
        </>
      )}
    </CustomHeroSection>
  );
}

export default OrdItems;
