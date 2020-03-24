import React, { PureComponent } from 'react'
import Title from '../title';
import Cartcol from './cartcol';
import Emptycart from './emptycart';
import Cartlist from './cartlist';
import Carttotals from './carttotals'
import {ProductConsumer} from '../context';


class Cart extends PureComponent {
   
    render() {
        return (
            <section>
            <ProductConsumer>
            {
                    value => {
                    const {cart} = value;
                      if(cart.length>0){
                       return(
                        <React.Fragment>
                        <Title title="your cart"/>
                        <Cartcol/>
                        <Cartlist value={value}/>
                        <Carttotals value={value} history={this.props.history}/>            
                        </React.Fragment>
                       );}
                       else { 
                        return  <Emptycart/>
                       }
                   }
                }
          
           </ProductConsumer>
           </section>
        )
    }
}

export default Cart