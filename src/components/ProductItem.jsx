import "./ProductItem.css";
import ProductInfo from "./ProductInfo";
function ProductItem({ product }) {
  const { imageUrl, productName, productPrice } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{productName}</h2>
        <span>{productPrice} TL</span>
      </ProductInfo>
    </div>
  );
}

export default ProductItem;