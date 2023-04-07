import Products from "../data/Products";
const getProductById = (id) => {
  return Products.find((product) => product.id === id);
};

const editProduct = (id, updatedProduct) => {
  const productIndex = Products.findIndex(product => product.id === id);
  if (productIndex === -1) {
    return;
  }
  Products.splice(productIndex, 1, updatedProduct);
}

const createProduct = async (productData) => {
  const newProduct = {
    id: Math.floor(Math.random() * 1000) + 1, 
    ...productData,
  };
  Products.push(newProduct); 
  return newProduct;
};

const deleteProduct = async (id) => {
  const productIndex = Products.findIndex(product => product.id === id);
  if (productIndex === -1) {
    return;
  }
  Products.splice(productIndex, 1);
};

export { getProductById, editProduct, createProduct, deleteProduct };