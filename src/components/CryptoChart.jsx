import Highcharts, { offset } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsExporting(Highcharts);
import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

const CryptoChart = ({data, name}) => {

    const options = {
        chart: {
          height: 300,
          width: 600
        },
    
        title: {
            text: `${name} Price Chart`
        },
    
        subtitle: {
            text: 'Click small/large buttons or change window size to test responsiveness'
        },
    
        rangeSelector: {
            selected: 1
        },
    
        credits: {
          enabled: false,
        },
    
        series: [{
            name: `${name}`,
            data: data,
            type: 'area',
            threshold: null,
            turboThreshold:5000,
            tooltip: {
                valueDecimals: 2
            }
        }],
    
        accessibility: {
          enabled: false
        },
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        height: 300
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        }
      };
    
      return (
        <div id="container">
            <Row align="middle">
                <Col span={18} offset={3} xs={{span:24, offset:0}}>
                    <HighchartsReact highcharts={Highcharts} constructorType={"stockChart"} options={options} />
                </Col>
            </Row>
            
        </div>
      )
}

export default CryptoChart