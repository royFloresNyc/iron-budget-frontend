import React from 'react'
import TransButton from '../Components/TransButton'
import TransForm from '../Components/TransForm'
import Transaction from '../Components/Transaction'


const Transactions = () => {
    return <div>
        <TransButton text=" + Income" />
        <TransButton text=" - Expense" />
        {/* toggle the form based on the button clicked */}
        <TransForm />
        {/* render an a list of transactions */}
        <Transaction/>
        <Transaction/>
        <Transaction/>
        <Transaction/>
    </div>
}

export default Transactions