import React from 'react'
import {Bar} from 'react-chartjs-2'
import FilterBox from './FilterBox'
import ReactModal from 'react-modal'
import BudgerForm from './BudgetForm'
import Spinner from 'react-bootstrap/Spinner'

class BudgetComparison extends React.Component {
//--State---------------------------------------------------
    state = {
        period : null,
        showModal: false
    }
//-- Set Default Period -----------------------------------
componentDidMount() {
    this.setState({ period: this.props.periods[0].date})
}
//--Handlers----------------------------------------------------
    handleCheck = (value) => {
        return this.setState({period: value})
    }
    handleOpenModal = () => {
        this.setState({ showModal: true });
    }
  
    handleCloseModal = () => {
        this.setState({ showModal: false });
    }
//--Renders--------------------------------------------------

    renderBudgetForm = () => {
        return (
            <BudgerForm
                budgets={this.props.info.budgets} info={this.props.info} createBudget={this.props.createBudget}
            />)
    }
    renderBudgetAdder = () => {
        return (<div>
        <button onClick={this.handleOpenModal}>Edit Budget Target</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>X</button>
            {this.renderBudgetForm()}
        </ReactModal>
      </div>)
    }
    renderDatePicker = () => {
        return (
            <FilterBox
                f_value={this.state.period}
                changeState={this.handleCheck}
                transactions={this.props.periods.map(obj=>obj.date)}
            />)
    }
    renderBar = () => {
        return (
            <Bar
                data={{ 
                    labels: this.getLabels(),
                    datasets: [
                        {
                            label: 'Actual',
                            data: this.getValues(),
                            backgroundColor: '#FF0000'
                        },
                        {
                            label: 'Target',
                            data: this.getBudgetTargets(),
                            backgroundColor: "#FF00FF"
                        }
                    ]
                }}            
                options={{
                title:{
                display:true,
                text:'Target vs Actual Expenditure',
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
        while (i <= this.props.info.length) {
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
    getBudgetTargets = () => {
        let debits = this.props.info.budgets.map(obj=>obj.amount)
        return debits
    }
//--Render-Component------------------------------------------------

    render() {
        return (
        <div>
        {this.renderBudgetAdder()}
        {this.state.period ? this.renderDatePicker() : null}
        {this.state.period ? this.renderBar() : <Spinner animation="border" role="status"></Spinner>}
        </div>
        );
    }

}

export default BudgetComparison