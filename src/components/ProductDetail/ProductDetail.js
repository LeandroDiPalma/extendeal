import React from "react";
import styles from "./ProductDetail.module.scss";
import { useNavigate } from 'react-router-dom';


const ProductDetail = ({ product, handleRemove }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.productDetail}>
            <h2 className={styles.productDetail__title}>{product.name}</h2>
            <img className={styles.productDetail__image} src={product.image} alt={product.name} />
            <p className={styles.productDetail__description}>{product.description}</p>
            <p className={styles.productDetail__price}>Price: ${product.price}</p>
            <div className={styles.productDetail__container}>
                <button className={styles.productDetail__button} onClick={() => navigate(`/products/${product.id}/edit`)}>Editar</button>
                <button className={styles.productDetail__button} onClick={() => navigate(`/`)}>Volver al listado</button>
                <button className={styles.productDetail__button} onClick={handleRemove}>Eliminar</button>
            </div>
        </div >
    );
};

export default ProductDetail;