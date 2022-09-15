import { Carousel } from "@mantine/carousel";
import { Card, Image, Text } from "@mantine/core";
import React from "react";
import CustomNavbar from "./CustomNavbar";
import { UIHeaderLinks } from "../../constants/constants";
import CustomFooter from "./CustomFooter";
import ScrollToTop from "../ScrollToTop";

function CustomHeroSection({ children, carouselImages, text }) {
  return (
    <div>
      {" "}
      <CustomNavbar links={UIHeaderLinks} />
      <Carousel
        className="bg-light"
        loop
        controlsOffset={"xl"}
        controlSize={50}
        withIndicators
        mt={10}
      >
        {carouselImages.map((e) => (
          <Carousel.Slide
            key={e}
            className="d-flex justify-content-center align-items-center"
          >
            <Image withPlaceholder height={500} fit="contain" src={e} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <Card
        shadow="lg"
        sx={{ width: "90%" }}
        className="mx-auto border"
        mt={50}
        px={30}
        py={50}
        radius={15}
      >
        {text && (
          <Text color='primary' weight={600} size="xl" align="center">
            {text}
          </Text>
        )}
        {children}
      </Card>
      <CustomFooter />
      <ScrollToTop />
    </div>
  );
}

export default CustomHeroSection;
