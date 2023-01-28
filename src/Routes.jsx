import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const Layout = lazy(() => import("@layouts"));
const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Faq = lazy(() => import("@pages/FAQ"));
const Blog = lazy(() => import("@pages/Blog"));
const Contact = lazy(() => import("@pages/Contact"));
const Judges = lazy(() => import("@pages/Judges"));
const ApplicationForm = lazy(() => import("@pages/Apply"));
import SuspenseComponent from "@components/SuspenseComponent";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/home" element={<SuspenseComponent Component={Home} />} />
          <Route path="/about-us" element={<SuspenseComponent Component={About} />} />
          <Route path="/faq" element={<SuspenseComponent Component={Faq} />} />
          <Route path="/blogs" element={<SuspenseComponent Component={Blog} />} />
          <Route path="/contact-us" element={<SuspenseComponent Component={Contact} />} />
          <Route path="/judges" element={<SuspenseComponent Component={Judges} />} />
          <Route path="/apply" element={<SuspenseComponent Component={ApplicationForm} />} />

          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
