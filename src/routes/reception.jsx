import React from "react";
export const RecAdmissions = React.lazy(() =>
  import("../screens/receptionist/RecAdmissions")
);
export const RecEnquiry = React.lazy(() =>
  import("../screens/receptionist/RecEnquiry")
);
export const RecProcedure = React.lazy(() =>
  import("../screens/receptionist/RecProcedure")
);

export const routes = [
    {
      component: RecAdmissions,
      name: "RecAdmissions",
      link: "/receptionist/admissions",
    },
    {
      component: RecEnquiry,
      name: "RecEnquiry",
      link: "/receptionist/enquiry",
    },
    {
      component: RecProcedure,
      name: "RecProcedure",
      link: "/receptionist/procedure",
    },
]