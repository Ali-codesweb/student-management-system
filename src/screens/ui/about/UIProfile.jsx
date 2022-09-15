import { Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";

function UIProfile() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/14932/_default.jpg",
      ]}
    >
      <Text size="xl" weight={900} align="center">
        Profile
      </Text>
      <Text mt={40} size="sm">
        Established in 1997, the Pacific University has made a mark on the
        educational map of India. Over the last 25 years, the Pacific Society
        has continued to make rapid strides in the field of higher & technical
        education. It has established more than twenty one institutes and become
        a multi-disciplinary conglomeration of colleges providing higher
        education in the diverse fields of Engineering, Management & Commerce,
        Dentistry, Pharmacy, Education, Basic & Applied Sciences, and Research
        Programmes (Ph.D.) in all relevant disciplines.
      </Text>
      <Text mt={20} size="sm">
        Pacific University has a mammoth ultra modern campus sprawling over more
        than 100 acres of lush greenery, including state of the art classrooms,
        separate hostels for boys and girls, laboratories, and libraries,
        internationally benchmarked curricula, innovative pedagogy, experiential
        learning and affordable quality education, the university is committed
        to establish itself as a centre of excellence in research.
      </Text>
      <Text mt={20} size="sm">
        Education at Pacific is holistic, aiming to develop the intellectual &
        personal strengths of students. Pacific has an excellent track record of
        launching its student into successful careers which has been proved by
        our alumni presently working in 150+ global and Indian super brands.
      </Text>
      <Text mt={20} size="sm">
        The Pacific Dental College has the reputation of being No. 1 in India
        owing to the fact that it holds highest turn-out in the OPD and maximum
        practical exposure to its students. The Pacific University has the best
        placement average in North India and pioneered new programmes that
        assure a high profile career and pride of practicing the highest rated
        profession.
      </Text>
    </CustomHeroSection>
  );
}

export default React.memo(UIProfile);
