import { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const Layout = lazy(() => import("@layouts/UserLayout"));
const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Faq = lazy(() => import("@pages/FAQ"));
const Blog = lazy(() => import("@pages/Blog"));
const Contact = lazy(() => import("@pages/Contact"));
const ApplicationForm = lazy(() => import("@pages/Apply"));
const AdminLayout = lazy(() => import("@layouts/AdminLayout"));

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/apply" element={<ApplicationForm />} />

          <Route path="/" element={<Navigate to="/home" />} />
        </Route>

        <Route path="admin/*" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
