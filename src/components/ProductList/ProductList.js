import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.scss";
import Products from "../../data/Products";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      Products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.id}`} className={styles.productCard} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className={styles.productDetails}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </Link >
        ))}
      </div>
    </div>
  );
};

export default ProductList;