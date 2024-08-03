import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./Home";
import {Login} from "./Login";
import {Register} from "./Register";


function App() {
    return (
        <div>
            <Link to={'home'}>Home</Link> |
            <Link to={'login'}>Login</Link> |
            <Link to={'register'}>Register</Link> |
            <hr/>
            <Routes>
                <Route path={'home'} element = {<Home/>}/>
                <Route path={'login'} element = {<Login/>}/>
                <Route path={'register'} element = {<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
