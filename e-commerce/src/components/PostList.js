import React, { useState, useEffect } from 'react';
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
            <h1>Nos produits</h1>
            <ul>
                {products.map(product => (
                    <div key={product.id}>
                        <div className='produit'>
                            <div className='nomProduit'>
                                <h2>{ReactHtmlParser(product.name)}</h2>
                            </div>
                            <div className='nomProduit'>
                                <p>Prix : {ReactHtmlParser(product.price_html)}</p>
                            </div>
                            <div className='nomProduit'>
                                {product.images && product.images.length > 0 ? (
                                    <img src={product.images[0].src} alt={product.name} width='20%' height='20%'  />
                                ) : (
                                    <p>Aucune image disponible</p>
                                )}
                            </div> 
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};


export default PostList;
