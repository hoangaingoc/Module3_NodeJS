import {Link, Route, Routes, Outlet} from "react-router-dom";
import {Home} from "./Users/Home";
import {Login} from "./Users/Login";
import {Register} from "./Users/Register";
import Product from "./Products/Product";
import Orders from "./Products/Orders";
import Admin from "./Users/Admin";
import {Students} from "./Students/Students";
import Users from "./Users/Users";
import AddStudents from "./Students/AddStudents";
import StudentDetails from "./Students/StudentDetails";


function App() {
    return (
        <div>
            <Link to={'home'}>Home</Link> |
            <Link to={'/'}>Login</Link> |
            <Link to={'register'}>Register</Link> |
            <Link to={'admin'}>Admin</Link> |
            <hr/>
            <Routes>
                <Route path={'/'} element={<Login/>}></Route>
                <Route path={'home'} element={<Home/>}>
                    <Route path={''} element={<Product/>}/>
                    <Route path={'orders'} element={<Orders/>}/>
                </Route>
                <Route path={'register'} element={<Register/>}></Route>
                <Route path={'admin'} element={<Admin/>}>
                    <Route path={''} element={<Product/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'students'} element={<Students/>}></Route>
                        <Route path={'students/add'} element={<AddStudents/>}></Route>
                    <Route path={'students/details/:id'} element={<StudentDetails/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
