import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graph = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('/predicted_visits_2025.csv')
      .then(response => response.text())
      .then(data => {
        const rows = data.split('\n').slice(1); // skip header
        const parsed = rows.map(row => {
          const [month, weekday, value] = row.split(',');
          return {
            x: `${month}-${weekday}`,
            y: parseFloat(value),
          };
        });
        setChartData(parsed);
      });
  }, []);

  const options = {
    title: {
      text: 'Forecasted Doctor Visits'
    },
    xAxis: {
      categories: chartData.map(point => point.x),
      title: { text: 'Month-Weekday' },
    },
    yAxis: {
      title: { text: 'Predicted Visits' }
    },
    series: [{
      name: 'Visits',
      data: chartData.map(point => point.y),
    }]
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
