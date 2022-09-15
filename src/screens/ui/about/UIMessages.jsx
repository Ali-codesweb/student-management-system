import { Center, Image, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../components/ui/CustomHeroSection";

function UIMessages() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/6739/_default.jpg",
      ]}
    >
      <Text size="xl" weight={900} align="center">
        Chair Person
      </Text>
      <Center className="flex-column mt-3">
        <Image
          height={120}
          fit="contain"
          src="http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_2919.jpg"
        />
        <Text color={"primary"}>B. R. Agarwal</Text>
        <Text color={"primary"} size="xs">
          Chairman (PAHER Society)
        </Text>
      </Center>
      <Text size="sm" mt={20}>
        At Pacific University, we envision a future where education and
        knowledge are the key factors in our nation's progress. Hence, we strive
        to inculcate qualities like perseverance and determination in our
        students, and train them to be well-qualified professionals.
      </Text>

      <Text size="xl" weight={900} mt={40} align="center">
        Secretary
      </Text>
      <Center className="flex-column mt-3">
        <Image
          height={120}
          fit="contain"
          src="http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_2920.jpg"
        />
        <Text color={"primary"}>Rahul Agarwal</Text>
        <Text color={"primary"} size="xs">
          Secretary (PAHER Society)
        </Text>
      </Center>
      <Text size="sm" mt={20}>
        We at pacific believes in imparting transformative education, beneficial
        to global community to mark our position as an international leader in
        education and thought generation, we continuously emphasize on
        strengthening our research base and inspiring diversity in perspectives.
      </Text>

      <Text size="xl" weight={900} mt={40} align="center">
        President
      </Text>
      <Center className="flex-column mt-3">
        <Image
          height={120}
          fit="contain"
          src="http://www.pacific-university.ac.in/uploads/Pages/Document/Krishna_Kant_Dave.jpeg"
        />
        <Text color={"primary"}>Prof. Krishna Kant Dave</Text>
      </Center>
      <Text size="sm" mt={20}>
        I welcome all the students who want to shape their career at Pacific
        Academy of Higher Education and Research University (PAHER University)
        Udaipur. The University has attained many fabulous milestones and has
        emerged as one of the best University in Southern Rajasthan since its
        inception from 2010. We are committed to attain our mission which is to
        promote educational institutes of higher learning in various fast
        emerging knowledge based discipline. The University is committed to
        nurture a culture that extends the colours of knowledge and intellectual
        priority in all fields for the global humanity.
      </Text>
      <Text size="sm" mt={20}>
        We, at PAHER University launched a series of initiatives called
        Paci-2025 series that provide answers to some of the greatest challenges
        we are facing now a days in education.Our aim is to accomplish the
        greatest challenges by providing innovation, affordability and
        accessibility, transformative education,vocal for local, placement and
        implementation of National Education Policy to deliver higher education
        at the highest proven value.
      </Text>
      <Text size="sm" mt={20}>
        I urge every stakeholder of the university to invest in ideas, put your
        hundred percent and create something novel and appropriate. Creativity
        is essential in higher education that gets new businesses started and
        execution of these ideas will sustainus for longer period of time in
        future.
      </Text>
      <Text size="sm" mt={20}>
        I wish everyone “all the best”. Let’s come together to build a new
        India.
      </Text>

      <Text size="xl" weight={900} mt={40} align="center">
        Registrar
      </Text>
      <Center className="flex-column mt-3">
        <Image
          height={120}
          fit="contain"
          src="http://www.pacific-university.ac.in/uploads/Pages/Document/45472353-08cb-42e9-8dd6-a6c2a63147f7.jpg"
        />
        <Text color={"primary"}>Sharad Kothari</Text>
      </Center>
      <Text size="sm" mt={20}>
        Technological Progress in the last few decades in communication,
        transportation and information has helped to eliminate national barriers
        and create a global market place that is more comparative than ever.
        Thus, it’s become imperative for any educational institute to develop
        its student in such a manner that they can progress in these global
        environment. At Pacific University our mission is to provide our
        students quality education and aliveness providing more eventualities
        not only to learn but also to practice.
      </Text>
    </CustomHeroSection>
  );
}

export default React.memo(UIMessages);
