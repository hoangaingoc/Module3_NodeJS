import {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import './Home.css'


export default function Admin(){
    return(
        <>
            <div className={'admin'}>
                <div className={'product-order'}>
                    <div className={'product-order-item'}>
                        Product
                    </div>
                    <div className={'product-order-item'}>
                        Order
                    </div>
                </div>
                <div className={'main-details'}>
                    <div className={'menuAdmin'}>menuAdmin</div>
                    <div className={'listUser'}>
                        <Outlet/>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}