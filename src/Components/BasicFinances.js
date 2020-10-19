import React from 'react'
import {Doughnut} from 'react-chartjs-2';


class BasicFinances extends React.Component {

//--State---------------------------------------------------
    state = {
        data: []
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
        let newValues = []
        let credits = this.props.info.filter(obj => obj.transaction_type_id === 1).reduce((sum, obj)=> sum + obj.amount, 0)
        newValues.push(credits)
        let debits = this.props.info.filter(obj => obj.transaction_type_id === 2).reduce((sum, obj)=> sum + obj.amount, 0)
        newValues.push(debits)
        return newValues
    }
//--Change-State------------------------------------------------
    componentDidMount = () => {
        let values = this.getValues()
        this.setState(()=>{
            return {
                data: values
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
                    labels: ["Income", "Expenditure"],
                    datasets: [
                        {
                        label: 'Amount',
                        backgroundColor: ['#2E8B57', '#FF0000'],
                        hoverBackgroundColor: [
                            '#00FF7F',
                            '#FF4500'
                        ],
                        data: this.state.data
                        }
                    ]
                }
                }
              options={{
                title:{
                  display:true,
                  text:'Income Vs Expenditure',
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

export default BasicFinances