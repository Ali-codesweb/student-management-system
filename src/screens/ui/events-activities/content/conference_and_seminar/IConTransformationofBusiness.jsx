import { Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../../../constants/constants";

function IConTransformationofBusiness() {
  const content =
    "The Faculty of Management, PAHER University organized this two-day International Conference on “Transformation of Business, Economy and Society in Digital Era” scheduled on 26th and 27th April 2019. This conference has provided a platform for researchers, academicians and industry to share and exchange ideas on the various researches related to the conference theme. The conference had Seven Technical Tracks spread over two days with expert’s key note addresses and interactive discussions. In these two days 16 parallel technical sessions were conducted. We had received the paper from more than 10 countries, with 70+ universities of India and Abroad. 800+ Delegates and 250+ Student Participants were registered for this conference and in 2 days of marathon sessions we succeeded to complete around 350 presentations\n\nThe experts and the resource persons were invited who have sound knowledge in the field of Digital Transformation in Business, Economy, Society & Culture.\n\nThe first day of conference took off magnificently with an inaugural session in which all the delegates were welcomed by Prof. Mahima Birla, Conference Director, after which chief guest of the conference Prof N. S. Rathore Sb. Deputy Director General, Education, Indian Council of Agriculture Research, New Delhi, addressed the august gathering and congratulated the organizer of the conference for selecting this pertinent theme. He spoke about the need of Digital Technology an Artificial Intelligence in the field of Agriculture, he also emphasized on the use of Robotics and cloud computing in today’s business and agriculture growth.\n\nThe inaugural was also graced by the presence of Prof. B.P. Sharma sb, Hon'ble Vice-Chancellor, Gautam Buddha University, Greater Noida, He emphasized on the use of digitalization in the area of Business, Economy and Society. By way of certain illustrative examples he tried to prove his submission. He emphasized that Artificial Intelligence is required in every aspect of the business.\n\nThe dais was also graced by the presence of Prof. P. K. Dashora Sb, Ex Vice Chancellor, Kota University, he pondered over the use of digitalization in society and emphasized on developing a social connectivity to justify the use of technology and visualizing the future growth of technology he said that a day will come when computers may develop emotions like human being.\n\nDr. Pallavi Mehta, Organizing Secretary in her inaugural speech enlightened the audience with the theme of the conference and the possible motives of selecting the theme of the conference.\n\nThen ceremonially the inaugural session was concluded through vote of thanks by Chief Coordinator Prof. Dipin Mathur. After the inaugural session all the technical session started parallel.";
  const images = [
    "http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3462.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3375.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3489.jpg",
    'http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3480.jpg',
    'http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3442.jpg',
    'http://www.pacific-university.ac.in/uploads/Pages/Document/IMG_3442.jpg'
  ];
  return (
    <CustomHeroSection
      text={"Transformation of Business"}
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/7952/_default.jpg",
      ]}
    >
      <Text
        sx={{
          whiteSpace: "pre-wrap",
        }}
        mt={40}
        size="sm"
      >
        {content}
      </Text>
      <SimpleGrid cols={4} mt={40} breakpoints={breakpoints("lg")}>
        {images.map((e, i) => (
          <Image
            key={i}
            withPlaceholder
            sx={(theme) => ({
              "&:hover": {
                marginTop: "-5px",
              },
            })}
            src={e}
          />
        ))}
      </SimpleGrid>
    </CustomHeroSection>
  );
}

export default IConTransformationofBusiness;
