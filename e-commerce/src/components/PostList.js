import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const session_url =
  'https://eisee-it.o3creative.fr/2023/groupe3/wp-json/wc/v3/products';
const username = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
const password = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';

const PostList = (props) => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    axios
      .get(session_url, {
        auth: {
          username: username,
          password: password,
        },
      })
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données :', error);
      });

    // Retrieve selected products from localStorage when the component mounts
    const storedSelectedProducts = JSON.parse(
      localStorage.getItem('selectedProducts')
    );
    if (storedSelectedProducts) {
      setSelectedProducts(storedSelectedProducts);
    }
  }, []);

  // Use this useEffect to save selected products to localStorage whenever the selectedProducts state changes
  useEffect(() => {
    localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const addToCart = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const isProductSelected = (product) => {
    return selectedProducts.includes(product);
  };

  return (
    <div>
      <div className="title">Notre catalogue</div>
      <div className="products-container">
        {products.map(
          (product, index) =>
            index !== 0 && (
              <div key={product.id} className="product-card">
                {product.images && product.images.length > 0 ? (
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.images[0].src}
                      alt={product.name}
                      className="product-image"
                    />
                  </Link>
                ) : (
                  <p>Aucune image disponible</p>
                )}
                <h2 className="product-title">
                  {ReactHtmlParser(product.name)}
                </h2>
                <p className="product-price">
                  Prix : {ReactHtmlParser(product.price_html)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className={`add-to-cart ${
                    isProductSelected(product) ? 'selected' : ''
                  }`}
                >
                  {isProductSelected(product)
                    ? 'Produit ajouté au panier'
                    : 'Ajouter au panier'}
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default PostList;
