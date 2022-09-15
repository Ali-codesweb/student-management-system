import { Image, List, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../../../constants/constants";

function Anveshan() {
  const content_1 =
    "“In the fast changing global scenario, India’s youth will have to adopt Research as a career and increase the pace of research in order to establish India as a leading nation in the world.” This observation was made by Prof. B.P. Sharma, Vice Chancellor, Gautam Buddh University, Greater Noida in his address in the inauguration ceremony of ‘Anveshan 2019’ – the Student Research Convention for West Zone, organised by Pacific University and Association of Indian Universities (AIU) at Udaipur. Prof. Sharma said that the way Artificial Intelligence (AI), Block Chain Technology, Big Data Analytics and Machine Learning are affecting human life all over the world, the nature of jobs would undergo sea change in the near future and only research will sail India through this turmoil.\n\nDr. Amrendra Pani, Director- Research, AIU in his address said that there is an absence of clamour to do something new in the educational field in India and AIU organises such conventions with an objective to bridge this gap.\n\nProf. Mahima Birla, Chief Convener, ‘Anveshan 2019’, in her welcome address said that in the present era only research can find solutions to all the complex problems of day to day life. Dr. Birla said that Anveshan is aimed at identifying and nurturing research talent of the young budding researchers in the country and to provide them with a platform to express their innovative ideas.\n\n";
  const content_2 =
    "Prof. Dipin Mathur, Member, Organising Committee informed that a total of 150 participants from 37 universities from the states of Rajasthan, Gujarat, Madhya Pradesh, Maharashtra and Goa presented 88 innovative projects during the convention. There were 2 rounds - Poster Round and PPT Presentation Round. Renowned experts from the fields of agriculture, basic sciences, health sciences, humanities and engineering & technolgy evaluated the projects and declared three winners each from all the 5 fields. The winners will take part in the national level convention to be organised later.\n\nIn the Valedictory Session of the convention, the Chief Guest Dr. S.C. Tewari, Director R&D Division, Rotam Crop Science observed that Research is like a grinding machine into which we put all the innovative ideas which after churning emerge refined and ready to implement.\n\nMr. Hans Raj Choudhary, President, UCCI said that it is always enlightening to interact with today’s talented youth and he felt certain that successful entrepreneurs of the future will emerge from the young innovators participating in the convention.\n\nProf. Mahima Birla, Dean, Faculty of Management expressed hope that the young innovators will be able to convert their ideas into successful start ups making use of the networking they have developed during the convention.\n\nSpeaking on behalf of the participants, Dr. Rachna Vishwanathan from SNDT University, Pune praised the efforts of the organising team and said that Pacific University has a technologically advanced campus which facilitated the successful organising of this convention.\n\nFollowing participants were declared winners in their respective categories:";

  const images = [
    "http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3534.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3389.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3556.jpg",
  ];
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/7824/_default.jpg",
      ]}
      text={"Anveshan-2019"}
    >
      <Text weight={600} mt={40}>
        ‘Anveshan 2019’ - West Zone Student Research Convention held at Pacific
        University
      </Text>
      <Text
        sx={{
          whiteSpace: "pre-wrap",
        }}
        mt={40}
        size="sm"
      >
        {content_1}
      </Text>
      <SimpleGrid cols={4} mt={40} breakpoints={breakpoints("lg")}>
        {images.map((e, i) => (
          <Image key={i} withPlaceholder src={e} />
        ))}
      </SimpleGrid>
      <Text
        sx={{
          whiteSpace: "pre-wrap",
        }}
        mt={40}
        size="sm"
      >
        {content_2}
      </Text>
      <Text mt={40} size="sm" weight={600}>
        Agriculture:
      </Text>
      <List type="ordered" size={"sm"}>
        <List.Item>Yogesh Shrigopal Dayama, SRTM University, Nanded</List.Item>
        <List.Item>
          Rahul R Shelke, Walchand College of Art & Science, Sholapur University
        </List.Item>
        <List.Item>
          Chavan Pratapsinh Mohan, Mahatma Phule Krishi Vidyapeeth, Rahuri
        </List.Item>
      </List>

      <Text mt={40} size="sm" weight={600}>
        Basic Sciences:
      </Text>
      <List type="ordered" size={"sm"}>
        <List.Item> Avinash Kumar Rai, Pacific University, Udaipur</List.Item>
        <List.Item>
          Patil Shubham Sanjiv, KBC North Maharashtra University, Jalgaon
        </List.Item>
        <List.Item>
          Kiran Kadam, Mahesh Patil, Shubhashri Pusadkar, SRTM University,
          Nanded
        </List.Item>
      </List>
      <Text mt={40} size="sm" weight={600}>
        Health Sciences:
      </Text>
      <List type="ordered" size={"sm"}>
        <List.Item> Sharayu Govardhane, SNDT University, Mumbai</List.Item>
        <List.Item>Priyal Bagwe, Apoorva Patni, Mumbai University</List.Item>
        <List.Item>
          Mehta Harsh Jasmin, Sardar Patel University, Anand
        </List.Item>
      </List>
      <Text mt={40} size="sm" weight={600}>
        Social Sciences:
      </Text>
      <List type="ordered" size={"sm"}>
        <List.Item>
          {" "}
          Manisha Chaudhari, KBC North Maharashtra University, Jalgaon
        </List.Item>
        <List.Item>
          Hibare Rima Balkrushna, College of Commerce, Solapur University
        </List.Item>
        <List.Item>
          Alsaba Abdul Qadir, College of Science, University of Mumbai
        </List.Item>
      </List>
      <Text mt={40} size="sm" weight={600}>
        Engineering and Technology:
      </Text>
      <List type="ordered" size={"sm"}>
        <List.Item>
          {" "}
          Shubhada Padwal, Savitribai Phule Pune University
        </List.Item>
        <List.Item>
          Mansi B. Patel, Dhruvi C. Patel, Ganpat University, Mehsana
        </List.Item>
        <List.Item>
          Mugdha Khatavkar, Nikita Salkar, Shravan Menerikar, Goa University
        </List.Item>
      </List>
    </CustomHeroSection>
  );
}

export default Anveshan;
