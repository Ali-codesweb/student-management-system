import React from "react";
export const HODDashboard = React.lazy(() =>
  import("../screens/hod/HODDashboard")
);
export const HODFeedback = React.lazy(() =>
  import("../screens/hod/HODFeedback")
);
export const HODLeave = React.lazy(() => import("../screens/hod/HODLeave"));
export const HODStaff = React.lazy(() => import("../screens/hod/HODStaff"));
export const HODStudents = React.lazy(() =>
  import("../screens/hod/HODStudents")
);

export const routes = [
  {
    component: HODDashboard,
    name: "HODDashboard",
    link: "/hod/dashboard",
  },
  {
    component: HODFeedback,
    name: "HODFeedback",
    link: "/hod/feedback",
  },
  {
    component: HODLeave,
    name: "HODLeave",
    link: "/hod/leave",
  },
  {
    component: HODStaff,
    name: "HODStaff",
    link: "/hod/staff",
  },
  {
    component: HODStudents,
    name: "HODStudents",
    link: "/hod/students",
  },
];
