import React, {Component} from 'react';
import {storeProducts} from './data';
import {detailProduct} from './data';

const context = React.createContext(); //context obj

class ProductProvider extends Component{   //product provider
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modelopen: false,
    modelproduct: detailProduct,
    cartsubtotal:0,
    carttax: 0,
    carttotal:0
  }
  
  componentDidMount(){
    this.Setproduct();
  }

  Setproduct = ()=> {
    let tempproducts = [];
    storeProducts.forEach(items=> {
  
      const singleitem = {...items}; //obj destructuring
       tempproducts = [...tempproducts,singleitem];
    })
      this.setState(()=>{
          return {products: tempproducts }
      })
    
  }
  getItem= id => {
    const product = this.state.products.find(item=> item.id === id)
      return product;
  }

  handledetail = id =>{
  const Product = this.getItem(id);
  this.setState(()=> {
    return {detailProduct:Product};
  })
  }
  addtocart = id=>{
   const tempProducts = [...this.state.products];
   const index = tempProducts.indexOf(this.getItem(id));
   const product = tempProducts[index];
  product.inCart= true;
   product.count = 1;
   const price = product.price;
   product.total = price;

   this.setState(() => {
    return {
      products: [...tempProducts],
      cart: [...this.state.cart, product],
      detailProduct: {...product }
    }
  }, ()=> this.addtotals())
  }
  
  openmodel= (id) =>{
const product = this.getItem(id);

this.setState(()=> {
  return{
    modelopen: true,
    modelproduct: product
  }
})
  }

  closemodel =()=>{
    this.setState(()=>{
      return {
        modelopen: false
      }
    })
  }

increment= (id)=>{
let tempcart = [...this.state.cart];
let selecteditem = tempcart.find(item=> item.id === id )
const index = tempcart.indexOf(selecteditem)
const product = tempcart[index]
product.count += 1;
product.total = product.count*product.total;

this.setState(()=> {
 return {cart: [...tempcart]}},
 () => this.addtotals()
)
}

decrement=(id)=>{
  let tempcart = [...this.state.cart]
  let selecteditem = tempcart.find(item => item.id===id)
  let index = tempcart.indexOf(selecteditem)
  let product = tempcart[index]
  product.count = product.count-1;
  product.price = product.price*product.count;
  if(product.count===0)
  {
    return this.removeitem(id);
  }
  else{
    product.total = product.count * product.price;
    this.setState(
      ()=> {
        return {
          cart: [...tempcart]
        }
      },()=> {
        return this.addtotals();
      }
    )
  }
}

removeitem= (id)=>{
 let tempproducts = [...this.state.products];
 let tempcart = [...this.state.cart];
tempcart = tempcart.filter((items)=> items.id !== id)

 let index = tempproducts.indexOf(this.getItem(id));
 let removeitem = tempproducts[index];
 removeitem.inCart = false;
 removeitem.count= 0;
removeitem.total = 0;

this.setState(()=> {
  return{
      cart : [...tempcart],
      products: [...tempproducts]
  }
}, ()=> this.addtotals())
}

clearcart = ()=>{
 this.setState(()=>{
   return {cart: []}

 }, () => {
      this.Setproduct();
      this.addtotals();
 })
}

addtotals = () => {
let subtotal = 0;
this.state.cart.map(items => (subtotal += items.total))
let temptax = subtotal*0.1;
let tax = parseFloat(temptax.toFixed(2))
let total = subtotal+tax;

this.setState(()=>{
  return{
    cartsubtotal: subtotal,
    carttax:tax,
    carttotal:total
  }

})
}

  render(){
  return(
   <context.Provider value={{
     ...this.state,  //destructing state values
     handledetail: this.handledetail,
     addtocart: this.addtocart,
     openmodel: this.openmodel,
     closemodel: this.closemodel,
     increment: this.increment,
     decrement: this.decrement,
     removeitem: this.removeitem,
     clearcart: this.clearcart
   }}>

     {this.props.children}
   </context.Provider>
  )
} 
}
const ProductConsumer = context.Consumer;  //product consumer

export {ProductProvider,ProductConsumer};