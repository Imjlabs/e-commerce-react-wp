import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';

var session_url = 'https://eisee-it.o3creative.fr/2023/groupe3/wp-json/wc/v3/products';
var username = 'ck_e30e489bfe9990edb792ce1ad7436620dff7cb29';
var password = 'cs_82c3e0ccfb784baa8052e1edfbc438aa3f3724fc';


const PostList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(session_url, {
            auth: {
                username: username,
                password: password
            }
        })
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })

            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }, []);

    return (
        <div>
            <div className="title">Notre catalogue </div>
            <div className="products-container">
                {products.map((product, index) => ( index !== 0 && (
                    <div key={product.id} className='product-card'>
                        {product.images && product.images.length > 0 ? (
                            <Link to={`/product/${product.id}`}><img src={product.images[0].src} alt={product.name} className="product-image" /></Link>
                        ) : (
                            <p>Aucune image disponible</p>
                        )}
                        <h2 className="product-title">{ReactHtmlParser(product.name)}</h2>
                        <p className="product-price">Prix : {ReactHtmlParser(product.price_html)}</p>
                    </div>
                )))}
            </div>
        </div>
    );

};


export default PostList;
