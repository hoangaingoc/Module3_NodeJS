import {useEffect, useState} from "react";
import axios from "axios";


// Bài tập: Hiện danh sách, tìm kiếm theo tên gần đúng, sắp xếp theo điểm
export function Students() {
    let [list, setList] = useState([])
    let [filtered, setFilter] = useState([])
    let [search, setSearch] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:3000/students')
            .then((res) => {
                setList(res.data)
            })
    }, [])

    let searchName = () => {
        let filtered = list
        if (searchName) {
            filtered = filtered.filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
        }
            setFilter(filtered)
    }
    let ScoreAscending = () => {
        const sortedSore = [...filtered].sort((a,b) => parseFloat(a.score) - parseFloat(b.score))
        setFilter(sortedSore)
    }
    let ScoreDescending = () => {
        const sortedSore = [...filtered].sort((a,b) => - parseFloat(a.score) + parseFloat(b.score))
        setFilter(sortedSore)
    }
    useEffect(()=>{
        searchName()
    },[list,search])

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        textAlign: 'left'
    }
    const thtdStyle = {
        border: '1px solid black',
        padding: '5px'
    }
    return (
        <>
            <h1 align={"center"}>THÔNG TIN SINH VIÊN</h1>
            <button onClick={ScoreAscending}>Sắp xếp điểm tăng dần</button>
            <button onClick={ScoreDescending}>Sắp xếp điểm giảm dần</button>
            <input type="text"
                   placeholder="Tìm theo tên"
                   value={search}
                   onChange={(e) =>
                       setSearch(e.target.value)}
            />
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
                {filtered.map((item, index) =>
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