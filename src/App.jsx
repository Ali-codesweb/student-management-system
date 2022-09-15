import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import CommonAppshell from "./components/CommonAppshell";
import ScrollTopRouteChange from "./components/ScrollTopRouteChange";
import { LoadingOverlay } from "@mantine/core";
import { routes } from "./routes/routes";
function App() {
  const My404Component = React.lazy(() => import("./screens/My404Component"));
  return (
    <BrowserRouter>
      <CommonAppshell>
        <ScrollTopRouteChange />
        <React.Suspense fallback={<LoadingOverlay visible={true} />}>
          <Routes>
            {routes.map((e) => (
              <Route path={e.link} element={<e.component name={e.name} />} />
            ))}
            <Route path="/404" element={<My404Component />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </React.Suspense>
      </CommonAppshell>
    </BrowserRouter>
  );
}

export default App;
