import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

const colors = scaleOrdinal(schemeCategory10).range();


const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const Charts = (props) => {

    const data = props.countries.map((country => {
        return {
            name: country.name, population: country.population
        };
    }))

    return (
        <div style={{width: '100%', height: '85vh'}}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 50, right: 40, left: 220, bottom: 5,
                    }}
                > <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="population" fill="#8884d8" >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getRandomColor()} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts;

// const data = {
//     labels: props.countries.map((country) => {
//         return country.name
//     }),
//     datasets: [
//         {
//             label: '# of Population',
//             data: props.countries.map((country) => {
//                 return country.population
//             }),
//             backgroundColor: props.countries.map((country) => getRandomColor()),
//             borderColor: props.countries.map((country) => getRandomColor()),
//             borderWidth: 1,
//         },
//     ],
// }


    // return (
    //     <Bar
    //         data={data}
    //         width={100}
    //         height={50}
    //         options={options}
    //     />
    // )