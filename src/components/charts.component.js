import React from 'react';
import { Bar } from 'react-chartjs-2';

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
    const data = {
        labels: props.countries.map((country) => {
            return country.name
        }),
        datasets: [
            {
                label: '# of Population',
                data: props.countries.map((country) => {
                    return country.population
                }),
                backgroundColor: props.countries.map((country) => getRandomColor()),
                borderColor: props.countries.map((country) => getRandomColor()),
                borderWidth: 1,
            },
        ],
    }

    return (
        <Bar
            data={data}
            width={100}
            height={50}
            options={options}
        />
    )
}

export default Charts;