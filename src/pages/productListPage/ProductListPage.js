
import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import styles from './ProductListPage.module.scss'

const ProductListPage = () => {
    return (
        <div className={styles.container}>
            <h1>Lista de productos</h1>
            <ProductList />
        </div>
    );
}

export default ProductListPage;