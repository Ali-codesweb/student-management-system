import { List, Text } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";

function CheckListForThesis() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://pacific-university.ac.in/uploads/PageHeaders/4787/_default.jpg",
      ]}
    >
      <Text weight={600} size="xl" color="primary" align='center'>
        Check-list for Thesis Submission
      </Text>
      <List mt={40} type="ordered" spacing={15} size="sm">
        <List.Item>
          Color of the Cover page{" "}
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/1.pdf"
          >
            {" "}
            (See R.9.3 in Ordinance & Regulations for Ph.D.)
          </Text>
        </List.Item>
        <List.Item>
          Cover Page of the Thesis in the Prescribed Format{" "}
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/c1.pdf"
          >
            (Form No. C1)(Sample Copy)
          </Text>{" "}
          and use Times New Roman Font for English Typing and Mangal Font for
          Hindi Typing
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/Times%20Achiever.ttf"
          >
            {" "}
            (Download Mangal Font)(Download Times New Roman Font)
          </Text>
        </List.Item>
        <List.Item>
          Declaration to be Printed on simple paper and bounded in the Thesis as
          per matter provided in
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/3.pdf"
          >
            {" "}
            (Form No. C2)(Sample Copy)
          </Text>
        </List.Item>
        <List.Item>
          Certificate to be given by Supervisor as per
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/4.pdf"
          >
            {" "}
            (Form No. C3) (Sample Copy)
          </Text>
        </List.Item>
        <List.Item>
          3 Hard copies and 1 soft copy on CD of Abstract of approximately 1200
          words (See rule R.9.5)
        </List.Item>
        <List.Item>
          Four soft copies of the Thesis in four different CD’s
          <List ml={35} mt={15}>
            <List.Item size="md">
              (a) Soft Copy (CD) of the Thesis should include the documents
              (Thesis Work) in the following formats:
            </List.Item>
            <List.Item size="md">One Whole File (Word Format)</List.Item>
            <List.Item size="md"> Chapter Wise File</List.Item>
            <List.Item size="md">One Whole File (PDF Format)</List.Item>
          </List>
        </List.Item>
        <List.Item>
          Four Hard Copies of drafted Thesis duly signed by the supervisor
        </List.Item>
        <List.Item>
          The scholar needs to submit the declaration on Rs. 100 stamp
          separately along with Thesis. This means that they do not need to bind
          it in the Thesis{" "}
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/8.pdf"
          >
            {" "}
            . (Sample Copy)
          </Text>
        </List.Item>
        <List.Item>
          <Text size="sm">
            (a) Minimum Two Full Length Paper Publication in any of Journal/
            Book having ISSN/ISBN{" "}
            <Text
              component="a"
              color="red"
              role="button"
              href="https://pacific-university.ac.in/UserFiles/Documents/9(a).pdf"
            >
              (List to be attached in Appendix)(Sample Copy)
            </Text>
          </Text>
          <Text mt={10} size="sm">
            (b) One soft copy of Full Length Published / Accepted Research
            Paper/ Article to be submitted along with the thesis in the format
            and including all the points as specified in point number 9(e).
          </Text>
          <Text mt={10} size="sm">
            (c) One hard copy of Full Length Published / Accepted Research
            Paper/ Article to be submitted along with the thesis in the format
            and including all the points as specified in point number 9(e).
          </Text>
          <Text mt={10} size="sm">
            (d) Proper proof of such publication or acceptance such as copy of
            cover page of Journal, Index list, Acceptance letter etc. covering
            the details of Journal/ Book and its ISSN/ ISBN.{" "}
            <Text
              component="a"
              color="red"
              role="button"
              href="https://pacific-university.ac.in/UserFiles/Documents/9(d).pdf"
            >
              (Sample Copy)
            </Text>
          </Text>
          <Text mt={10} size="sm">
            (e) The following details should be mentioned at the top(beginning)
            of the Full Length Published/ Accepted Research Paper claimed for
            the purpose of thesis submission
            <Text
              component="a"
              color="red"
              role="button"
              href="https://pacific-university.ac.in/UserFiles/Documents/Paper%20Publication%20Format9e.pdf"
            >
              (Sample Copy):
            </Text>
          </Text>
          <List mt={15} ml={35} size="sm">
            <List.Item>ISSN or ISBN Number</List.Item>
            <List.Item>DOI Number(if available)</List.Item>
            <List.Item>Page Number(from - to)</List.Item>
            <List.Item>Publication Name</List.Item>
            <List.Item>Date of Publication</List.Item>
            <List.Item>Volume</List.Item>
            <List.Item>Issue</List.Item>
            <List.Item>Abstract</List.Item>
            <List.Item>Keywords </List.Item>
          </List>
        </List.Item>
        <List.Item>
          Copyright certificate in the Prescribed format (Form No. C7) to be
          submitted separately along with the thesis.{" "}
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/10.pdf"
          >
            (Sample Copy):
          </Text>
        </List.Item>
        <List.Item>
          Before going for printing Final Draft of Thesis Scholars should check/
          verify their Topic of Research as mentioned on Registration Letter. If
          any discrepancy is found in the Topic at the time of Thesis submission
          then your thesis would not be accepted for submission.
        </List.Item>
        <List.Item>
          Research Topic and Name on Cover Page, Copyright, Declaration and
          Certificate issued by Guide should be same.
        </List.Item>
        <List.Item>
          Scholars need to write the same name as mentioned in the testimonials
          and which has been furnished at the time of admission in the
          University.
          <Text
            component="a"
            color="red"
            role="button"
            href="https://pacific-university.ac.in/UserFiles/Documents/Example11.pdf"
          >
            (See Example):
          </Text>
        </List.Item>
        <List.Item>No Dues Certificate</List.Item>
      </List>

      <Text mt={40} weight={600}>
        Note:
      </Text>
      <List type="unordered" mt={20}>
        <List.Item>
          <Text weight={600} component='span'>
            The above stated Rules and Forms are available on the website of the
            University; www.pacific-university.ac.in.
          </Text>
        </List.Item>
        <List.Item>
          <Text weight={600} component='span'>
            The scholar has to submit a copy of drafted thesis to the supervisor
            and co – supervisor (if any) apart from the four copies submitted in
            the University office.
          </Text>
        </List.Item>
        <List.Item>
          <Text weight={600} component='span'>
            The Scholars need to submit the copy of Published Paper along with
            the cover page of the Journal and Indexing of the paper which the
            Scholar has claimed as an Accepted Paper at the time of Submission
            of Thesis within six months from the date of Thesis Submission
          </Text>
        </List.Item>
      </List>
    </CustomHeroSection>
  );
}

export default CheckListForThesis;
