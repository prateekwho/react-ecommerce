import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import ProductPage from "./Pages/ProductPage";
import All from "./Components/categories-parts/All";
import Caudae from "./Components/categories-parts/Caudae";
import Fabled from "./Components/categories-parts/Fable";
import Holistic from "./Components/categories-parts/Holistic";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="caudae" element={<Caudae />} />
          <Route path="fabled" element={<Fabled />} />
          <Route path="holistic" element={<Holistic />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
