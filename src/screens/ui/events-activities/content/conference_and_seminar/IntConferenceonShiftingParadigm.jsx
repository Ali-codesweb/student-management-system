import { Image, List, SimpleGrid, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../../../constants/constants";

function IntConferenceonShiftingParadigm() {
  const text_1 =
    "Faculty of Management, PacificAcademy of Higher Education and Research University organised 11th International Conference on Shifting Paradigm in Business Economy and Society:Vision 2050 on 9th and 10th September 2020. The conference was organised on online mode. The objective of the conference was to exchangethe ideas and views for advancement of theory and practice in the field of Business, Economy and Society. Academicians, Researchers, Managers, industrial experts and students from all across the nation and world shared their research findings and innovative outcomes in their respective fields of expertise. The conference had interface amongst the professionals from industry and educationists from academia to indicate key issues in economy and society along with the challenges faced by the business world in handling the same. On the first day of the conference, Chief guest of the inaugural Session, Prof. B.P Sharma,Vice Chancellor, Gautam Buddha University, Noida highlighted the relevance of artificial intelligence in the changing scenario. Shri Abhilash Mishra, CEO of NSE academy, Guest of honour of the session ,emphasized on the challenges to be faced by the industry and academia during and after the pandemic situation. Dr Param Shah President FICCI (operations)UK was the keynote speaker for the inaugural session. The welcome speech was delivered by Dean and Conference director, Prof. Mahima Birla. Dr PushpkantShakdwipee give the brief about the two-day schedule of the conference. Vote of thanks was given by Dr Pallavi Mehta convener conference Khushbu Agarwal convened the inaugural session. Based on the theme, the conference was divided into Seven tracks:";
  const text_2 =
    "The resource person for the conference were Prof N.K Dashora-Ex President, Rajasthan Economic Association,Dr Amrender Pani-Joint Director,Research,AOU,Prof. Uttam Kinage-Karnatak University, Prof. Krishna avatar Goyal-JNV University, Jodhpur, Dr Sandhya Tiwari-Online Facilitator and Coach,Prof. Krishna kant Dave-Director Academics, Pacific University,M.s Tanvi Thakkar-Welingkar Institute of Management, Mumbai,Dr. Meghna Chhabra-Manav Rachana University, Faridabad,Dr. MD.Muzaffar Rehman-University of Malaya,Malasiya ,Dr Sanjeev Tandon -Institute of Technology and Management,Gaziabad,Dr R.K Singh-Indus University,Ahmedabad,Dr. Deeksha Dave-IGNOU , Prof. jasveen kaur-Gurunanak Dev University,Amritsar, Dr MVS Murthy-Infro India Private Ltd.Mumbai,\n\nTotal 133 papers were received from the research scholars and faculty members all across the nation. Out of which 104 papers were presentedinvarious tracks in the areas of finance, marketing, operation management, human resource management. The paper presenters will also be getting the opportunity for Publication in the Journals and in Edited books.";
  const images = [
    "http://pacific-university.ac.in/uploads/Pages/Document/Pacific1Manag.JPG",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific2Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific3Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific4Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific5Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific6Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific7Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific8Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific9Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific10Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific11Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific12Manag.jpg",
    "http://www.pacific-university.ac.in/uploads/Pages/Document/Pacific14Manag.jpg",
  ];
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/11268/_default.jpg",
      ]}
      text={"International Conference on Shifting Paradigm"}
    >
      <Text size="sm" mt={40}>
        {text_1}
      </Text>
      <List
        icon={
          <ThemeIcon>
            <i className="fas fa-shield-alt"></i>
          </ThemeIcon>
        }
        size="sm"
        mt={25}
        spacing={10}
      >
        <List.Item>Emerging Issues in Human Resource Management</List.Item>
        <List.Item>Emerging Issues in Marketing</List.Item>
        <List.Item>Emerging Issues in Finance</List.Item>
        <List.Item>Trends in Business and Economy- 1</List.Item>
        <List.Item>Trends in Business and Economy- 2</List.Item>
        <List.Item>Trends in Business and Economy- 3</List.Item>
        <List.Item>Contemporary issues in Social Sciences.</List.Item>
      </List>
      <Text
        size="sm"
        mt={25}
        sx={{
          whiteSpace: "pre-wrap",
        }}
      >
        {text_2}
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

export default IntConferenceonShiftingParadigm;
