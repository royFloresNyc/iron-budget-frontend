import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import FilterBox from './FilterBox'


class Expenditure extends React.Component {

//--State---------------------------------------------------
    state = {
        period: "2020-01"
    }
//--Handlers----------------------------------------------------
handleCheck = (value) => {
    return this.setState({period: value})
}
//--Render------------------------------------------------------
    renderDatePicker = () => {
        return (
            <FilterBox
                f_value={this.state.period}
                changeState={this.handleCheck}
                transactions={this.props.periods.map(obj=>obj.date)}
            />)
    }
    renderExpPie = () => {
        return (
        <Doughnut
            data={{ 
                labels: this.getLabels(),
                datasets: [
                    {
                    label: 'Amount',
                    backgroundColor: this.getColors(),
                    hoverBackgroundColor: [
                        '#f8f8f8'
                    ],
                    data: this.getValues()
                    }
                ]
            }}
          options={{
            title:{
              display:true,
              text:'Expenditure',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        )
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
        let corrPeriod = this.props.periods.filter(obj=> obj.date===this.state.period)[0].values
        while (i <= corrPeriod.length) {
            let new_color = this.getRandomColor()
            newArr.push(new_color)
            i += 1
        }
        return newArr
    }
    getValues = () => {
        let corrPeriod = this.props.periods.filter(obj=> obj.date===this.state.period)[0].values
        let debits = corrPeriod.filter(ele=>ele.category.transaction_type_id===2).map(ele=>ele.total)
        return debits
    }
    getLabels = () => {
        let corrPeriod = this.props.periods.filter(obj=> obj.date===this.state.period)[0].values
        let labels = corrPeriod.filter(ele=>ele.category.transaction_type_id===2).map(ele=>ele.category.name)
        return labels
    }
//--Main-Render------------------------------------------------

    render() {
        return (
          <div>
           {this.renderDatePicker()}
           {this.renderExpPie()}
          </div>
        );
      }
}

export default Expenditure