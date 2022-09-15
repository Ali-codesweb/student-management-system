import { showNotification } from "@mantine/notifications";
import axios from "axios";
// export const customURL = "http://192.168.254.220:8000/api/";

export const customURL = "http://127.0.0.1:8000/api/";

export const breakpoints = (sp) => [
  { maxWidth: "xs", cols: 1, spacing: sp },
  { maxWidth: "lg", cols: 2, spacing: sp },
  { maxWidth: "md", cols: 2, spacing: sp },
];
export const HomeCarouselSlides = [
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",
  "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=886&q=80",
];
export const HomeCardItems = [
  {
    link: "/ui-home/courses",
    title: "Courses",
    icon: <i className="fas fa-book-open"></i>,
    color: "primary",
  },
  {
    link: "/pre-admission",
    title: "Admission Form (2022-2023)",
    icon: <i className="fas fa-address-card"></i>,
    color: "primary",
  },
  {
    link : '/ui-home/research',
    title: "Research & PHD",
    icon: <i className="fas fa-user-graduate"></i>,
    color: "primary",
  },
  {
    link: "/ui-events-activities/conference-seminar",
    title: "Conference / Seminar / Workshop ",
    icon: <i className="fas fa-user-friends"></i>,
    color: "primary",
  },
  {
    link: "/ui-home/examination-form",
    title: "Online Examination Form (2022-2023)",
    icon: <i className="fas fa-user-edit"></i>,
    color: "primary",
  },
  {
    link: "/ui-home/fee-payment",
    title: "Online Fee Payment",
    icon: <i className="fas fa-wallet"></i>,
    color: "primary",
  },
  {
    link:'/ui-home/examination',
    title: "Examination & Results",
    icon: <i className="fas fa-diagnoses"></i>,
    color: "primary",
  },
  {
    link: "/ui-home/bstc",
    title: "BSTC / B.Ed",
    icon: <i className="fas fa-school"></i>,
    color: "primary",
  },
  {
    link: "/ui-home/scholarship",
    title: "Scholarship",
    icon: <i className="fas fa-graduation-cap"></i>,
    color: "primary",
  },
  {
    link: "/ui-home/verification",
    title: "Verification",
    icon: <i className="fas fa-user-check"></i>,
    color: "primary",
  },
  {
    link: "/ui-about-recognition",
    title: "Recognition",
    icon: <i className="fas fa-award"></i>,
    color: "primary",
  },
  {
    link: "/ui-home/congratulations",
    title: "No.1 University in Rajasthan",
    icon: <i className="fas fa-university"></i>,
    color: "primary",
  },
];
export const HomeTabFaculties = [
  {
    link:'/ui-courses/dental',
    title: "Faculty of Dentistry",
    img: "https://www.pacific-university.ac.in/uploads/EventPictures/e5b6821c-b868-4127-87ca-8e0ed6836ca6/_default.jpg?width=120&height=70&scale=upscalecanvas&bgcolor=transparent",
  },
  {
    link:'/ui-courses/pharmacy',
    title: "Faculty of Pharmacy",
    img: "https://www.pacific-university.ac.in/uploads/EventPictures/3b19f25d-f9ba-417b-abe1-250f3dfb3b47/_default.jpg?width=120&height=70&scale=upscalecanvas&bgcolor=transparent",
  },
  {
    link:'/ui-courses/engineering',
    title: "Faculty of Engineering",
    img: "https://www.pacific-university.ac.in/uploads/EventPictures/bca28937-7031-42f1-b9d0-2fed2337b8ed/_default.jpg?width=120&height=70&scale=upscalecanvas&bgcolor=transparent",
  },
];

export const HomeRecruiters = [
  {
    icon: "https://logonoid.com/images/hp-logo.png",
    title: "HP",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    icon: "https://www-file.huawei.com/-/media/corporate/images/home/logo/huawei_logo.png",
    title: "Huawei",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: "https://www.logosurfer.com/wp-content/uploads/2018/03/flipkart-logo_1.png",
    title: "Flipkart",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: "https://logonoid.com/images/hp-logo.png",
    title: "HP",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
  },
  {
    icon: "https://www-file.huawei.com/-/media/corporate/images/home/logo/huawei_logo.png",
    title: "Huawei",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
  {
    icon: "https://www.logosurfer.com/wp-content/uploads/2018/03/flipkart-logo_1.png",
    title: "Flipkart",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
  },
];
export const UIHeaderLinks = [
  {
    links: [
      { link: "/ui-about-profile", label: "Profile" },
      { link: "/ui-about-vision", label: "Vision" },
      { link: "/ui-about-mission", label: "Mission" },
      { link: "/ui-about-objectives", label: "Objectives" },
      { link: "/ui-about-messages", label: "Messages" },
      { link: "/ui-about-recognition", label: "Recognition" },
    ],
    link: "about",
    label: "About",
    icon: <i className="fas fa-university"></i>,
  },
  {
    links: [
      { link: "/ui-courses/agriculture", label: "Agriculture" },
      { link: "/ui-courses/arts", label: "Arts" },
      { link: "/ui-courses/commerce", label: "Commerce" },
      { link: "/ui-courses/computer-science", label: "Computer Science" },
      { link: "/ui-courses/dairy", label: "Dairy & Food Technology" },
      { link: "/ui-courses/dental", label: "Dental" },
      { link: "/ui-courses/engineering", label: "Engineering" },
      { link: "/ui-courses/education", label: "Education" },
      { link: "/ui-courses/fire-safety", label: "Fire Safety" },
      { link: "/ui-courses/hotel-management", label: "Hotel Management" },
      { link: "/ui-courses/law", label: "Law" },
      { link: "/ui-courses/management", label: "Management" },
      {
        link: "/ui-courses/mass-media-communication",
        label: "Media & Mass Communication",
      },
      { link: "/ui-courses/pharmacy", label: "Pharmacy" },
      { link: "/ui-courses/physical-education", label: "Physical Education" },
      { link: "/ui-courses/polytechnic", label: "Polytechnic" },
      { link: "/ui-courses/science", label: "Science" },
      { link: "/ui-courses/yoga", label: "Yoga" },
      { link: "/ui-courses/fine-arts", label: "Fine Arts" },
      { link: "/ui-courses/fashion-design", label: "Fashion Design" },
      { link: "/ui-courses/library-science", label: "Library Science" },
    ],
    link: "ui-courses",
    label: "Courses",
    icon: <i className="fas fa-book-reader"></i>,
  },
  {
    links: [
      { link: "/ui-infrastructure/campus", label: "Campus" },
      { link: "/ui-infrastructure/library", label: "Library" },
      { link: "/ui-infrastructure/laboratories", label: "Laboratories" },
      {
        link: "/ui-infrastructure/hostel-transportation",
        label: "Hostel & Transportation",
      },
      { link: "/ui-infrastructure/fitness-center", label: "Fitness Center" },
      {
        link: "/ui-infrastructure/intellectual-property",
        label: "Pacific Intellectual Property Rights (PIPR)",
      },
    ],
    link: "infrastructure",
    label: "Infrastructure",
    icon: <i className="fas fa-network-wired"></i>,
  },
  {
    links: [
      { link: "/ui-placement/corporate-support", label: "Corporate Support" },
      { link: "/ui-placement/placements", label: "Placements" },
      {
        link: "/ui-placement/placement-record",
        label: "Student Placement Record",
      },
    ],
    link: "placement",
    label: "Placement",
    icon: <i className="fas fa-briefcase"></i>,
  },
  {
    links: [
      {
        link: "/ui-events-activities/west-zone-championship",
        label: "West Zone handball Championship",
      },
      { link: "/ui-events-activities/alumni", label: "Alumni" },
      {
        link: "/ui-events-activities/conference-seminar",
        label: "Conference & Seminar",
      },
      { link: "/ui-events-activities/media", label: "Media" },
      {
        link: "/ui-events-activities/social-initiatives",
        label: "Social Initiatives",
      },
      {
        link: "/ui-events-activities/youth-festival",
        label: "Social International Youth Festival",
      },
      {
        link: "/ui-events-activities/sports-culture",
        label: "Sports & Culture",
      },
      { link: "/ui-events-activities/webinar", label: "Webinar" },
      // {
      //   link: "/ui-events-activities/super-student-awards",
      //   label: "Super Student Awards",
      // },
      {
        link: "/ui-events-activities/publications",
        label: "Publications(Journals & Books)",
      },
      { link: "/ui-events-activities/blogs", label: "Blogs" },
      {
        link: "/ui-events-activities/national-conclave-on-intellectual-rights",
        label: "National conclave on Intellectual Property Rights",
      },
    ],
    link: "evenets-activities",
    label: "Events & Activities",
    icon: <i className="far fa-calendar-alt"></i>,
  },
  {
    links: [
      {
        link: "/ui-collaboration/academic-collaboration",
        label: "Academic Collaboration",
      },
      {
        link: "/ui-collaboration/industrial-collaboration",
        label: "Industrial Collaboration",
      },
    ],
    link: "collaboration",
    label: "Collaboration",
    icon: <i className="fas fa-handshake"></i>,
  },
  {
    links: [],
    link: "contact",
    label: "Contact",
    icon: <i className="fas fa-address-book"></i>,
  },
];

export const receptionistLinks = [
  {
    icon: <i className="fas fa-question"></i>,
    label: "Student Enquiry",
    link: "enquiry",
  },

  {
    icon: <i className="fas fa-question-circle"></i>,
    label: "Procedure",
    link: "procedure",
  },
];

export const hodLinks = [
  {
    icon: <i className="fa fa-chart-line"></i>,
    label: "Dashboard",
    link: "dashboard",
  },
  {
    icon: <i className="fa fa-graduation-cap"></i>,
    label: "Students",
    link: "students",
  },
  {
    icon: <i className="fa fa-comments"></i>,
    label: "Feedbacks",
    link: "feedback",
  },
  {
    icon: <i className="fa fa-users"></i>,
    label: "Staff",
    link: "staff",
  },
  {
    icon: <i className="far fa-envelope-open"></i>,
    label: "Leaves",
    link: "leave",
  },
];

export const directorLinks = [
  {
    icon: <i className="fas fa-graduation-cap"></i>,
    label: "Admissions",
    link: "admissions",
  },
];
export const romanize = (num) => {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
};
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const getLocalStorageToken = () =>
  "Bearer " + localStorage.getItem("token") !== undefined
    ? JSON.parse(localStorage.getItem("token"))
    : "";
export const DateDMY = (date) => {
  return date.split("-").reverse().join("-");
};

export const axiosGet = async (url) => {
  try {
    const { data } = await axios.get(customURL + url, {
      headers: {
        Authorization: "Bearer " + getLocalStorageToken(),
      },
    });
    return data;
  } catch (error) {
    showNotification({
      title: "Error",
      message: error.message,
      color: "red",
    });
  }
};
export const axiosPost = async (url, body) => {
  console.log(getLocalStorageToken());
  try {
    const { data } = await axios.post(customURL + url, body, {
      headers: {
        Authorization: "Bearer " + getLocalStorageToken(),
      },
    });
    return data;
  } catch (error) {
    showNotification({
      title: "Error",
      message: error.message,
      color: "red",
    });
  }
};

export const axiosPut = async (url, body) => {
  try {
    const { data } = await axios.put(customURL + url, body, {
      headers: {
        Authorization: "Bearer " + getLocalStorageToken(),
      },
    });
    return data;
  } catch (error) {
    showNotification({
      title: "Error",
      message: error.message,
      color: "red",
    });
  }
};

export const axiosDelete = async (url) => {
  try {
    const { data } = await axios.delete(customURL + url, {
      headers: {
        Authorization: "Bearer " + getLocalStorageToken(),
      },
    });
    return data;
  } catch (error) {
    showNotification({
      title: "Error",
      message: error.message,
      color: "red",
    });
  }
};

export const successNotification = (message) => {
  showNotification({
    title: "Success",
    message,
  });
};
export const failedNotification = (message) => {
  showNotification({
    title: "Error",
    message,
    color: "red",
  });
};
