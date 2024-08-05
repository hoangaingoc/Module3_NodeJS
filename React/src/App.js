import {Link, Route, Routes, Outlet} from "react-router-dom";
import {Home} from "./Home";
import {Login} from "./Login";
import {Register} from "./Register";
import Product from "./Product";
import Orders from "./Orders";


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
