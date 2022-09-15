import { Button, Center, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";

function PhdInstructions() {
  const content =
    "Before filling the form Applicants needs to the documents ready in jpg format\n\nTestimonials (10th, 12th, UG, PG, M.Phil, Caste Certificate with minimum and maximum size in between 100 KB to 200kb).\n\nPhotograph and Signature in jpg form on Computer System.\n\nFill the form completely and do not leave the session in between.\n\nIf your payment mode is offline then keep the copy of DD also in jpg format on your Computer System.\n\nFilled mark asterisk (*) mandatory.\n\nApplicants are required to fill Online Form only. No Offline Forms shall be accepted.\n\nApplicants can remit the required fee either through online mode or by submitting Demand Draft issued in favour of “Pacific Academy of Higher Education and Research University”, payable at Udaipur.\n\nFor Online Payment Mode use Payment Gateway available with the Application Form.\n\nThe documents along with DD (if used Offline Payment Mode) should reach the office before August 28th , 2022.\n\nThe Application form fee is Rs. 2500/-\n\nApplicants are required to write their Name and other Details strictly in the Format mentioned in their Mark sheet/Degree.\n\nAny person applying for Ph.D. admission in the University should have Master`s degree / PGDM or Equivalent degree recognized either from UGC / AICTE/ DEC or AIU of India with minimum of 55% in case of general category and 50% for ST/ SC/ OBC Non-creamy layer/ Specially Ababled.\n\nIf any person is carrying a Master`s degree / Equivalent degree of Foreign University then he / she should submit a certificate of its validity in India issued by AIU/ Indian Embassy and should have completed full credit of the course as per the Indian Course Standard with minimum of 55%.\n\nApplicants are required to send us the complete filled Downloaded form along with Four passport size photographs with their Name and Faculty in which they have applied for Ph.D. Programme written on the back of the Photographs, two sets of attested copies of Testimonials only(X,XII,U.G.,P.G. Mark sheet and caste certificate if belongs to reservation category) and DD on the following address:";
  const boldContent =
    "Office of The Dean P.G. Studies\n\nPacific Academy of Higher Education and Research University\n\nPacific Hills, Airport Road,\n\nPratap Nagar Extension, Debari,\n\nUdaipur - 313024 Rajasthan.\n\nPhone No. 09672978032,09672978030";
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4788/_default.jpg",
      ]}
    >
      <Text size="xl" weight={600}>
        How to Apply?
      </Text>
      <Text color={"red"} mt={25} size="sm">
        Important Instructions for filling the Form (Applicants are suggested to
        go through the instructions properly before filling the form):
      </Text>
      <Text
        mt={25}
        size="sm"
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {content}
      </Text>
      <Text
        weight={600}
        size="sm"
        mt={65}
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {boldContent}
      </Text>
      <Center>
        <Button mt={40} size='lg'>Click here to fill online application</Button>
      </Center>
    </CustomHeroSection>
  );
}

export default PhdInstructions;
