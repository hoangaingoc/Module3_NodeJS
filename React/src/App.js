import DemoClass from "./DemoClass";
import Calculation from "./Calculation";
import Product from "./Product";
import Covid from "./Covid";
import {FCompoment} from "./FCompoment";
import {FCproduct} from "./FCproduct";
import {Demo} from "./Demo";
import {Countries} from "./Countries";
import {Suabai_Countries} from "./Suabai_Countries";
import {Students} from "./Students";
import {Suabai_Students} from "./Suabai_Students";
import {Link, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            {/*<DemoClass></DemoClass>*/}
            {/*<Calculation></Calculation>*/}
            {/*<Product></Product>*/}
            {/*<Covid/>*/}
            {/*<FCompoment/>*/}
            {/*<FCproduct/>*/}
            {/*<Countries/>*/}
            {/*<Countries/>*/}
            {/*<Suabai_Countries/>*/}
            {/*<Suabai_Students/>*/}
            {/*<Students/>*/}
            <Link to={'a'}>Covid</Link> |
            <Link to={'b'}>Calculation</Link> |
            <Link to={'c'}>Students</Link> |
            <Link to={'d'}>Countries</Link> |
            <Link to={'e'}>Product</Link> |
            <hr/>
            <Routes>
                <Route path={'a'} element = {<Covid/>}/>
                <Route path={'b'} element = {<FCompoment/>}/>
                <Route path={'c'} element = {<Students/>}/>
                <Route path={'d'} element = {<Countries/>}/>
                <Route path={'e'} element = {<Product/>}/>
            </Routes>




        </div>
    );
}

export default App;
