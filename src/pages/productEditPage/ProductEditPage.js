
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, editProduct } from '../../utils/MockProducts'
import ProductForm from '../../components/ProductForm/ProductForm';
import styles from './ProductEditPage.module.scss'

const ProductEditPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const productId = parseInt(id);

    useEffect(() => {
        const product = getProductById(productId);
        setProduct(product);
    }, [productId]);

    const handleEdit = (editedProduct) => {
        editProduct(parseInt(id), editedProduct);
        goToDetailPage()
    };

    const goToDetailPage = () => {
        navigate(`/products/${product.id}`);
    }

    return (
        <div className={styles.container}>
            <h1>Editar Producto</h1>
            <ProductForm product={product} onSubmit={handleEdit} onCancel={() => goToDetailPage()}/>
        </div>
    );
}

export default ProductEditPage;