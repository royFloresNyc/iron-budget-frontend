import React from 'react'
import {Doughnut, Line} from 'react-chartjs-2';

class Income extends React.Component {

    //--State---------------------------------------------------
        state = {
            data: [],
            backgroundColor: [],
            labels: []
        }
    //--Helper-Functions-----------------------------------------
        getRandomColor = () => {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        getColors = () => {
            let newArr = []
            let i = 1
            while (i <= this.props.info.length) {
                let new_color = this.getRandomColor()
                newArr.push(new_color)
                i += 1
            }
            return newArr
        }
        getValues = () => {
            let credits = [...this.props.info.transactions.filter(obj=>obj.name==="Car Payment").map(obj=>obj.amount)]
            return credits
        }
        getProjection = () => {
            let projection = [...this.props.info.transactions.filter(obj=>obj.name==="Car Payment").map(obj=>obj.amount), ...this.props.info.projected[0]["Car Payment"]]
            return projection
        }
        getLabels = () => {
            let labels = [...this.props.info.transactions.filter(obj=>obj.name==="Car Payment").map(obj=>obj.t_date), "M1", "M2", "M3", "M4", "M5"]
            return labels
        }
    //--Change-State------------------------------------------------
        componentDidMount = () => {
            let values = this.getValues()
            let projection = this.getProjection()
            let labels = this.getLabels()
            this.setState(()=>{
                return {
                    data: values,
                    projection: projection,
                    labels: labels
                }
            })
        }
    
        render() {
            console.log(this.props.info.projected[0]["Car Payment"])
            return (
                <div>
                <Line
                    data={{ 
                        labels: this.state.labels,
                        datasets: [{
                            label: "Expenditure",
                            backgroundColor: '#0BB2EB', 
                            data: this.state.data,
                            fill: false,
                        },
                        {
                            label: "Projected",
                            backgroundColor: '#6D3535', 
                            data: this.state.projection,
                            fill: false
                        }    
                    ]
                    }}
                    options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                suggestedMin: 0,
                                suggestedMax: 1500,
                                stepSize: 100
                            }
                        }]
                    },
                    title:{
                        display:true,
                        text:'Expenditure Projection',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                    }}
                />
                </div>
            );
        }
}
        
    
    export default Income