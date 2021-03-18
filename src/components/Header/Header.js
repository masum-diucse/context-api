import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category,setCategory]=useContext(CategoryContext);
    
    return (
        <div>
            <h1>This is Header : {category}</h1>
            <button onClick={()=>setCategory("laptop")}>Increment</button>
            <button onClick={()=>setCategory("mobile")}>Increment</button>
            <button onClick={()=>setCategory("camera")}>Increment</button>
        </div>
    );
};

export default Header;