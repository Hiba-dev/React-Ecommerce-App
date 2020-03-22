import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from './context';
import styled from 'styled-components';


class Product extends PureComponent {

    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-12 col-md-6 col-lg-3 ">
           <div className="card mt-5">

               <ProductConsumer>

                   { value => {
              return (

              <div className="img-container p-5" 
              onClick={()=> value.handledetail(id)}>

                   <Link to="/details">
                       <img src={img} className="cart-img-top" style={{width:"12em"}} />
                   </Link>
           </div>
              )

    }}
           </ProductConsumer>
           <footer className="footer p-2 d-flex justify-content-between" style={{fontSize:"17px"}}>
                    <cite title="Source Title">{title} </cite>
                   
                   <cite title="Source Title"> <span>$</span> {price}</cite>
          </footer>
           </div> 
           </ProductWrapper>
        )
    }
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--MainBlack);
    cursor: pointer;
  }
`;

export default Product

