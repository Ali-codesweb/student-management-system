import React from "react";
export const StudentDashboard = React.lazy(() =>
  import("../screens/student/StudentDashboard")
);
export const routes = [
  {
    component: StudentDashboard,
    name: "StudentDashboard",
    link: "/student/dashboard",
  },
];
