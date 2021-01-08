import React from 'react'
import {Line} from 'react-chartjs-2'
import FilterBox from './FilterBox'

class Projection extends React.Component {

    //--State---------------------------------------------------
        state = {
            transact_name: "Groceries",
            checked: false 
        }
    //--Handlers----------------------------------------------------
    handleCheck = (name) => {
        return this.setState({transact_name: name})
    }
    //--Helper-Functions-----------------------------------------
        getValues = () => {
            let credits = [...this.props.periods.map(obj=>obj.values).map(ele=>ele.filter(x=>x.category.name===this.state.transact_name).map(vari=>vari.total)).map(last_obj=>last_obj[0])]
            return credits
        }
        getProjection = () => {
            if(this.props.info.projected.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.values)[0] === undefined)
            {return null}
            else{let projection = [...this.props.periods.map(obj=>obj.values).map(ele=>ele.filter(x=>x.category.name===this.state.transact_name).map(vari=>vari.total)).map(last_obj=>last_obj[0]), ...this.props.info.projected.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.values)[0]]
            return projection}
        }
        getLabels = () => {
            let labels = [...this.props.periods.map(obj=>obj.date), "P1", "P2", "P3", "P4", "P5"]
            return labels
        }
        onlyUnique = (value, index, self) => {
            return self.indexOf(value) === index;
          }
    //--Renders-----------------------------------------------------
        renderFilter = () => {
            return (
                <FilterBox
                    f_value={this.state.transact_name}
                    changeState={this.handleCheck}
                    transactions={this.props.periods.map(obj=>obj.values).flat().filter(f=>f.category.transaction_type_id === 2).map(ele=>ele.category.name)}
                />)
            }
        renderProjection = () => {
           if(this.getProjection() === null){
           return <h3>Not Enough Data for <strong>{this.state.transact_name}</strong></h3>
           }
           else{
           return <Line
            data={{ 
                labels: this.getLabels(),
                datasets: [{
                    label: "Expenditure",
                    backgroundColor: '#0BB2EB',
                    borderColor: '#0BB2EB',
                    data: this.getValues(),
                    fill: false,
                },
                {
                    label: "Projected",
                    backgroundColor: '#6D3535', 
                    borderColor: '#6D3535',
                    data: this.getProjection(),
                    fill: false
                }    
            ]
            }}
            options={{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                    }
                }]
            },
            title:{
                display:true,
                text:'Expenditure Projection',
                fontSize:20
            },
            legend:{
                display:true,
                position:'right'
            }
            }}
        />}
        }

        render() {
            return (
                <div>
                  {this.renderFilter()}
                  {this.renderProjection()}
                </div>
            );
        }
}
        
    
    export default Projection