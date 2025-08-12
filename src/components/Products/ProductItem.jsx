import "./ProductItem.css";
import ProductInfo from "./ProductInfo";
import {useState} from "react";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  //let title = productName;
  
  const [title, setTitle] = useState(productName);

  const clickHandler = () => {
    setTitle("Güncellendi");
    console.log(productName, "Güncellendi");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>
        <span>{productPrice} TL</span>
        <br />
        <button onClick={clickHandler}>Güncelle</button>
      </ProductInfo>
    </div>
  );
}

export default ProductItem;