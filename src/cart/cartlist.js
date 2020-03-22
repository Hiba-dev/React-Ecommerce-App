import React from 'react';
import Cartitem from './cartitem';

function Cartlist({value}) {
    const {cart} = value;
    return (
       <div className="container-fluid">
           {
               cart.map(item=> {
                   return <Cartitem item={item} value={value}/>
               })
           }
       </div>
    )
}

export default Cartlist
