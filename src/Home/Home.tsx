import React from 'react';
import './Home.scss';
import {Link} from 'react-router-dom';

class Home extends React.Component <{}, { [key: string]: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: [],
        }
    }

    getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({products: json})
            })
    }

    showProduct = () => {
        if (this.state.products.length > 0) {
            return this.state.products.map((product: any, index: any) =>
                <div key={index} className={'each-product'}>
                    <div className={'padding-product'}>
                        <div className={'product-image'}>
                            <img loading={"lazy"} src={product.image} alt=""/>
                        </div>
                        <div className={'price'}><strong>Price</strong>: {product.price} ৳</div>
                        <div className={'name'}>{product.title}</div>
                        <Link to={'/single/' + product.id} className={'btn-cart'}>View</Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={'loading'}>
                    <div className="boxes">
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="box">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )

        }
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {

        return (
            <div className="container">
                <section className={'store-body'}>
                    {this.showProduct()}
                </section>
            </div>
        )

    }
}

export default Home;
