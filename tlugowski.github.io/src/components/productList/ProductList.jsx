import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-list-texts">
        <h1 className="product-list-title">My Projects:</h1>
        <p className="product-list-desc">JavaScript & React:</p>
      </div>
      <div className="product-list-list">
        {products.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
