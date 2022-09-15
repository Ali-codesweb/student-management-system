import { Center, ScrollArea, Table, Text, ThemeIcon } from "@mantine/core";
import React from "react";
import CustomHeroSection from "../../../../../../components/ui/CustomHeroSection";

function SingleTD({ link, name }) {
  return (
    <td>
      <div className="d-flex align-items-center">
        <ThemeIcon radius={"xl"} variant="light">
          <i className="fas fa-file-pdf"></i>
        </ThemeIcon>
        <Text size="sm" component="a" href={link} ml={10} target={"_blank"}>
          {name}
        </Text>
      </div>
    </td>
  );
}

function SampleSynopsis() {
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/uploads/PageHeaders/4785/_default.jpg",
      ]}
    >
      <Text size="xl" align='center' weight={600} color="primary">
        Sample Synopsis
      </Text>
      <Center mt={40}>
        <ScrollArea className="w-100" >
        <Table border striped highlightOnHover>
          <thead>
            <tr>
              <th>Faculty</th>
              <th>Sample Synopsis</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Management</td>
              <SingleTD
                link="https://www.pacific-university.ac.in/uploads/Pages/Document/5cbec3da-e224-48d4-9ee6-ca4e17cc0ee2.pdf"
                name="Management"
              />
              <SingleTD
                link="https://www.pacific-university.ac.in/uploads/Pages/Document/27b92229-b9cf-4b66-a0ef-78859f7e204d.pdf"
                name="Management"
              />
              <SingleTD
                link="https://www.pacific-university.ac.in/uploads/Pages/Document/b38ab7d1-4de6-4f8d-80aa-63f25828eb65.pdf"
                name="Management"
              />
            </tr>
            <tr>
              <td>Social Science & Humanities</td>
              <SingleTD
                link="http://www.pacific-university.ac.in/uploads/Pages/Document/be08d2da-4e85-48cf-9678-23bea61d66a5.pdf"
                name="Psychology"
              />
              <SingleTD
                link="https://www.pacific-university.ac.in/uploads/Pages/Document/14e1c28e-eb6e-4559-b179-a2f430c19d0c.pdf"
                name="Library Science"
              />
              <td></td>
            </tr>
            <tr>
              <td>Dental Science</td>
              <SingleTD
                link="https://www.pacific-university.ac.in/uploads/Pages/Document/be08d2da-4e85-48cf-9678-23bea61d66a5.pdf"
                name="Dental Science"
              />
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Engineering</td>
              <SingleTD
                link="https://www.pacific-university.ac.in/uploads/Pages/Document/5cbec3da-e224-48d4-9ee6-ca4e17cc0ee2.pdf"
                name="Engineering_Civil"
              />
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Science</td>
              <SingleTD
                link="https://www.pacific-university.ac.in/uploads/Pages/Document/c120bf77-5793-4488-9129-d37587233199.pdf"
                name="Biotechnology"
              />
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        </ScrollArea>
      </Center>
    </CustomHeroSection>
  );
}

export default SampleSynopsis;
