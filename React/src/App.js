import {Link, Route, Routes, Outlet} from "react-router-dom";
import {Home} from "./Users/Home";
import {Login} from "./Users/Login";
import {Register} from "./Users/Register";
import Product from "./Products/Product";
import Orders from "./Products/Orders";


function App() {
    return (
        <div>
            <Link to={'home'}>Home</Link> |
            <Link to={'/'}>Login</Link> |
            <Link to={'register'}>Register</Link> |
            <hr/>
            <Routes>
                <Route path={'/'} element={<Login/>}></Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<Product/>}/>
                    <Route path={'orders'} element={<Orders/>}/>
                </Route>
                <Route path={'register'} element={<Register/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
