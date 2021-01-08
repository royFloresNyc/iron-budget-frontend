import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import FilterBox from './FilterBox'
import Spinner from 'react-bootstrap/Spinner'


class Expenditure extends React.Component {

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
//--Render------------------------------------------------------
    renderDatePicker = () => {
        return (
            <div className="report-select">
                <FilterBox
                    label="Select Month:"
                    f_value={this.state.period}
                    changeState={this.handleCheck}
                    transactions={this.props.periods.map(obj=>obj.date)}
                />
            </div>
        )
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
              position:'bottom'
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
                {this.state.period ? this.renderExpPie() : <Spinner animation="border" role="status"></Spinner>}
                {this.state.period ? this.renderDatePicker() : null}
            </div>
        );
    }
}

export default Expenditure