import {Route, Routes} from "react-router-dom";
import ProductList from "../components/ProductList.jsx";
import ProductDetail from "../components/ProductDetail.jsx";


export default function ProductRoute() {

  return (
    <>
      <Routes>
        <Route path="" element={<ProductList />} />
        <Route path=":id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}
