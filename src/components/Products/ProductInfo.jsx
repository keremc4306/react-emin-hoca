const ProductInfo = (props) => {
  return (
    <div className="product-info">
        <span className="ad">Reklam</span>
        {props.children}
    </div>
  )
}

export default ProductInfo;