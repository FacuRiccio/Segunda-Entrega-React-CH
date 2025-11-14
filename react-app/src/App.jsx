import { useEffect, useState } from "react";
import Layout from "./Components/Body/Header/Layout";
import ItemListContainer from "./Components/Body/FirstPage/ItemListContainer";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import ItemInfo from "./Components/Body/FirstPage/ItemDetailContainer";
import CategoryName from "./Components/Body/CategoryName/CategoryZone";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((x) => {
        setProducts(x.products);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      {/* {/*Header */}
      <Layout apiRes={products}></Layout>
      <Routes>
        {/*Home First Zone */}
        <Route
          path="/"
          element={<ItemListContainer apiRes={products}></ItemListContainer>}
        />
        {/* Links to Categorys */}
        <Route
          path="/category/:category"
          element={<CategoryName></CategoryName>}
        ></Route>
        {/* Links to Products Info */}
        <Route path="/Item/:id" element={<ItemInfo></ItemInfo>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
