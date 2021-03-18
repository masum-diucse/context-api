import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts=[
    {category:'laptop',name:'HP'},{category:'laptop',name:'Dell'},
    {category:'mobile',name:'Xaiomi'},{category:'mobile',name:'Nokia'},
    {category:'camera',name:'Nikon'},{category:'camera',name:'Canon'},
]

const Categories = () => {
    const [category]=useContext(CategoryContext);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const matchProduct=allProducts.filter(pd=>pd.category===category);
        setProducts(matchProduct);
    },[category])
    return (
        <div >
            <h2>Select your Category</h2>
            products.map(p=><CategoryDetail product={pd}></CategoryDetail>)
        </div>
    );
};

export default categories;