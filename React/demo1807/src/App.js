import logo from './logo.svg';
import './App.css';
import Test from "./Test";
import Demo from "./Demo";
import DemoClass from "./DemoClass";

let name = 'Hoàng Ngọc'
let obj = {
    name: 'Hoàng Ngọc',
    age: 42
}
let arr = [3, 8, 7, 6]

function App() {
    return (
        <div>
            {/*<h1>Hi {name}</h1>*/}
            {/*<h1>Hi {obj.name} - {obj.age}</h1>*/}
            {/*{arr.map(e => (*/}
            {/*    <span>{e}, </span>*/}
            {/*))}*/}
            {/*<Test/>*/}
            {/*<Demo/>*/}
            <DemoClass></DemoClass>
        </div>
    );
}

export default App;
