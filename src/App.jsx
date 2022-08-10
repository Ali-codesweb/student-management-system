import { Button, useMantineTheme } from "@mantine/core";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import HODDashboard from "./screens/hod/HODDashboard";
import StaffDashboard from "./screens/staff/StaffDashboard";
import StudentDashboard from "./screens/student/StudentDashboard";
import HODProfile from "./screens/hod/HODProfile";
import My404Component from "./screens/My404Component";
import HODStudents from "./screens/hod/HODStudents";
import HODFeedback from "./screens/hod/HODFeedback";
import HODStaff from "./screens/hod/HODStaff";
import Profile from "./screens/Profile";
import HODAppshell from "./components/HODAppshell";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile name="Profile" />} />
        <Route path="/404" element={<My404Component name="Error" />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      <Routes>
        <Route
          path="/student/dashboard"
          element={<StudentDashboard name="Dashboard" />}
        />
      </Routes>
      <Routes>
        <Route
          path="/staff/dashboard"
          element={<StaffDashboard name="Dashboard" />}
        />
      </Routes>

      <HODAppshell>
        <Routes >
          <Route
            path="/hod/dashboard"
            element={<HODDashboard name="Dashboard" />}
          />

          <Route
            path="/hod/students"
            element={<HODStudents name="Students" />}
          />
          <Route
            path="/hod/feedback"
            element={<HODFeedback name="Feedbacks" />}
          />
          <Route path="/hod/staff" element={<HODStaff name="Staff" />} />
        </Routes>
      </HODAppshell>
    </BrowserRouter>
  );
}

export default App;
