import axios from "axios";
import { useEffect, useState } from "react"

export function Suabai_Students() {
    let [list, setList] = useState([]);
    let [nameSearch, setNameSearch] = useState("");

    let getAll = () => {
        axios.get("http://localhost:3000/students").then((res) => {
            let data = res.data;
            setList(data);
        })
    }

    useEffect(() => {
        getAll();
    }, []);

    let searchName = (event) => {
        let name = event.target.value;
        setNameSearch(name);
        if (name === "") {
            getAll();
            return;
        }
        let newLList = list.filter((item) => {
            return item.name.toLowerCase().includes(name.toLowerCase());
        });
        console.log(newLList);
        setList(newLList);
    }

    let sortBySore = (event) => {
        let value = event.target.value;
        if(value === "") {
            getAll();
            return;
        }
        if(value == "asc") {
            let newList = [...list];
            newList.sort((a , b) => {
                return a.score - b.score;
            });
            setList(newList);
        } else {
            let newList = [...list];
            newList.sort((a , b) => {
                return b.score - a.score;
            });
            setList(newList);
        }
    }
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        textAlign: 'left'
    }
    const thtdStyle = {
        border: '1px solid black',
        padding: '5px'
    }
        return(
            <>
                <h1 align={"center"}>THÔNG TIN SINH VIÊN</h1>
                <input placeholder="Search Name" value={nameSearch} onChange={(event) => {
                    searchName(event)
                }}></input>
                <select onChange={(event) => {
                    sortBySore(event)
                }}>
                    <option value="">Sắp xếp điểm</option>
                    <option value="asc">Tăng dần</option>
                    <option value="desc">Giảm dần</option>
                </select>
                <hr/>
                <table style={tableStyle}>
                    <tr>
                        <td style={thtdStyle} align={"center"}>STT</td>
                        <td style={thtdStyle} align={"center"}>ID</td>
                        <td style={thtdStyle} align={"center"}>Name</td>
                        <td style={thtdStyle} align={"center"}>Description</td>
                        <td style={thtdStyle} align={"center"}>Action</td>
                        <td style={thtdStyle} align={"center"}>Score</td>
                    </tr>
                    {list.map((item, index) =>
                        <tr>
                            <td style={thtdStyle}>{index + 1}</td>
                            <td style={thtdStyle}>{item.id}</td>
                            <td style={thtdStyle}>{item.name}</td>
                            <td style={thtdStyle}>{item.description}</td>
                            <td style={thtdStyle}>{item.action}</td>
                            <td style={thtdStyle}>{item.score}</td>
                        </tr>
                    )}
                </table>
            </>
        )
}