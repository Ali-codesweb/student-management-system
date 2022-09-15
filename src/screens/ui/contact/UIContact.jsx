import { Carousel } from "@mantine/carousel";
import { Button, Card, Image, ScrollArea, SimpleGrid, Table, Text } from "@mantine/core";
import React from "react";
import ScrollToTop from "../../../components/ScrollToTop";
import CustomFooter from "../../../components/ui/CustomFooter";
import CustomNavbar from "../../../components/ui/CustomNavbar";
import { breakpoints, UIHeaderLinks } from "../../../constants/constants";
import { contactData } from "../../../constants/constants_3";

function UIContact() {
  return (
    <div>
      <CustomNavbar links={UIHeaderLinks} />
      <Carousel
        className="bg-light"
        loop
        controlsOffset={"xl"}
        controlSize={50}
        withIndicators
        mt={10}
      >
        <Carousel.Slide className="d-flex justify-content-center align-items-center">
          <Image
            withPlaceholder
            height={500}
            fit="contain"
            src={
              "https://www.pacific-university.ac.in/uploads/PageHeaders/4759/_default.jpg"
            }
          />
        </Carousel.Slide>
      </Carousel>
      <Card
        shadow="sm"
        sx={{ width: "90%" }}
        className="mx-auto"
        mt={50}
        px={30}
      >
        <Text size="xl" weight={900} align="center">
          Contact
        </Text>
        <Text size="lg" mt={20} align="center">
          Pacific Academy of Higher Research & Education
        </Text>
        <ScrollArea mt={50}>
          <Table striped border>
            <thead>
              <tr>
                <th className="w-10">Sr. No.</th>
                <th>Particulars</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {contactData.map((e, i) => (
                <tr key={e.particulars}>
                  <td>{i + 1}</td>
                  <td>{e.particulars}</td>
                  <td>{e.email}</td>
                  <td>{e.contacts}</td>
                  <td>{e.remarks}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollArea>
        <SimpleGrid mt={40} breakpoints={breakpoints('xs')} cols={3}>
            <Button color='pink.9' >Grievance</Button>
            <Button color='pink.9' >Anti-Ragging</Button>
            <Button color='pink.9' >Career</Button>
        </SimpleGrid>
      </Card>
      <CustomFooter />
      <ScrollToTop />
    </div>
  );
}

export default UIContact;
