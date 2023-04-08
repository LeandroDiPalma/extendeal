import { useState, useEffect } from "react";
import styles from "./ProductForm.module.scss";

const ProductForm = ({ product, onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleImageChange = (e) => setImage(e.target.value);

    useEffect(() => {
        if (product) {
            setName(product.name)
            setDescription(product.description)
            setPrice(product.price)
            setImage(product.image)
        }
    }, [product]);

    const handleSaveClick = () => {
        const editedProduct = {
            ...product,
            name,
            description,
            price,
            image,
        };
        onSubmit(editedProduct);
    };

    return (
        <div className={styles.productForm}>
            <label htmlFor="name">Nombre</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor="description">Descripción</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={handleDescriptionChange}
            />
            <label htmlFor="price">Precio</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={handlePriceChange}
            />
            <label htmlFor="image">Imagen</label>
            <input
                type="text"
                id="image"
                value={image}
                onChange={handleImageChange}
            />
              <div className={styles.buttonGroup}>
                <button className={styles.saveButton} onClick={handleSaveClick}>Editar</button>
                <button className={styles.cancelButton} onClick={onCancel}>Cancelar</button>
            </div>
        </div>
    );
};

export default ProductForm;