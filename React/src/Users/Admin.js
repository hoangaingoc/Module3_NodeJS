import {useEffect, useState} from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

import '../Index.css'


export default function Admin(){
    const location = useLocation();
    const isStudentRoute = location.pathname.startsWith('/admin/students');
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
                    {isStudentRoute && (
                        <div className="product-order-item">
                            Student
                        </div>
                    )}
                </div>
                <div className={'main-details'}>
                    <div className={'menuAdmin'}>Menu Admin</div>
                    <div className={'listUser'}>
                        <Outlet/>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}