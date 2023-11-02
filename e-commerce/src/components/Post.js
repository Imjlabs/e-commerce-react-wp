import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';

var session_url = 'https://eisee-it.o3creative.fr/2023/groupe3/wp-json/wc/v3/products';
var username = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
var password = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';

const Post = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${session_url}/${productId}`, {
          auth: {
            username: username,
            password: password
          }
        });
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product data', error);
      }
    };
    fetchData();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }
  const addToCart = (product) => {
    if (selectedProducts.includes(product)) {
      // Si le produit est déjà sélectionné, le désélectionner
      setSelectedProducts(selectedProducts.filter((p) => p !== product));
    } else {
      // Sinon, l'ajouter à la liste des produits sélectionnés
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const isProductSelected = (product) => {
    return selectedProducts.includes(product);
  };

  return (
<<<<<<< HEAD
    <div className="product-page">
      <div className="product-content">
        <img className="product-imageP" src={product.images[0].src} alt={product.name} />
        <div className="product-info">
          <h1 className="product-title">{ReactHtmlParser(product.name)}</h1>
          <p className="product-price">Prix : {ReactHtmlParser(product.price_html)}
          </p>
          <button 
    onClick={() => {
        addToCart(product);
    }} 
    className={`panier ${isProductSelected(product) ? "selected" : ""}`}>
    {isProductSelected(product) ? "Produit ajouté au panier" : "Ajouter au panier"}
</button>

        </div>
      </div>
      <div className="product-details">
        <p className='product-description'>Description : {ReactHtmlParser(product.description)}</p>
        

      </div>
=======
    <div>
      <h1>{ReactHtmlParser(product.name)}</h1>
      <p>Prix : {ReactHtmlParser(product.price_html)}</p>
      {product.images && product.images.length > 0 ? (
        <img src={product.images[0].src} alt={product.name} width='20%' height='20%' />
      ) : (
        <p>Aucune image disponible</p>
      )}
      <p className='description'>Description : {ReactHtmlParser(product.description)}</p>
      <button>Ajouter au panier</button>
>>>>>>> 9382d5fad1af52ea353277b0c84ca07edb5f645b
    </div>
);


};

export default Post;
