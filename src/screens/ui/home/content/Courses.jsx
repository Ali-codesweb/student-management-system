import { List, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomHeroSection from "../../../../components/ui/CustomHeroSection";
import { breakpoints, capitalizeFirstLetter } from "../../../../constants/constants";
import { coursesInfoData } from "../../../../constants/constants_1";

function Courses() {
  const navigate = useNavigate()
  return (
    <CustomHeroSection
      carouselImages={[
        "https://www.pacific-university.ac.in/images/course.jpg",
      ]}
    >
      <Text weight={600} size='xl' color='primary' align='center'>Courses</Text>
      <List type="ordered" size={"sm"} mt={30}>
        <SimpleGrid
          cols={5}
          breakpoints={breakpoints("xs")}
          className="align-items-center"
          spacing={10}
        >
          {coursesInfoData.map((e) => (
            <List.Item
            onClick={()=>navigate('/ui-courses/'+e.name)}
              key={e.name}
              className='border'
              sx={(theme) => ({
                padding: theme.spacing.xs,
                borderRadius: theme.spacing.sm,
                cursor:'pointer',
                "&:hover": {
                  backgroundColor: theme.colors.gray[2],
                },
              })}
            >
              {capitalizeFirstLetter(e.name).replace("-", " ")}
            </List.Item>
          ))}
        </SimpleGrid>
      </List>
    </CustomHeroSection>
  );
}

export default Courses;
