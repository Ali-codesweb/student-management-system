import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Button,
  Card,
  Center,
  createStyles,
  Group,
  Image,
  Paper,
  ScrollArea,
  SimpleGrid,
  Tabs,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../../components/ScrollToTop";
import CustomFooter from "../../../components/ui/CustomFooter";
import CustomNavbar from "../../../components/ui/CustomNavbar";
import {
  breakpoints,
  HomeCardItems,
  HomeCarouselSlides,
  HomeRecruiters,
  HomeTabFaculties,
  UIHeaderLinks,
} from "../../../constants/constants";

const useStyles = createStyles((theme) => ({
  responsiveWidth: {
    flexDirection: "column",
    width: "85%",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "90%",
    },
  },
  card: {
    backgroundColor: "white",
    minWidth: "450px",
    width: "70vw",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.secondary[5],
        theme.colors.primary[5]
      ),
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.secondary[5],
        theme.colors.primary[5]
      ),
    },
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",
    "&:hover": {
      boxShadow: `${theme.shadows.md} !important`,
      transform: "scale(1.05)",
    },
  },
  // Paper
  articleCard: {
    position: "relative",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.secondary[5],
        theme.colors.primary[5]
      ),
    },
  },
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    backgroundColor: "white",
    width: "85%",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "90%",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.secondary[5],
        theme.colors.primary[5]
      ),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
      textAlign: "left",
    },
  },

  description: {
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "left",
    },
  },
  tabContent : {
    transition:'500ms ease-in-out',
    cursor:'pointer',
    "&:hover": {
      backgroundColor:theme.colors.teal[0],
      boxShadow: theme.shadows.xs,
    },
  }
}));
function HomeScreen() {
  const navigate = useNavigate();
  const { classes, theme } = useStyles();
  const items = HomeCardItems.map((item) => (
    <UnstyledButton
      key={item.title}
      onClick={() => navigate(item.link)}
      className={classes.item}
      px={10}
    >
      <ThemeIcon color={item["color"]}>{item["icon"]}</ThemeIcon>
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));
  return (
    <div className="">
      <CustomNavbar links={UIHeaderLinks} />
      <Carousel
        loop
        controlsOffset={"xl"}
        controlSize={50}
        withIndicators
        mt={10}
      >
        {HomeCarouselSlides.map((e) => {
          return (
            <Carousel.Slide className="d-flex justify-content-center align-items-center">
              <Image height={500} fit="contain" src={e} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
      <Center mt={45} className={"flex-column "}>
        <Card withBorder radius="lg" className={classes.card}>
          <SimpleGrid
            cols={4}
            breakpoints={[
              { maxWidth: "md", cols: 4 },
              { maxWidth: "xs", cols: 2 },
            ]}
            mt="md"
          >
            {items}
          </SimpleGrid>
        </Card>
        <SimpleGrid
          className={classes.responsiveWidth}
          cols={2}
          mt={45}
          breakpoints={breakpoints("xs")}
        >
          <Paper withBorder radius="md" className={classes.articleCard}>
            <Text size="xl" weight={500} mt="md">
              Welcome To Pacific University
            </Text>
            <Image src="https://www.pacific-university.ac.in/images/pacific-unversity-campus.jpg" />
            <Text size="sm" mt="sm" color="dimmed">
              Pacific University is located in the city of lakes, Udaipur.
              Pacific University is a global knowledge destination, educating
              more than 18,000 students in multiple disciplines like dental,
              management, engineering, commerce, pharmacy, education, science
              etc.
            </Text>
            <Button mt={15} onClick={() => navigate("/ui-about-profile")}>
              Read More
            </Button>
          </Paper>
          <Tabs
            radius="lg"
            color={"primary"}
            defaultValue="news"
            className="bg-light p-4"
          >
            <Tabs.List grow>
              <Tabs.Tab value="news">News & Features</Tabs.Tab>
              <Tabs.Tab value="faculties">Faculties & Courses</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="news" pt="lg">
              <ScrollArea>
                <div>
                  <Group
                    noWrap
                    onClick={() =>
                      navigate("/ui-events-activities/west-zone-championship")
                    }
                    className={classes.tabContent}
                    py={10}
                    px={20}
                    
                  >
                    <Avatar
                      src="https://www.pacific-university.ac.in/Uploads/EventPictures/beb91380-76f4-45d3-8afd-b4b9f2e45d38/_default.jpg?width=120&height=70&scale=upscalecanvas&bgcolor=transparent"
                      size={94}
                      radius="md"
                    />
                    <div>
                      <Text size="xs" weight={700} color="dimmed">
                        Championship
                      </Text>

                      <Text size="md" weight={500} className={classes.name}>
                        West-Zone Inter University Handball CHampionship
                        2022-2023
                      </Text>
                    </div>
                  </Group>
                </div>
              </ScrollArea>
            </Tabs.Panel>

            <Tabs.Panel value="faculties" pt="lg">
              <ScrollArea sx={{ height: "350px" }}>
                {HomeTabFaculties.map((e) => {
                  return (
                    <div className="mb-4">
                      <Group
                        noWrap
                        onClick={() => navigate(e.link)}
                        className={classes.tabContent}
                        py={10}
                        px={20}
                        
                      >
                        <Avatar src={e["img"]} size={94} radius="md" />
                        <div>
                          <Text size="md" weight={500} className={classes.name}>
                            {e["title"]}
                          </Text>
                        </div>
                      </Group>
                    </div>
                  );
                })}
              </ScrollArea>
            </Tabs.Panel>
          </Tabs>
        </SimpleGrid>
      </Center>

      <Center>
        <Card shadow={"md"} className={classes.wrapper} mt={40} py={50} px={25}>
          <Title className={classes.title} align="center">
            Our Esteemed Trainers and Recruiters
          </Title>
          <SimpleGrid
            cols={3}
            spacing={theme.spacing.xl * 2}
            breakpoints={breakpoints("xs")}
          >
            {HomeRecruiters.map((feature, index) => (
              <div className="mt-4">
                <Center className="flex-column">
                  <ThemeIcon variant="light" size={40} radius={40}>
                    <Image
                      src={feature["icon"]}
                      height={80}
                      width={80}
                      fit="contain"
                    />
                  </ThemeIcon>
                  <Text mt={30} mb={10}>
                    {feature["title"]}
                  </Text>
                </Center>

                <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
                  {feature["description"]}
                </Text>
              </div>
            ))}
          </SimpleGrid>
        </Card>
      </Center>
      <CustomFooter
      // data={}
      />
      <ScrollToTop />
    </div>
  );
}

export default React.memo(HomeScreen);
