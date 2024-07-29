import React, { useEffect, useState } from 'react';
import axios from 'axios';;

export function Countries() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [minArea, setMinArea] = useState('');
    const [maxArea, setMaxArea] = useState('');
    const [minPopulation, setMinPopulation] = useState('');
    const [maxPopulation, setMaxPopulation] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [additionalData, setAdditionalData] = useState({});

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags')
            .then(response => {
                setCountries(response.data);
                setFilteredCountries(response.data);
            });
    }, []);

    const filterCountries = () => {
        let filtered = countries;

        if (searchName) {
            filtered = filtered.filter(country =>
                country.name.common.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        if (minArea) {
            filtered = filtered.filter(country => country.area >= minArea);
        }

        if (maxArea) {
            filtered = filtered.filter(country => country.area <= maxArea);
        }

        if (minPopulation) {
            filtered = filtered.filter(country => country.population >= minPopulation);
        }

        if (maxPopulation) {
            filtered = filtered.filter(country => country.population <= maxPopulation);
        }

        setFilteredCountries(filtered);
    };

    useEffect(() => {
        filterCountries();
    }, [searchName, minArea, maxArea, minPopulation, maxPopulation, countries]);

    useEffect(() => {
        if (additionalInfo) {
            axios.get(`https://restcountries.com/v3.1/all?fields=name,${additionalInfo}`)
                .then(response => {
                    const data = response.data.reduce((acc, country) => {
                        acc[country.name.common] = country[additionalInfo];
                        return acc;
                    }, {});
                    setAdditionalData(data);
                });
        }
    }, [additionalInfo]);

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
        <div>
            <h1>Country List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Min area"
                    value={minArea}
                    onChange={(e) => setMinArea(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max area"
                    value={maxArea}
                    onChange={(e) => setMaxArea(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Min population"
                    value={minPopulation}
                    onChange={(e) => setMinPopulation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max population"
                    value={maxPopulation}
                    onChange={(e) => setMaxPopulation(e.target.value)}
                />
                <select onChange={(e) => setAdditionalInfo(e.target.value)}>
                    <option value="">Select additional info</option>
                    <option value="capital">Capital</option>
                    <option value="region">Region</option>
                    <option value="subregion">Subregion</option>
                    {/* Add more options as needed */}
                </select>
            </div>
            <div>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thTdStyle} align={"center"}>Flag</th>
                        <th style={thTdStyle} align={"center"}>Country</th>
                        <th style={thTdStyle} align={"center"}>Area</th>
                        <th style={thTdStyle} align={"center"}>Population</th>
                        <th style={thTdStyle} align={"center"}>{additionalInfo.charAt(0).toUpperCase() + additionalInfo.slice(1)}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCountries.map(country => (
                        <tr key={country.name.common}>
                            <td style={thTdStyle}><img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="50"/></td>
                            <td style={thTdStyle}>{country.name.common}</td>
                            <td style={thTdStyle}>{country.area} km²</td>
                            <td style={thTdStyle}>{country.population}</td>
                            <td style={thTdStyle}>{additionalData[country.name.common]}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
