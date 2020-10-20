import React from 'react'
import TransButton from '../Components/TransButton'
import TransForm from '../Components/TransForm'
import Transaction from '../Components/Transaction'


class Transactions extends React.Component{
    state = {
        expBtnClicked: false,
        incmBtnClicked: false,
        showForm: false,
        transactionToEdit: undefined
    }

    render() {
        return <div className="trans-container">
            <TransButton text=" + Income" id="incmBtnClicked" clickHandler={this.transactionBtnHandler}/>
            <TransButton text=" - Expense" id="expBtnClicked" clickHandler={this.transactionBtnHandler}/>
            <hr/>
            { this.state.showForm ? 
                <TransForm typeId={this.state.expBtnClicked ? this.getTransactionTypeId("Debit") : this.getTransactionTypeId("Credit")}
                    categories={this.state.expBtnClicked ? this.props.debit_categories : this.props.credit_categories}
                    submitHandler={this.props.submitHandler}
                    editHandler={this.props.editHandler}
                    hideForm={this.hideForm}
                    transactionToEdit={this.state.transactionToEdit}
                    userId={this.props.id}
                /> : null}
            <div className="transactions">
                {this.renderTransactions(this.props.transactions)}
            </div>
        </div>
    }

    renderTransactions = (tList) => {
        return tList.map((trans, indx) => <Transaction key={indx} 
            transaction={trans} deleteHandler={this.props.deleteHandler}
            editClickHandler={this.editClickHandler}/>)
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

    getTransactionTypeId = (name) => {
        return this.props.transaction_types.find(obj => obj.name === name).id
    }

    hideForm = () => {
        this.setState({ showForm: false, transactionToEdit: undefined })
    }

    editClickHandler = (transaction) => {
        if(transaction.transaction_type_id === 1){
            this.setState({
                expBtnClicked: false,
                incmBtnClicked: true,
                showForm: true,
                transactionToEdit: transaction
            })
        } else {
            this.setState({
                expBtnClicked: true,
                incmBtnClicked: false,
                showForm: true,
                transactionToEdit: transaction
            })
        }
    }

}

export default Transactions