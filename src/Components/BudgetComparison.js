import React from 'react'
import {Bar} from 'react-chartjs-2';

class BudgetComparison extends React.Component {
//--State---------------------------------------------------
    state = {
        data: [],
        labels: [],
        budget: [],
        colors: []
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
        let debits = this.props.info.transactions.filter(obj => obj.transaction_type_id === 2).map(obj=>obj.amount)
        return debits
    }
    getBudgetTargets = () => {
        let debits = this.props.info.budgets.map(obj=>obj.amount)
        return debits
    }
    getLabels = () => {
        let labels = this.props.info.transactions.filter(obj => obj.transaction_type_id === 2).map(obj=>obj.name)
        return labels
    }
//--Change-State------------------------------------------------
    componentDidMount = () => {
        let values = this.getValues()
        let labels = this.getLabels()
        let colors = this.getColors()
        let budget = this.getBudgetTargets()
        this.setState(()=>{
            return {
                data: values,
                labels: labels,
                budget: budget,
                colors: colors
            }
        })
    }

    render() {
        return (
        <div>
            <Bar
                data={{ 
                    labels: this.state.labels,
                    datasets: [
                        {
                            label: 'Actual',
                            data: this.state.data,
                            backgroundColor: '#FF0000'
                        },
                        {
                            label: 'Target',
                            data: this.state.budget,
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
        </div>
        );
    }

}

export default BudgetComparison