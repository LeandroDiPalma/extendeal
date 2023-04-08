import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.scss";
import Products from "../../data/Products";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

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
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.productList}>
        {filteredProducts.map((product) => (

            <div className={styles.productCard}  key={product.id} onClick={() => {navigate(`/products/${product.id}`)}}>
            <img src={product.image} alt={product.name} />
            <div className={styles.productDetails}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
            </div>

        ))}
      </div>
    </div>
  );
};

export default ProductList;