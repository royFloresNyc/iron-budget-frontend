import React from 'react'
import { NavLink } from 'react-router-dom'

class ReportsNav extends React.Component {

    render() {
        return (
            <div className='nav-bar'>
                <ul className="nav">
                    <li><NavLink to='/reports/basic_finances'>Basic Financial Breakdown</NavLink></li>
                    <li><NavLink to='/reports/income'>Income</NavLink></li>
                    <li><NavLink to='/reports/expenditure'>Expenditure</NavLink></li>
                    <li><NavLink to='/reports/budget_comparison'>Budget Comparison</NavLink></li>
                    <li><NavLink to='/reports/projection'>Financial Projections</NavLink></li>
                </ul>
            </div>
        )
    }

}

export default ReportsNav