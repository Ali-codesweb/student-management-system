import { Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";

function OrdPreamble() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/images/course.jpg",
      ]}
    >
      <Text size="xl" align='center' weight={600}>
        Preamble
      </Text>
      <Text size="sm" weight={500} mt={30}>
        The Pacific Academy of Higher Education and Research University herein
        after also referred as Pacific University offers doctoral research
        programmes in the Faculties of Engineering, Pharmacy, Management
        Studies, Dental Science, Commerce, Education, Hotel Management, Media
        and Mass Communication, Science and Arts(Social Science & Humanities)
        leading to the award of Ph.D. Degree. The award of Doctor of Philosophy
        degree is an academic achievement of high esteem. Innovativeness and
        creativity in the work and reliability and validity in the findings
        shall constitute the core criteria to assess and evaluate the research
        work for the award of Ph.D. degree. Originality in the work shall be of
        paramount importance. The grant of Doctor of Philosophy shall be
        governed by the ordinance and regulations that follow hereafter.
      </Text>
      <Text size="sm" weight={500} mt={20}>
        The candidate shall be enrolled in regular mode for Ph.D. degree in the
        Faculties of Engineering, Science, Pharmacy, Management Studies, Dental
        Science, Commerce, Fashion Technology, Media & Mass Communication,
        Arts(Social Science & Humanities), Hotel Management and Education twice
        in a year through a written test followed by an interview.
      </Text>
      <Text size="sm" weight={500} mt={20}>
        The University strives to promote research of International Standards
        and shall also help and encourage the students to seek patents and
        publish research papers in national and international journals.
      </Text>
    </CustomHeroSection>
  );
}

export default OrdPreamble;
