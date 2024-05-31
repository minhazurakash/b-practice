import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/style.scss";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            itemActiveBg: "#FF7D44",
            borderRadius: 20,
            colorPrimaryBorder: "#FF7D44",
          },
          Form: {
            itemMarginBottom: 10,
          },
          Input: {
            controlHeight: 45,
          },
          InputNumber: {
            borderRadius: 5,
            controlHeight: 45,
            colorPrimaryBorderHover: "#ff7c4446",
          },
          Radio: {
            colorPrimary: "#FF7D44",
            colorPrimaryHover: "",
            colorPrimaryActive: "",
            controlHeight: 45,
          },
          DatePicker: {
            controlHeight: 45,
            colorPrimary: "#FF7D44",
            colorPrimaryHover: "",
            colorPrimaryActive: "",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
