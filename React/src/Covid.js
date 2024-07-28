import {Component} from "react";
import {render} from "@testing-library/react";
import axios from "axios";

// Tìm kiếm theo tên tỉnh
// Nút hiện 5 tỉnh có cases cao nhất
// Nút hiện 5 tỉnh có deaths cao nhất
// Nút sắp xếp theo cases tăng dần, giảm dần
// Nút sắp xếp theo deaths tăng dần, giảm dần

export default class Covid extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            searchQuery: ''
        }
    }

    componentDidMount() {
        axios.get('https://api-kent.netlify.app/.netlify/functions/api/vn').then(response => {
            console.log(response.data.detail);
            let arr = [];
            for (const key in response.data.detail) {
                const id = parseInt(key, 10);
                if (id < 63) {
                    arr.push(response.data.detail[key]);
                }
            }
            this.setState({ list: arr });
        });
    }

    render() {
        const tableStyle = {
            borderCollapse: 'collapse',
            width: '100%',
            textAlign: 'left'
        };

        const thTdStyle = {
            border: '1px solid black',
            padding: '8px'
        }
        // const filteredList = this.state.list.filter(item => item.id <= 71);
        return (
            <>
                <h2>BẢNG THÔNG TIN COVID</h2>

                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thTdStyle}>STT</th>
                        <th style={thTdStyle}>Name</th>
                        <th style={thTdStyle}>Cases</th>
                        <th style={thTdStyle}>Deaths</th>
                        <th style={thTdStyle}>New Cases</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((item, index) => (
                        <tr key={index}>
                            <td style={thTdStyle}>{index + 1}</td>
                            <td style={thTdStyle}>{item.name}</td>
                            <td style={thTdStyle}>{item.cases}</td>
                            <td style={thTdStyle}>{item.deaths}</td>
                            <td style={thTdStyle}>{item.newcases}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        )
    }
}


