import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Products() {

    const [products, setproducts] = useState([]);

    let { favoritesState } = useSelector(state => state);


    let dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setproducts(res.data);
            })
    }, [])


    const addToFav = (item) => {
        dispatch({ type: 'ADD_TO_FAVORITES', payload: item })
    }

    return (<>
        <h1>Favorites Length: {favoritesState.length} </h1>
        <ul>
            {
                products && products.map(item => <li style={{ cursor: 'pointer' }} onClick={() => addToFav(item)} key={item.id}>{item.name}</li>)
            }
        </ul>

    </>
    )
}

export default Products