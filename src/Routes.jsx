import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@layouts/UserLayout";
import Home from "@pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
