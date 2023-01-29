import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material";
// import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
// import store from "./redux";
import App from "./Routes";
import Alert from "@components/Alert";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StyledEngineProvider injectFirst>
    {/* <Provider store={store}> */}
      <Alert />
      <App />
    {/* </Provider> */}
  </StyledEngineProvider>
);
