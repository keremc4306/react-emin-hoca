import ProductItem from "./ProductItem";
import "./Products.css";
import {productData} from "../../productData";
import NewProduct from "../NewProduct/NewProduct.jsx";

const Products = () => {
  return (
    <div className="product-wrapper">
      <NewProduct />
      <h1>Products</h1>
      <div className="products">
        {productData.map((product) => {
          return (
            <ProductItem
              key={product.productName}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;