import React from 'react'

const Transaction = ({ transaction }) => {
    
    return <div className="transaction">
        <div className="date">{transaction.t_date}</div>
        <div className="name">{transaction.name}</div>
        <div className="amount">${transaction.amount}</div>
    </div>
}

export default Transaction