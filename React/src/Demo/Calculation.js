import {Component} from "react";
import {render} from "@testing-library/react";
import axios from "axios";

export default class Calculation extends Component {
    constructor() {
        super();
        this.state = {
            // inp1: 0,
            // inp2: 0,
            // kq: 0,
            list: []
        }
    }

    componentDidMount() {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
            console.log(x.data.detail)
            let arr = []
            for (const key in x.data.detail) {
                arr.push(x.data.detail[key])
            }
            this.setState({list: arr})
        })
    }

    render() {
        return (
            <>
                {/*{this.state.list.map((e => (*/}
                {/*    <h2>{e.name} - {e.cases}</h2>*/}
                {/*)))}*/}
                {/*<hr/>*/}
                {/*<input value={this.state.inp1} onChange={(e) =>*/}
                {/*    this.setState({inp1: e.target.value}*/}
                {/*    )}/>*/}
                {/*<input value={this.state.inp2} onChange={(e) =>*/}
                {/*    this.setState({inp2: e.target.value}*/}
                {/*    )}/>*/}
                {/*<button onClick={()=>{*/}
                {/*    this.setState({kq: +this.state.inp1 + ++this.state.inp2})*/}
                {/*}}>+</button>*/}
                {/*<button onClick={()=>{*/}
                {/*    this.setState({kq: this.state.inp1 - this.state.inp2})*/}
                {/*}}>-</button>*/}
                {/*<button onClick={()=>{*/}
                {/*    this.setState({kq: this.state.inp1 * this.state.inp2})*/}
                {/*}}>*</button>*/}
                {/*<button onClick={()=>{*/}
                {/*    this.setState({kq: this.state.inp1 / this.state.inp2})*/}
                {/*}}>/</button>*/}
                {/*<h1>KQ : {this.state.kq}</h1>*/}
            </>
        )
    }
}


