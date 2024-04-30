import { Chart } from 'react-google-charts';

function LineChart() {
  const temperatureData = [
    ['Year', 'Highest Temperature'],
    [2017, 32],
    [2018, 35],
    [2019, 31],
    [2020, 37],
    [2021, 30]];


  return (
    <>
    <h1>Google Line Charts</h1>
    <div className="py-10">
    <Chart
                chartType="LineChart"
                data={temperatureData}
            />
  </div>
  </>
  )}

  export default LineChart;