import  {Component} from "react";
let s1 = 100;
export default class DemoClass extends Component {
    constructor() {
        super();
        this.state={
            s:10,
            element:0,
            arr: [1, 3, 4]
        }
    }
    render() {
        return(
            <>
                {this.state.arr.map((item)=>
                <h3>{item}</h3>)}
                Demo class Component {this.state.s} !
                <h1>S1: {s1}</h1>
                <button onClick={() => {
                    s1 = s1 + 1;
                    console.log(s1)
                }}>Tăng s1</button>

                <button onClick={() => {
                    let newS = this.state.s +1;
                    this.setState({s: newS})
                    s1 = s1 + 1;
                    console.log(s1)
                }}>Tăng s</button>

                Demo class Component {this.state.element} !
                <input value={this.state.element} onChange={(e)=>{
                    this.setState({element: e.target.value})
                }}/>
                <button onClick={e => {
                    console.log(this.state.element)
                }}>Add Element</button>

                <button onClick={e => {
                    this.setState({ arr: [...this.state.arr,this.state.element], element:''})
                }}>Add Element</button>

            </>
        )
    }
}
// tạo 1 mảng trong state, mỗi khi ấn nút thì thêm phần tử cho mảng
//Nhập xong thì xóa số trong input