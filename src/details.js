import React, { PureComponent } from 'react'
import {ProductConsumer} from './context';
import {ButtonContainer} from './button';
import {Link} from 'react-router-dom';


class Details extends PureComponent {

    render() {
        return (
<ProductConsumer>
   {value => {
       const{id,title,img,info,price,company,inCart} = value.detailProduct;

       return(
           <div className="container my-5">

           {/*title*/}
           <div className=" text-center text-blue m-5">
           <h1><strong>{title}</strong></h1>
           </div>

           <div className="row">

           {/*img*/}
           <div className="col-lg-6  px-5">
           <img src={img} className="img-fluid"/>
           
           </div>

          <div className=" col-lg-6  my-5">
           {/*model*/}
           <h2>Model: {title}</h2>
           {/*company*/}
           <h3 className="title text-muted" style={{fontSize: "2em"}}>Made by: {company}</h3>
           {/*prce**/}
           <h4>Price: ${price}</h4>
           {/*info*/}
           <h4>Some Info About Product</h4>
            <h5 className="text-muted">{info}</h5>

            {/*button*/}
          <div className="pt-3">
<Link to="/">
<ButtonContainer>Go To Products</ButtonContainer>
</Link>

<ButtonContainer 
cart
disabled={inCart ? true: false}
onClick={() =>{ value.addtocart(id)
               value.openmodel(id)}}>   
{inCart ? 'in cart' : 'add to cart'}

</ButtonContainer>

 </div>
           </div>
          
           </div>
          
           </div>
       )
   }}
</ProductConsumer>
        )
             }
    }


export default Details