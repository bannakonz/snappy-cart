import {Route, Routes} from "react-router-dom";
import ProductList from "../../product/components/ProductList.jsx";
import ProductDetail from "../../product/components/ProductDetail.jsx";


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
