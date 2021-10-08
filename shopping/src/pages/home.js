import React from "react";
import { ProductList } from "../component/product";
import { productService } from "../component/product";

export class HomePage extends React.Component {

    state = { products: []};

    componentDidMount() {
        productService.getPorducts().then(response => this.setState({products: response.data}))
    }

    render() {
        return <div className="container">
            <div className="row">
                <ProductList products={this.state.products} />
                
            </div>
        </div>
    }
}