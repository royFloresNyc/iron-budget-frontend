import React from 'react'

const User = ({ user }) => {
    const renderBankNames = (bankList) => {
        return bankList.map(bank => bank.name)
    }

    return (
        <div className="user-info">
            <p className="label">Username:</p>
            <h4 className="user-detail">{user.username}</h4><br/>
            <p className="label">Full Name:</p>
            <h4 className="user-detail">{`${user.first_name} ${user.last_name}`}</h4><br/>
            <p className="label">Address:</p>
            <h4 className="user-detail">{user.address}</h4><br/>
            <p className="label">Bank:</p>
            <h4 className="user-detail">{ user.banks ?  renderBankNames(user.banks) : null }</h4> 
        </div>
    )
}

export { User }