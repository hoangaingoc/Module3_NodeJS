import {useEffect, useState} from "react";
import axios from "axios";

export function FCompoment() {
    let [inp1, setInp1] = useState(0);
    let [inp2, setInp2] = useState(0);
    let [kq, setKq] = useState(0)
    useEffect(() => {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(x => {
            console.log(x)
        })
    }, []);
    return (
        <>
            <input value={inp1} onChange={(e) => {
                setInp1(+e.target.value)
            }}
            />
            <input value={inp2} onChange={(e) => {
                setInp2(+e.target.value)
            }}
            />
            <button onClick={() => {
                setKq(+inp1 + +inp2)
            }}>+
            </button>
            <button onClick={() => {
                setKq(inp1 - inp2)
            }}>-
            </button>
            <button onClick={() => {
                setKq(inp1 * inp2)
            }}>*
            </button>
            <button onClick={() => {
                setKq(inp1 / inp2)
            }}>/
            </button>
            <h1>KQ: {kq}</h1>
            {/*F component {a}*/}
            {/*<button onClick={() => {*/}
            {/*    setA(a + 1)*/}
            {/*}}>Thay a*/}
            {/*</button>*/}
        </>
    )
}

// Lam lai 4 tinh + - * /
