import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@layouts/UserLayout";
import Home from "@pages/Home";
import About from "@pages/About";
import Faq from "@pages/FAQ";
import Blog from "@pages/Blog";
import Contact from "@pages/Contact";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
