import {
  Button, Group, ScrollArea,
  Table,
  Text,
  ThemeIcon
} from "@mantine/core";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomHeroSection from "../../components/ui/CustomHeroSection";
import {
  capitalizeFirstLetter
} from "../../constants/constants";
import { coursesInfoData } from "../../constants/constants_1";
function UICourse() {
  const navigate = useNavigate();
  const params = useParams();
  let course = params.course;
  const courseData = coursesInfoData.find((e) => e.name === course);
  if (course === "dairy") {
    course = "Dairy & Food Technology";
  } else {
    course = capitalizeFirstLetter(course).replace("-", " ");
  }
  return (
    <CustomHeroSection carouselImages={courseData.carouselImages}>
      <Text size="xl" weight={900} align="center">
        {course}
      </Text>
      <Text color="primary" align="center" weight={600} size="md" mt={10}>
        Pacific College of {course}
      </Text>
      <Group position="apart" mt={30}>
        <Button onClick={() => navigate("/pre-admission")} color="pink.9">
          Click here to apply
        </Button>
        <div>
          <Text weight={500} size="sm">
            Further Queries:
          </Text>
          <Text size="sm" m={0}>
            Contact : +91 {courseData.contacts.map((e) => e + ", ")}
          </Text>
          <Text size="sm" m={0}>
            Email:{" "}
            {courseData.email.map((e) => (
              <a
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href={"mailto: " + e}
              >
                {e + ", "}
              </a>
            ))}
          </Text>
          {courseData.website && (
            <Text size="sm" m={0}>
              Website :{" "}
              <a
                href={"https://" + courseData.website}
                target="_blank"
                rel="noreferrer"
                className="
              text-decoration-none"
              >
                {courseData.website}
              </a>
            </Text>
          )}
        </div>
      </Group>

      <ScrollArea>
        <Table mt={40} striped>
          <thead>
            <tr>
              <th>Course</th>
              <th>Eligibility</th>
              <th>Duration</th>
              <th>Tuition Fees Every Year</th>
            </tr>
          </thead>
          <tbody>
            {courseData.table.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.course}</td>
                  <td>{e.eligibility}</td>
                  <td>{e.duration}</td>
                  <td>{e.fees}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </ScrollArea>
      <div className="mt-5">
        {courseData.description &&
          courseData.description.map((e) => (
            <div className="d-flex align-items-start mt-3">
              <ThemeIcon color="primary" mr={7}>
                <i className="fas fa-shield-alt"></i>{" "}
              </ThemeIcon>{" "}
              <Text size="sm" m={0}>
                {e}
              </Text>
            </div>
          ))}
      </div>
    </CustomHeroSection>
  );
}

export default React.memo(UICourse);
