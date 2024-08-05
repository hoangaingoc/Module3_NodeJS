import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export function Register(){
    let [user, setUser] = useState('')
    let [pass, setPass] = useState('')
    let navigate = useNavigate()
    const inp = {
        border: 'collapse',
        width: '200px',
        height: '30px',
        textAlign: 'left',
        justifyContent: 'center',
        display: 'flex',
        margin: '8px auto'
    }
    const btn = {
        justifyContent: 'center',
        display: 'flex',
        margin: '8px auto'
    }
    return(
        <>
            <h1 align={'center'}>Register</h1>
            <div>
                <input style={inp} type="text"
                       placeholder={'nhập user'}
                       value={user}
                       onChange={(event) =>
                           setUser()}/>
            </div>
            <div>
                <input style={inp} type="text"
                       placeholder={'nhập password'}
                       value={''}/>
            </div>
            <button style={btn} onClick={() => {
                navigate('/register')
            }}>Register
            </button>
            <button style={btn} onClick={() => {
                navigate('/login')
            }}>Login
            </button>

        </>
    )
}