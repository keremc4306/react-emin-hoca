import "./ProductItem.css";
import ProductInfo from "./ProductInfo";
const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;

  const clickHandler = () => {
    console.log("Sepete eklendi")
  }
  
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{productName}</h2>
        <span>{productPrice} TL</span>
        <br />
        <button onClick={clickHandler}>Sepete Ekle</button>
      </ProductInfo>
    </div>
  );
}

export default ProductItem;