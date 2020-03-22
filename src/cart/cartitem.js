import React from 'react'

function Cartitem({item,value}) {
const {id,title,img,price,total,count} = item;
const {increment,decrement,removeitem,clearcart} = value;
    return (
      <div className="row text-capitalize text-center my-2">

       <div className="col-12 col-lg-2 mx-auto">
        <img src={img} style={{width: "5rem", heigth: "5rem"}} className="img-fluid"/>
       </div>

       <div className="col-12 col-lg-2 mx-auto">
        <span className="d-lg-none">product:</span>
        {title} 
       </div>

       <div className="col-12 col-lg-2 mx-auto">
        <strong> ${price} </strong>
       </div>

       <div className="col-12 col-lg-2 mx-auto my-lg-0 ">
         <div className="display-flex justify-content-center">
        <span className="btn  btn-black" onClick={()=> decrement(id)}> - </span>
       <span className="btn  btn-black"> {count} </span>
        <span className="btn  btn-black" onClick={()=> increment(id)}> + </span>
       </div>
       </div>

       <div className="col-12 col-lg-2 mx-auto">
       <div className="cart-icon " onClick={()=> removeitem(id)}>
       <i className="fas fa-trash" />
       </div>
       </div>

       <div className="col-12 col-lg-2 mx-auto">
       <strong>item total: ${total}</strong>
       </div>

      </div>
    )
}

export default Cartitem
