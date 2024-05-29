import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/style.scss";
import { ConfigProvider } from "antd";

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
        },
      }}
      direction="rtl"
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
