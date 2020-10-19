import React from 'react'
import {Doughnut} from 'react-chartjs-2';


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
        let credits = this.props.info.filter(obj => obj.transaction_type_id === 1).map(obj=>obj.amount)
        return credits
    }
    getLabels = () => {
        let labels = this.props.info.filter(obj => obj.transaction_type_id === 1).map(obj=>obj.name)
        return labels
    }
//--Change-State------------------------------------------------
    componentDidMount = () => {
        let values = this.getValues()
        let colors = this.getColors()
        let labels = this.getLabels()
        this.setState(()=>{
            return {
                data: values,
                backgroundColor: colors,
                labels: labels
            }
        })
    }

    render() {
        console.log(this.state)
        return (
          <div>
            <Doughnut
                data={ 
                    { 
                    labels: this.state.labels,
                    datasets: [
                        {
                        label: 'Amount',
                        backgroundColor: this.state.backgroundColor,
                        hoverBackgroundColor: [
                            '#f8f8f8'
                        ],
                        data: this.state.data
                        }
                    ]
                }
                }
              options={{
                title:{
                  display:true,
                  text:'Income',
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