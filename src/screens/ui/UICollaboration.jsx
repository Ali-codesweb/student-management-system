import { Box, Image, ScrollArea, Table, Text } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import CustomHeroSection from "../../components/ui/CustomHeroSection";
import {
  capitalizeFirstLetter
} from "../../constants/constants";
import { collaborationData } from "../../constants/constants_3";
function UICollaboration() {
  const { item } = useParams();
  const data = collaborationData.find((e) => e.link === item);
  return (
    <CustomHeroSection carouselImages={data.carouselImages}>
      <Text size="xl" mt={40} weight={900} align="center">
        {capitalizeFirstLetter(item).replace("-", " ")}
      </Text>
      <Box mt={30}>
        <ScrollArea>
          <Table sx={{ minWidth: 800 }} striped>
            <thead>
              <tr>
                <th className="w-10"></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.tableData.map((e) => (
                <tr>
                  <td>
                    <Text
                      weight={600}
                      component="a"
                      href={e.link}
                      target="_blank"
                    >
                      {e.title}
                    </Text>
                  </td>
                  <td>{e.data}</td>
                  <td>
                    <Image src={e.image} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ScrollArea>
      </Box>
    </CustomHeroSection>
  );
}

export default UICollaboration;
