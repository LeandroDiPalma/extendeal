import React from 'react';
import ProductForm from '../../components/ProductForm/ProductForm';
import { createProduct } from '../../utils/MockProducts';
import { useNavigate } from 'react-router-dom';
import styles from './ProductCreatePage.module.scss'

const ProductCreatePage = () => {
    const navigate = useNavigate();

    const handleCreateProduct = async (newProduct) => {
        try {
            const response = await createProduct(newProduct);
            navigate(`/products/${response.id}`);
        } catch (error) {
            console.error("Error creating product:", error);
        }
    }
    return (
        <div className={styles.container}>
            <h1>Crear nuevo producto</h1>
            <ProductForm
                onSubmit={handleCreateProduct}
            />
        </div>
    );
};

export default ProductCreatePage;