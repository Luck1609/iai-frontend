import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux";
// import AppLoading from "@components/AppLoading";
import App from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        {/* <AppLoading /> */}
        <App />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
