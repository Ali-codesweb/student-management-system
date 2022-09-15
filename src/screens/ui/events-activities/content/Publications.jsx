import { Box, Table, Text } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

function Publications({ images }) {
  const navigate = useNavigate();
  return (
    <div>
      {images.map((e) => (
        <Box key={e.title} mt={90}>
          <Text size="lg" weight={600} color="primary">
            {e.title}
          </Text>
          <Box mt={20}>
            {e.content.map((j) => (
              <Text size="sm" key={j} mt={10}>
                {j}
              </Text>
            ))}
          </Box>
          <Box
            sx={{
              minWidth: "400px",
              maxWidth: "450px",
            }}
            mt={15}
            className="border"
          >
            <Table striped>
              <thead>
                <tr>
                  <th>Editorial Board</th>
                  <th>Profile Link</th>
                </tr>
              </thead>
              <tbody>
                {e.tableData.map((j) => (
                  <tr>
                    <td>{j.title}</td>
                    <td
                      className="cursor-pointer"
                      onClick={() => navigate(j.link)}
                    >
                      Profile
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
        </Box>
      ))}
    </div>
  );
}

export default Publications;
