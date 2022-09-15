import { Table, Text } from "@mantine/core";
import React from "react";

function PlacementsTable1({ data, year,text }) {
  return (
    <div>
    <Text
        className="w-100"
        py={10}
        px={10  }
          sx={(theme) => ({
            backgroundColor: theme.colors.gray[3],
          })}
        >
          {text ? text : `Record Placements in ${year}`}
        </Text>
    <Table highlightOnHover border className="border">
      <tbody>
        {data.map((e) => (
          <tr>
            <td>{e.title}</td>
            <td>{e.data}</td>
          </tr>
        ))}
      </tbody>
    </Table></div>
  );
}

export default PlacementsTable1;
