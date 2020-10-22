import React, { useState } from 'react'
import editIcon from '../Images/editIcon.jpg'
import deleteIcon from '../Images/deleteIcon.png'

const Transaction = ({ categories, transaction, deleteHandler, editClickHandler }) => {
    const[showButtons, setShowButtons] = useState(false)

    const mouseEnterHandler = () => {
        setShowButtons(true)
    }

    const mouseExitHandler = () => {
        setShowButtons(false)
    }
    
    const getCategoryName = (tObject) => {
        return categories.find(cat => transaction.category_id === cat.id).name
    }

    const creditStyle = {
        color: "#14cc60"
    }

    const debitStyle = {
        color: "#d83b00"
    }

    return (<div className="transaction" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
        <div className="date">{transaction.t_date}</div>
        <div className="name">{transaction.name}</div>
        <div className="category-name">{getCategoryName(transaction)}</div>
        <div className="amount" style={transaction.transaction_type_id === 1 ? creditStyle : debitStyle}>${transaction.amount}</div>
        <div className="t-btn">
            <div className="edit-btn" onClick={() => editClickHandler(transaction)}>
                { showButtons ? <img className="icon-btn" src={editIcon} alt="edit icon" /> : null }
            </div>
            <div className="delete-btn" onClick={() => deleteHandler(transaction)}>
            { showButtons ? <img className="icon-btn" src={deleteIcon} alt="delete icon" /> : null }
            </div>
        </div>
    </div>)
}

export default Transaction