import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import FilterBox from './FilterBox'
import Spinner from 'react-bootstrap/Spinner'


class BasicFinances extends React.Component {

//--State---------------------------------------------------
    state = {
        period: null
    }

//-- Set Default Period -----------------------------------
    componentDidMount() {
        this.setState({ period: this.props.periods[0].date})
    }
//--Handlers----------------------------------------------------
    handleCheck = (value) => {
        return this.setState({period: value})
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
        let corrPeriod = this.props.periods.filter(obj=> obj.date===this.state.period)[0].values
        let credits = corrPeriod.filter(ele=>ele.category.transaction_type_id===1).reduce((sum, obj)=> sum + obj.total, 0)
        newValues.push(credits)
        let debits = corrPeriod.filter(ele=>ele.category.transaction_type_id===2).reduce((sum, obj)=> sum + obj.total, 0)
        newValues.push(debits)
        return newValues
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
    renderPie = () => {
        return (
            <Doughnut
            data={ 
                { 
                labels: ["Income", "Expenditure"],
                datasets: [
                    {
                    label: 'Amount',
                    backgroundColor: ['#FFFF00', '#FF0000'],
                    hoverBackgroundColor: [
                        '#f8f8f8',
                        '#f8f8f8'
                    ],
                    data: this.getValues()
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
        )
    }

    render() {
        return (
          <div>
            {this.state.period ? this.renderDatePicker() : null}
            {this.state.period ? this.renderPie() : <Spinner animation="border" role="status"></Spinner>}
          </div>
        );
      }
}

export default BasicFinances