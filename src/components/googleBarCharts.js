import React,{useState} from 'react'
import { Chart } from 'react-google-charts';

function BarChart() {
    const [data, setData] = useState([
        ['Category', 'Profit'],
        ['Household', 5000],
        ['Cosmetics', 3100],
        ['Clothing', 1500],
        ['Personal care', 1200],
        ['Auto parts', 4000]
    ]);

    const options = {
        title: 'Highest Temperature in last five years',
        backgroundColor: '#f7f7f7',
        hAxis: {
            title: 'Year',
        },
        vAxis: {
            title: 'Temperature °C',
        },
        colors: ['#007bff'],
        lineWidth: 2,
        animation: {
            startup: true,
            duration: 1000,
            easing: 'out',
        },
    };

    const generateRandomProfit = () => {
        return Math.floor(Math.random() * 5000) + 1000;
    }
    
    function handleDataUpdate() {
        const newData = data.map((entry, index) => {
            if (index === 0) {
                return entry;
            } else {
                const newProfit = generateRandomProfit();
                return [entry[0], newProfit];
            }
        });
        setData(newData);
    }
    
    return  (
        <div className='py-10 flex flex-col items-center justify-center'>
            <button
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus: ring-blue-300 font-medium'
            onClick={handleDataUpdate}>
                Update Data
            </button>
            <Chart
                width={'70%'}
                chartType='BarChart'
                data={data}
                options={options}
            />
        </div>
    )
}

export default BarChart;