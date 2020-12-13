import React from "react"
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts'

 class ApexChart2 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Visitors',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
          name: 'Cashflow',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
          name: 'Store visits',
          type: 'line',
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        options: {
          chart: {
            height: 'auto',
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            text: '',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB',
                }
              },
              title: {
                text: "",
                style: {
                  color: '#008FFB',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Store visits',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00E396'
              },
              labels: {
                style: {
                  colors: '#00E396',
                }
              },
              title: {
                text: "",
                style: {
                  color: '#00E396',
                }
              },
            },
            {
              seriesName: 'Revenue',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: false,
                color: '#FEB019'
              },
              labels: {
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                text: "",
                style: {
                  color: '#FEB019',
                }
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            },
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart1">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
</div>


      );
    }
  }

  export default ApexChart2;