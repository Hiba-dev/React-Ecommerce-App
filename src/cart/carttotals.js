import React from 'react'

function Carttotals({value}) {
   const {cartsubtotal,carttax,carttotal,clearcart} = value;
    return (
        <React.Fragment>
            <div className="container">
             <div className="row">
                 <div className="    ml-lg-auto ml-md-auto col-sm-6  ml-sm-5  mt-2 text-right">

                  <button className="btn btn-outline-danger text-capitalize mt-5 mb-3 px-5" onClick={()=> clearcart()}>
                   clear cart
                  </button>
        
                  <h5>
                      <span className="text-title">subtotal:</span> {cartsubtotal}
                  </h5>
                  <h5>
                      <span className="text-title">cart tax:</span> {carttax}
                  </h5>
                  <h5>
                      <span className="text-title">cart total:</span> {carttotal}
                  </h5>
                  
                 </div>
             </div>
            </div>
        </React.Fragment>
    )
}

export default Carttotals
