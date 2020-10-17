import React from 'react'

const Transaction = ({ transaction, deleteHandler, editClickHandler }) => {
    
    return <div className="transaction">
        <div className="date">{transaction.t_date}</div>
        <div className="name">{transaction.name}</div>
        <div className="amount">${transaction.amount}</div>
        <p style={{display: "inline"}} onClick={() => editClickHandler(transaction)}> Edit </p>
        <p style={{display: "inline"}} onClick={() => deleteHandler(transaction.id)}> Delete </p>
    </div>
}

export default Transaction