import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// https://restcountries.com/v3.1/all?fields=name,area,population,flags
// Tạo 1 compoent hiện danh sách quốc gia có: ảnh (hiện ảnh), tên (1 tên), diện tích và dân số.
//     Tính năng thêm:
//     Tìm kiếm theo tên gần đúng
// Tìm kiêm theo khoảng diện tích (ví dụ từ 100 - 1000)
// Tìm kiêm theo khoảng dân số (ví dụ từ 100000 - 1000000)
// Nâng cao: hiện 1 select option để chọn thêm 1 thông tin hiện thêm (ví dụ: chọn capital => Hiện thêm tên thủ đô)

export function Countries() {
    let [countries, setCountries] = useState([])
    let [filtered, setFiltered] = useState([])
    let [searchName, setSearchName] = useState('')
    let [minArea, setMinArea] = useState('')
    let [maxArea, setMaxArea] = useState('')
    let [minPopulation, setMinPopulation] = useState('')
    let [maxPopulation, setMaxPopulation] = useState('')
    let [addInfo, setAddInfo] = useState('');
    let navigate = useNavigate()

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
                setFiltered(response.data)
            })
    }, []);

    let filterCoutries = () => {
        let filtered = countries
        if (searchName){
            filtered = filtered.filter(e => e.name.common.toLowerCase().includes(searchName.toLowerCase()))
        }
        if (minArea) {
            filtered = filtered.filter(e => e.area >= minArea)
        }
        if (maxArea) {
            filtered = filtered.filter(e => e.area <= maxArea)
        }
        if (minPopulation) {
            filtered = filtered.filter(e => e.population >= minPopulation)
        }
        if (maxPopulation) {
            filtered = filtered.filter(e => e.population <= maxPopulation)
        }
        setFiltered(filtered)
    }
    useEffect(()=>{
        filterCoutries();
    },[searchName,minArea,maxArea,minPopulation,maxPopulation,])

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        textAlign: 'left'
    };

    const thTdStyle = {
        border: '1px solid black',
        padding: '8px'
    }
    return (
        <>
            <button onClick={() => {
                navigate('/a')
            }}>Chuyển sang Covid
            </button>

            <div>
                <h1 align={"center"}>DANH SÁCH QUỐC GIA</h1>
                <input
                    type="text"
                    placeholder="Tìm theo tên"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="min Area"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="max Area"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="min Population"
                    value={minPopulation}
                    onChange={(e) => setMinPopulation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="max Population"
                    value={maxPopulation}
                    onChange={(e) => setMaxPopulation(e.target.value)}
                />
                <select value={addInfo} onChange={(e) => setAddInfo(e.target.value)}>
                    <option value="">Select addition info</option>
                    <option value="capital">Capital</option>
                    <option value="region">Region</option>
                    <option value="subregion">Subregion</option>
                    <option value="timezones">Timezones</option>
                </select>
                <hr/>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thTdStyle} align={"center"}>STT</th>
                        <th style={thTdStyle} align={"center"}>Flag</th>
                        <th style={thTdStyle} align={"center"}>Country</th>
                        <th style={thTdStyle} align={"center"}>Area</th>
                        <th style={thTdStyle} align={"center"}>Population</th>
                        {addInfo && <th style={thTdStyle}
                                        align="center">{addInfo.charAt(0).toUpperCase() + addInfo.slice(1)}</th>}
                    </tr>
                    </thead>
                    <tbody>
                    {filtered.map((e, index) => (
                        <tr>
                            <td style={thTdStyle} align={"center"}>{index + 1}</td>
                            <td style={thTdStyle}><img src={e.flags.png} alt={`Flag of ${e.name.common}`} width="150"/>
                            </td>
                            <td style={thTdStyle}>{e.name.common}</td>
                            <td style={thTdStyle}>{e.area} km²</td>
                            <td style={thTdStyle}>{e.population}</td>
                            {addInfo && <td style={thTdStyle}>{e[addInfo]}</td>}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


        </>
    )
}