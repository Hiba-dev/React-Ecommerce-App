import React, { PureComponent } from 'react';
//import {storeProducts} from  './data';
import Title from './title';
import {ProductConsumer} from './context';
import Product from './product';


class Productlist extends PureComponent {
  // state = {storeproducts: storeProducts}

    render() {
        return (
      
       <div className="container  my-5">
      <Title title="our products"/>

      <div className="row">
      <ProductConsumer>
          {value =>{
                  return  value.products.map(product => {
                    return <Product product={product}/>
                      
                  }

                  )

                  }
              }
      </ProductConsumer>
      </div>
       </div>
      
        )
    }
}

export default Productlist