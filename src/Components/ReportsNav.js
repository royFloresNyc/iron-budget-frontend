import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class ReportsNav extends React.Component {

    render() {
        return (
            <div className='reports-nav-bar'>
                <ul className="reports-nav">
                    <NavLink to='/reports/basic_finances'><li>Basic Financial Breakdown</li></NavLink>
                    <NavLink to='/reports/income'><li>Income</li></NavLink>
                    <NavLink to='/reports/expenditure'><li>Expenditure</li></NavLink>
                    <NavLink to='/reports/budget_comparison'><li>Budget Comparison</li></NavLink>
                    <NavLink to='/reports/projection'><li>Projections</li></NavLink>
                </ul>
            </div>
        )
    }

}

export default ReportsNav