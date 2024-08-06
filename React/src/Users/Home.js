import {Link, Outlet} from "react-router-dom";
import '../Index.css';


export function Home(){
    return (
        <>
            <div className={'header'}>
                <div className={'logo'}>Logo</div>
                <div className={'banner'}>Banner</div>
            </div>
            <div className={'menu'}>
                <div className={'home'}><Link to={'/home'}>Home</Link></div>
                <div className={'product'}>Product</div>
                <div className={'order'}><Link to={'/home/orders'}>Order</Link></div>
                <div className={'logout'}><Link to={'/'}>Logout</Link></div>
            </div>
            <div className={'main'}>
                <div className={'slideBar'}>Slide Bar</div>
                <div className={'listproduct'}>
                    <Outlet/>
                </div>
            </div>
            <hr/>

        </>
    );
}