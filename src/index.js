import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider, Button } from "@mantine/core";
import "./index.css";
import { NotificationsProvider } from "@mantine/notifications";
import reportWebVitals from './reportWebVitals';
import {UserContext} from './context/UserContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontSizes: {
          xl: "1.8rem",
        },
        fontFamily: "Poppins,sans-serif",
        primaryColor: "primary",
        colors: {
          white: [
            "#FDFDFD",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
            "#F7F7F7",
          ],
          primary: [
            "#DCE1E1",
            "#B1C2C2",
            "#88ACAC",
            "#619FA1",
            "#459091",
            "#2D8486",
            "#167D7F",
            "#1E5859",
            "#1F4041",
            "#1D2F30",
            "#192424",
            "#151B1C",
            "#121515",
          ],
          secondary: [
            "#BFC6C4",
            "#BCC6C3",
            "#B8C6C1",
            "#B3C7C1",
            "#ACCAC0",
            "#A4CFC1",
            "#98D7C2",
            "#9FCDBD",
            "#A3C5B9",
            "#A6BEB6",
            "#A7B9B3",
            "#A8B5B1",
            "#A8B1AE",
          ],
        },
      }}
    >
      <NotificationsProvider position="top-right">
        <UserContext >
          <App />
        </UserContext>
      </NotificationsProvider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
