import React, { useState, useEffect } from "react";
import { deleteProduct, getProductById } from '../../utils/MockProducts'
import { useParams, useNavigate } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import styles from './ProductDetailPage.module.scss'

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const productId = parseInt(id);

  useEffect(() => {
    const product = getProductById(productId);
    setProduct(product);
  }, [productId]);

  const handleRemove = async () => {
    try {
      await deleteProduct(productId);
      navigate(`/`);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  }


  return (
    <div className={styles.container}>
      <h1>Detalle del producto</h1>
      <ProductDetail product={product} handleRemove={handleRemove} />;
    </div>
  )
};

export default ProductDetailPage;