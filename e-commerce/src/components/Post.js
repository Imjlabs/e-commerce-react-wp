import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { useCart } from './CartContext';

var session_url = 'https://eisee-it.o3creative.fr/2023/groupe3/wp-json/wc/v3/products';
var username = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
var password = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';

const Post = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cart } = useCart(); 
  

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
    return <b>Loading...</b>;
  }

  const productImages = product.images.map(image => ({
    original: image.src,
    thumbnail: image.src
  }));

  const addToCartHandler = () => {
    addToCart(product);
  };

  const isProductSelected = () => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <div className="product-page">
      <div className="product-content">
        <ImageGallery className="image-gallery" items={productImages} />
        <div className="product-info">
          <h1 className="product-title">{ReactHtmlParser(product.name)}</h1>
          <p className="product-price">Prix : {ReactHtmlParser(product.price_html)}</p>
          <button
            onClick={addToCartHandler}
            className={`add-to-cart ${isProductSelected() ? 'selected' : ''}`}
            disabled={product.name.includes('(Rupture de Stock)')}
          >
            {product.name.includes('(Rupture de Stock)')
              ? 'Produit non disponible'
              : isProductSelected()
                ? 'Produit ajouté au panier'
                : 'Ajouter au panier'}
          </button>
        </div>
      </div>
      <div className="product-details">
        <p className='product-description'> <b> Description</b> : {ReactHtmlParser(product.description)}</p>
      </div>
    </div>
  );
};

export default Post;
