import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from './context';
import {ButtonContainer} from './button';
import { Link } from "react-router-dom";

class Model extends PureComponent {
    

    render() {
        return (
               <ProductConsumer>
                    {
                        value => {
                            const{modelopen, closemodel} = value;
                            const{title,img,price} = value.modelproduct;

                            if(!modelopen) {
                                return null
                            }
                            else {
                                return (
                                   <ModelContainer>
                                       <div className="container">
                                           <div className="row">
                                               <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize" id="modal">
                          <h5>Item Added to Cart</h5>
                          <img src={img} className="img-fluid"/>
                          <h5>{title}</h5>
                                <h5 className="text-muted">price: ${price}</h5>
                                <Link to="/">
                                <ButtonContainer
                                onClick= {()=> closemodel()}>
                                    continue shopping
                                </ButtonContainer>
                                </Link>

                                 <Link to="/cart">
                                <ButtonContainer
                                cart
                                onClick= {()=> closemodel()}>
                                  go to cart
                                </ButtonContainer>
                                </Link>
                                               </div>
                                           </div>
                                       </div>
                                    </ModelContainer>
                                )
                            }
                        }
                    }
               </ProductConsumer>
        )
    }
}
const ModelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--MainWhite);
  }
`;

export default Model