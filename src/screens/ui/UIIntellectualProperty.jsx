import { Carousel } from "@mantine/carousel";
import {
  Box,
  Button,
  Card,
  Image,
  List,
  ScrollArea,
  Table,
  Text,
  ThemeIcon,
} from "@mantine/core";
import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import CustomFooter from "../../components/ui/CustomFooter";
import CustomNavbar from "../../components/ui/CustomNavbar";
import { UIHeaderLinks } from "../../constants/constants";

function UIIntellectualProperty() {
  const objectives = [
    "To promote research and innovation within universities through a balanced IP management approach.",
    "To provide more freedom and autonomy to researchers for IP creation and management, in order to create a better eco-system for innovation and entrepreneurship.",
    "To promote more collaborations between the academia and industry through better clarity on IP ownership and IP licensing.",
    "To promote and encourage high quality research, including adoption of open science practices.",
    "To promote bilateral and/or multilateral agreements for technology transfer mechanisms.",
    "To promote intra-academia and inter-university research collaborations.",
  ];

  const rolesResponsibilities = [
    "1IPR Cell Coordinator to coordinate with Start-ups, Students, Scholars and Faculty to protect and acknowledge Patents, Trademarks, Industrial Designs, Geographic Indications of source, Copyright protection.",
    "To maintain confidentiality agreement (non-disclosure agreement form).",
    "To guide in filing of IPRs applications such as Patents, Copyright, Trademark Registration etc. in the patent office.",
    "IPR Cell may suggest changes in the IPR Policy or new policies as and when deemed necessary.",
    "To Generate revenue to the Organization through Technology Transfer, Commercialization and Royalty.",
    "To train in conducting Patent Search before starting any project works.",
    "To draft Patent complete specifications.",
    "To prepare application for Patent Cooperation Treaty (PCT).",
    "To reply to first examination report and to provide assistance during hearing",
    "IPR Cell will support the university and the researchers for negotiating technology transfer and benefit-sharing agreements.",
    "In cases where in a researcher wants to use university owned IP for creating a start-up, the researcher may place a request before the IPR Cell, and after taking into consideration all the relevant aspects, the IPR Cell may recommend the university to allow the researcher to use the IP. The IPR Cell may also put forward its recommendations on the extent to which the researcher can use the university owned trademarks with regard to the activities of that start-up.",
    "Whenever required, the IPR Cell shall clarify to the researchers and the university whether the research in question can be considered as research with incidental support of university, research with substantial support of the university, and/ or research with substantial support of external partners.",
    "IPR Cell will keep proper records of all IP applications from the university.",
    "recommendations to the Vice Chancellor for any legal course of action.",
    "The IPR Cell may conduct periodic audit of university IP.",
  ];

  const pipcComposition = [
    {
      designation: "Patron",
      name: "	Mr. Rahul Agrawal",
    },
    {
      designation: "President",
      name: "	President Pacific University – Professor Dr. Krishna Kant Dave",
    },
    {
      designation: "Chairperson",
      name: "	Dean P.G. Studies – Professor Dr. Hemant Kothari",
    },
    {
      designation: "Advisor",
      name: "Dean & Chairman Faculty of Agri Science - Dr. S.R. Maloo",
    },
    {
      designation: "Head IPR Cell",
      name: "Qualified Indian Patent Agent appointed by Pacific University Dr. Ritesh Agrawal",
    },
    {
      designation: "Pharmacy",
      name: "	Dr. Jayesh Dwivedi",
    },
    {
      designation: "Executive Members",
      name: "Director of each Faculties from Pacific University",
    },
    {
      designation: "Life Sciences",
      name: "Dr. Rameshwar Ameta",
    },
    {
      designation: "Medical Science(Dentistry)",
      name: "Dr. A.Bhagwan Das Rai",
    },
    {
      designation: "Engineering",
      name: "	Prof. B.P. Nandawana",
    },
    {
      designation: "Agriculture",
      name: "	Dr. S.R. Maloo",
    },
    {
      designation: "Management  & Commerce ( Social Sciences )  ",
      name: "Dr. Mahima Birla & Dr. Anurag Mehta",
    },
    {
      designation: "Five Research Scholars ",
      name: "Preferably from engineering and science stream including life sciences",
    },
    {
      designation: "Executive Secretary",
      name: "Mr. Sharad Kothari",
    },
  ];

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
              "https://www.pacific-university.ac.in/uploads/PageHeaders/14294/_default.jpg"
            }
          />
        </Carousel.Slide>
      </Carousel>
      <Card
        shadow="lg"
        sx={{ width: "90%" }}
        className="mx-auto"
        mt={50}
        px={30}
        py={30}
      >
        <Text size="xl" align="center" weight={600} color="primary">
          Pacific Intellectual Property Right (IPR)
        </Text>
        <Text size="lg" align="center" weight={500} color="secondary.9">
          Nurture Innovation - By Establishing Pacific Intellectual Property
          Right Cell (PIPC)
        </Text>
        <Button color="pink.9" mt={10}>
          IPR Queries Form
        </Button>
        <Text size="sm" mt={15}>
          Intellectual Property Rights (IPRs) is concerned with the protection
          of tangible and intangible property. It provides rewards and
          recognition to inventor/contributor for their research, designs,
          discoveries, inventions, etc.
        </Text>
        <Text size="sm" mt={15}>
          IPR cell will form a bridge between academic activities vis-à-vis
          industry. This cell will be dedicated to increase the awareness and
          opportunities amongst young guns to provide them competent career
          choices. Moreover, this Cell arranges various activities like IPR
          awareness - workshop, Training program, Guest Lectures, Conferences,
          Seminars and Case Studies.
        </Text>
        <Text size="sm" mt={15}>
          The IPR and Research Cell strive to fulfil the objective of making
          Pacific University recognized as a global leader in research and
          education.
        </Text>
        <Text size="md" mt={40} weight={600}>
          Objectives:
        </Text>
        <Text size="sm" mt={15}>
          IPR Policy intends to promote an eco-system which is conducive to the
          development of diverse varieties of research and innovation. A
          balanced approach in the area of IP protection, as followed in this
          IPR Policy, can also play a major role in promoting start-ups by
          enabling equitable access to knowledge and technology resources. In
          this regard, the specific objectives of this IPR Policy are:
        </Text>
        <List
          mt={15}
          spacing={10}
          size="sm"
          icon={
            <ThemeIcon color="primary" mr={7}>
              <i className="fas fa-shield-alt"></i>{" "}
            </ThemeIcon>
          }
        >
          {objectives.map((e) => (
            <List.Item>{e}</List.Item>
          ))}
        </List>
        <Text size="md" mt={40} weight={600}>
          Roles & Responsibilities:
        </Text>
        <List
          mt={15}
          spacing={10}
          size="sm"
          icon={
            <ThemeIcon color="primary" mr={7}>
              <i className="fas fa-shield-alt"></i>{" "}
            </ThemeIcon>
          }
        >
          {rolesResponsibilities.map((e) => (
            <List.Item key={e}>{e}</List.Item>
          ))}
        </List>
        <Text size="md" mt={40} weight={600}>
          Pacific Intellectual Property Right Cell (PIPC) – Composition:
        </Text>
        <ScrollArea>
        <Box
          sx={{
            minWidth: "370px",
            maxWidth: "550px",
          }}
          mt={15}
          className="border"
        >
            <Table striped border>
              <thead>
                <tr>
                  <th>Designation</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {pipcComposition.map((e) => (
                  <tr key={e.designation}>
                    <td className="w-25">{e.designation}</td>
                    <td className="w-50 ml-4">{e.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
        </Box>
          </ScrollArea>
        <Text size="md" mt={40} weight={600}>
          Pacific University IPR Events:
        </Text>
        <Text size="sm" mt={10} weight={600}>
          July 2021 - National Conclave on Intellectual Property Rights in
          Current Business Context
        </Text>
        <Text size="sm" mt={20}>
          India is rich with knowledgeable and talented people in all the areas
          business and technology which drive India to enter in the field of
          Intellectual Property Rights (IPR). IPR denotes the creation of the
          idea viz., inventions, creative works, symbols, names, pictures and
          styles employed in various areas of business. The rights are the
          interests of creator of such property. The protection of intellectual
          property rights promotes fair competition and technological progress.
          It also contributes towards development of economy and society.{" "}
        </Text>
        <Text size="sm" mt={10}>
          In this reference a comprehensive knowledge and insight into the
          concerned areas of IPRs in present business scenario has its own
          significance. In this direction Pacific Academy of Higher Education
          and Research University in association with Indian Accounting
          Association, Udaipur Branch was Organized a two-day online conclave on
          Intellectual Property Rights in Current Business Context.
        </Text>

        <Image
          src="http://pacific-university.ac.in/uploads/Pages/Document/IPRCell.jpg"
          fit="contain"
          height={700}
          mt={20}
        />
      </Card>
      <CustomFooter />
      <ScrollToTop />
    </div>
  );
}

export default React.memo(UIIntellectualProperty);
