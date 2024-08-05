import {Component} from "react";
import {render} from "@testing-library/react";

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {id: 1, name: 'Filp 6', price: 26000000},
                {id: 2, name: 'Motorola 50 Ultra', price: 18000000},
                {id: 3, name: 'IP pro max', price: 28000000},
            ],
            newProduct:{
                id: '',
                name: '',
                price: '',
            },
            filteredProducts: []
        }
    }

    render() {
        return (
            <>
                <input onChange={(e) => {
                    let searchList = this.state.products.filter(x => x.name.includes(e.target.value))
                    this.setState({products: searchList})
                }}/>
                <button onClick={() => {
                    let list = this.state.products.sort((a, b) => a.price - b.price)
                    this.setState({products: list})
                }}>Tăng dần
                </button>
                <button onClick={() => {
                    let list = this.state.products.sort((a, b) => - a.price + b.price)
                    this.setState({products: list})
                }}>Giảm dần
                </button>

                <h1 style={{color: 'red'}}>DANH SÁCH SẢN PHẨM</h1>
                {this.state.products.map(e => (
                    <div>
                        <h2>{e.id} - {e.name}: {e.price}</h2>
                    </div>
                ))}
                <hr/>
                <input value={this.state.newProduct.id} onChange={(e) => {
                    this.setState({newProduct: {...this.state.newProduct, id: e.target.value}})
                }}/>
                <input value={this.state.newProduct.name} onChange={(e) => {
                    this.setState({newProduct: {...this.state.newProduct, name: e.target.value}})
                }}/>
                <input value={this.state.newProduct.price} onChange={(e) => {
                    this.setState({newProduct: {...this.state.newProduct, price: e.target.value}})
                }}/>
                <button onClick={() => {
                    this.setState({
                        products:
                            [...this.state.products, this.state.newProduct],
                        newProduct: {
                            id: '',
                            name: '',
                            price: ''
                        }
                    })
                }}>Thêm
                </button>

            </>
        )
    }
}