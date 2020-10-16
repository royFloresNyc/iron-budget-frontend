import React from 'react'
import TransButton from '../Components/TransButton'
import TransForm from '../Components/TransForm'
import Transaction from '../Components/Transaction'


class Transactions extends React.Component{
    state = {
        expBtnClicked: false,
        incmBtnClicked: false,
        showForm: false
    }

    transactionBtnHandler = (e) => {
        const buttonId = e.target.id
        this.setState(() => {
            if(buttonId === "expBtnClicked"){
                return {
                    expBtnClicked: true,
                    incmBtnClicked: false,
                    showForm: true
                }
            } else {
                return {
                    expBtnClicked: false,
                    incmBtnClicked: true,
                    showForm: true
                }
            }
        })
    }

    renderTransactions = (tList) => {
        return tList.map((trans, indx) => <Transaction key={indx} transaction={trans} />)
    }

    getTransactionTypeId = (name) => {
        return this.props.transaction_types.find(obj => obj.name === name).id
    }

    render() {
        return <div className="container transactions">
            <h3>Current Balance: $"some amount"</h3>
            <TransButton text=" + Income" id="incmBtnClicked" clickHandler={this.transactionBtnHandler}/>
            <TransButton text=" - Expense" id="expBtnClicked" clickHandler={this.transactionBtnHandler}/>
            <hr/>
            { this.state.showForm ? 
                <TransForm typeId={this.state.expBtnClicked ? this.getTransactionTypeId("Expense") : this.getTransactionTypeId("Income")}
                    categories={this.state.expBtnClicked ? this.props.expense_categories : this.props.income_categories}/> 
                : null}
            
            {this.renderTransactions(this.props.transactions)}
        </div>
    }
}

export default Transactions