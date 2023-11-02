import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';

var session_url = 'https://eisee-it.o3creative.fr/2023/groupe3/wp-json/wc/v3/products';
var username = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
var password = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${session_url}/${productId}`, {
          auth: {
            username: username,
            password: password
          }
        });
        console.log(response.data);
        console.log(productId);
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

  return (
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
    </div>
  );
};

export default Product;
