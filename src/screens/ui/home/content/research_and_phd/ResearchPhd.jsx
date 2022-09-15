import { Button, Center, Image, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomHeroSection from "../../../../../components/ui/CustomHeroSection";
import { breakpoints } from "../../../../../constants/constants";
import CustomInfoBox from "../../../components/CustomInfoBox";

function ResearchPhd() {
  const navigate = useNavigate();
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4788/_default.jpg",
      ]}
    >
      <Text weight={600} size="xl" color="primary" align="center">
        Research Programs
      </Text>
      <Center className="flex-column">
        <Button size="lg" color="pink.9" mt={20}>
          Apply
        </Button>
        <Image
          mt={30}
          src="https://www.pacific-university.ac.in/uploads/Banner/Banner-1.jpg"
          withPlaceholder
          fit="contain"
          height={400}
        />
      </Center>
      <Text weight={500} mt={40} size="sm">
        As Per New Guidelines of UGC, the minimum period for Research Work would
        be 3 Years(36 Months) for all the Scholars.
      </Text>
      <div className="mt-3">
        <Text component="a" href="#" size="sm">
          Eligibility Criteria For Foreign Students
        </Text>
      </div>
      <Text mt={20} size="sm">
        {" "}
        With Reference to UGC Regulation 2018, dated 27 Aug 2018, a relaxation
        of 5% Marks shall be allowed for the candidates belonging to SC/ST/OBC
        (Non-Creamy Layers)/ Differently abled category in the entrance
        examination conducted by the universities.
      </Text>
      <SimpleGrid cols={3} mt={40} breakpoints={breakpoints("sm")}>
        <CustomInfoBox
          onClick={() => {
            navigate("/ui-home/research/ordinance-regulation");
          }}
          title={
            "Ordinance And Regulation For Ph.D. Programme(For Scholars Under UGC Regulation 2009 )"
          }
        />
        <CustomInfoBox
          onClick={() => {
            navigate("/ui-home/research/ordinance-regulation");
          }}
          title={
            "Ordinance And Regulation For Ph.D. Programme(For Scholars Under UGC Regulation 2016)"
          }
        />
        <CustomInfoBox
          onClick={() => {
            navigate("/ui-home/research/phd/instructions");
          }}
          title={" Online Application Form For Ph.D. Examination 2022"}
        />
        <CustomInfoBox
          onClick={() => {
            window
              .open(
                "https://www.pacific-university.ac.in/Uploads/Pages/Document/students.pdf",
                "_blank"
              )
              .focus();
          }}
          title={" Student"}
        />
        <CustomInfoBox
          onClick={() => {
            navigate("/ui-home/research/ordinance-regulation/schedule-I");
          }}
          title={"  Minimum Educational Qualification for Ph.D."}
        />
        <CustomInfoBox
          onClick={() => {
            navigate("/ui-home/research/ordinance-regulation/schedule-II");
          }}
          title={"  Fees Structure for Ph.D."}
        />
        <CustomInfoBox
          onClick={() => navigate("/ui-home/research/sample-paper")}
          title={"Sample Question Paper For Ph.D. Admission Test"}
        />
        <CustomInfoBox
          onClick={() => {
            navigate("/ui-home/research/ordinance-regulation/schedule-IV");
          }}
          title={"   Syllabus for Ph.D./M.Phil Admission Test"}
        />
        <CustomInfoBox
          onClick={() => navigate("/ui-home/research/sample-synopsis")}
          title={"Sample Synopsis"}
        />
        <CustomInfoBox
          onClick={() => navigate("/ui-home/research/check-list-for-thesis")}
          title={"Check List For Thesis Submission"}
        />
        <CustomInfoBox  onClick={() => navigate("/ui-home/research/notice")} title={"Notice"} />
        <CustomInfoBox onClick={() =>  navigate("/ui-home/research/seat-matrix")} title={"Seat Matrix - August 2022"} />
        <CustomInfoBox
          onClick={() =>  navigate("/ui-home/research/check-list")}
          title={"Check List For Pre-Thesis Presentation"}
        />
      </SimpleGrid>
    </CustomHeroSection>
  );
}

export default ResearchPhd;
