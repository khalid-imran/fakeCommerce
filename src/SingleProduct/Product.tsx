import React from 'react';
import './Product.scss';


class Home extends React.Component <{}, { [key: string]: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            product: null,
        }
    }

    getProduct = () => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res => res.json())
            .then(json => {
                this.setState({product: json})
            })
    }

    showProduct = () => {
        if (this.state.product != null) {
            return (
                <div>Single</div>
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
        this.getProduct();
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
