import React from 'react'

const User = ({ user }) => {
    const renderBankNames = (bankList) => {
        return bankList.map(bank => bank.name)
    }

    return (
        <div className="user-info">
            <h4>Username: {user.username}</h4>
            <h4>Full Name: {`${user.first_name} ${user.last_name}`}</h4>
            <h4>Address: {user.address}</h4>
            <h4>Bank(s): { user.banks ?  renderBankNames(user.banks) : null }</h4> 
        </div>
    )
}

export { User }