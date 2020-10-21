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

    return (<div className="transaction" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseExitHandler}>
        <div className="date">{transaction.t_date}</div>
        <div className="name">{transaction.name}</div>
        <div className="category-name">{getCategoryName(transaction)}</div>
        <div className="amount">${transaction.amount}</div>
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