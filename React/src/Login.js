import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export function Login(){
    let [user, setUser] = useState('')
    let [pass, setPass] = useState('')
    let navigate = useNavigate()

    const handleLogin = () => {
        if (user === 'admin' && pass === 'admin') {
            navigate('/home');
        } else {
            return;
        }
    };

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
            <h1 align={'center'}>Login</h1>
            <div>
                <input style={inp} type="text"
                       placeholder={'nhập user'}
                       value={user}
                    onChange={(event) =>
                        setUser(event.target.value)}/>
            </div>
            <div>
                <input style={inp} type="text"
                       placeholder={'nhập password'}
                       value={pass}
                       onChange={(event) => setPass(event.target.value)}
                />
            </div>
            <button style={btn} onClick={handleLogin}>Login
            </button>
            <button style={btn} onClick={() => {
                navigate('/register')
            }}>Register
            </button>
        </>
    )
}