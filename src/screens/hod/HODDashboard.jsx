import React from "react";
import HODAppshell from "../../components/HODAppshell";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, Text } from "@mantine/core";
import ScrollToTop from "../../components/ScrollToTop";
function HODDashboard({ name }) {
  ChartJS.register(ArcElement);
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 40],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Text size="xl" weight={500}>
        {name}
      </Text>
      <Card shadow="lg" sx={{ width: "250px", height: "autp" }}>
        <Pie data={data} />
        <Text>Staff Attendance</Text>
      </Card>
      <ScrollToTop/>
    </>
  );
}

export default HODDashboard;
