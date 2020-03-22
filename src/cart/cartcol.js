import React, { PureComponent } from 'react'
import { Row } from 'react-bootstrap'

class Cartcol extends PureComponent {

    render() {
        return (
            <div className="columns container-fluid d-none d-lg-block mx-auto text-center text-capitalize mb-4">
                <div className="row">
                    <div className="col-lg-2">
                     products       
                    </div>
                    <div className="col-lg-2">
                     name of products       
                    </div>
                    <div className="col-lg-2">
                    price       
                    </div>
                    <div className="col-lg-2">
                     quantity       
                    </div>
                    <div className="col-lg-2">
                     remove      
                    </div>
                    <div className="col-lg-2">
                     total      
                    </div>
                </div>
            </div>
        )
    }
}

export default Cartcol