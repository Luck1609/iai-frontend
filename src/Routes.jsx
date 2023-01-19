import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "@layouts/UserLayout";
import Home from "@pages/Home";
import About from "@pages/About";
import Faq from "@pages/FAQ";
import Blog from "@pages/Blog";
import Contact from "@pages/Contact";
import AdminGuestLayout from "@pages/auth";
import Login from "@pages/auth/Login";
import ForgotPassword from "@pages/auth/ForgotPassword";
import ResetPassword from "@pages/auth/ResetPassword";
import ApplicationForm from "@pages/Apply";
import AdminLayout from "@layouts/AdminLayout";

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
