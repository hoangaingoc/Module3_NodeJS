import {useEffect, useState} from "react";
import axios from "axios";


export function Suabai_Countries() {
    let [list, setList] = useState([])
    let [nameSearch, setNameSearch] = useState('')
    let [field, setField] = useState('')
    let [check, setCheck] = useState(false)

    let api = 'https://restcountries.com/v3.1/all?fields=name,area,population,flags,capital'
    const getAll = () => {
        axios.get(api)
            .then((res) => {
                setList(res.data)
    })}
    let getField = (event) => {
        let field = event.target.value
        if (field == ''){
            setCheck(false)
            getAll()
            return
        } else {
            setField(field)
            api = api + ',' + field
            axios.get(api).then ((res) => {
                setList(res.data)
                setCheck(true)
            })
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    let findNameContian = (event) => {
        setNameSearch(event.target.value)
        let input = event.target.value
        if (input == '') {
            getAll()
        } else {
            let newList = list.filter((item) => {
                let nameCountry = item.name.common
                return nameCountry.toLowerCase().includes(input.toLowerCase())
            })
            setList(newList)
        }
    }

    let findByArea = () => {
        let from = 100
        let to = 1000
        let newList = list.filter((item) => {
            let area = item.area
            return area >= from && area<= to
        })
        setList(newList)
    }
    return (
        <>
            <h1>DANH SÁCH CÁC QUỐC GIA</h1>
            <input type="text"
                   placeholder='Nhập tên'
                   value={nameSearch}
                   onChange={(event) =>{
                       findNameContian(event)
                   }}/>
            <button onClick={findByArea}>DS nước DT từ 100 đến 1000</button>
            <button onClick={getAll}>Hiển thị tất cả</button>
            <select onChange={getField} value={field}>
                <option value="">--Thêm--</option>
                <option value="timezones">Timezones</option>
                <option value="status">Status</option>
            </select>
            <table border={1}>
                <tr>
                    <td>STT</td>
                    <td>Cờ</td>
                    <td>Tên</td>
                    <td>Diện tích</td>
                    <td>Dân số</td>
                    <td>Thủ đô</td>
                    {
                        check ? (<td>{field}</td>) : ""
                    }
                </tr>
                {
                    list.map((item, index) => (
                        <>
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={item.flags.png}/></td>
                                <td>{item.name.common}</td>
                                <td>{item.area}</td>
                                <td>{item.population}</td>
                                <td>{item.capital}</td>
                                {
                                    check ? (<td>{item[field]}</td>) : ""
                                }
                            </tr>
                        </>
                    ))
                }

            </table>
        </>
    )
}