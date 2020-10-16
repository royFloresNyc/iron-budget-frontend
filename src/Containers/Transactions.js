import React from 'react'
import TransButton from '../Components/TransButton'
import TransForm from '../Components/TransForm'
import Transaction from '../Components/Transaction'


const Transactions = ({ transactions }) => {

    const renderTransactions = (tList) => {
        return tList.map((trans, indx) => <Transaction key={indx} transaction={trans} />)
    }

    return <div className="container transactions">
        <TransButton text=" + Income" />
        <TransButton text=" - Expense" />
        {/* toggle the form based on the button clicked */}
        <TransForm />
        {renderTransactions(transactions)}
    </div>
}

export default Transactions