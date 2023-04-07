import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './pages/productDetail/ProductDetailPage';
import ProductEditPage from './pages/productEditPage/ProductEditPage';
import Header from './components/Header/Header';
import ProductCreatePage from './pages/productCreatePage/ProductCreatePage';
import ProductListPage from './pages/productListPage/ProductListPage';

function App() {
  return (
    <>
    <Router>
     <Header />
      <Routes>
        <Route path="/" exact element={<ProductListPage/>} />
        <Route path="/products/create" element={<ProductCreatePage/>} />
        <Route path="/products/:id" element={<ProductDetailPage/>} />
        <Route path="/products/:id/edit" element={<ProductEditPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;