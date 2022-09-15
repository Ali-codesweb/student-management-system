import React from "react";
export const StaffDashboard = React.lazy(() =>
  import("../screens/staff/StaffDashboard")
);
export const routes = [
  {
    component: StaffDashboard,
    name: "StaffDashboard",
    link: "/staff/dashboard",
  },
];
