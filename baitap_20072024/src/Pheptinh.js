import {Component} from "react";

export default class Pheptinh extends Component {
    constructor() {
        super();
        this.state = {
            x: '',
            y: '',
            result: 0,
        }
    }

    render() {
        return (
            <>
                Nhập số thứ nhất: {this.state.x}
                <input
                    value={this.state.x}
                    onChange={(e) => this.setState({x: e.target.value})}
                />
                <br/>
                Nhập số thứ hai: {this.state.y}
                <input
                    value={this.state.y}
                    onChange={(e) => this.setState({y: e.target.value})}
                />
                <br/>
                <h1>Kết quả: {this.state.result}</h1>
                <button onClick={() => this.setState({result: parseFloat(this.state.x) + parseFloat(this.state.y),})}>
                    Cộng
                </button>
                <button onClick={() => this.setState({result: parseFloat(this.state.x) - parseFloat(this.state.y)})}>
                    Trừ
                </button>
                <button onClick={() => this.setState({result: parseFloat(this.state.x) * parseFloat(this.state.y)})}>
                    Nhân
                </button>
                <button
                    onClick={() => this.setState({result: this.state.y !== '0' ? this.state.x / this.state.y : 'Không chia được cho 0'})}>
                    Chia
                </button>
            </>
        );
    }
}
