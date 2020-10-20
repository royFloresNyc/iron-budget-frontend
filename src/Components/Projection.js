import React from 'react'
import {Doughnut, Line} from 'react-chartjs-2'
import FilterBox from './FilterBox'

class Projection extends React.Component {

    //--State---------------------------------------------------
        state = {
            transact_name: "Bills",
            checked: false 
        }
    //--Handlers----------------------------------------------------
    handleCheck = (name) => {
        return this.setState({transact_name: name})
    }
    //--Helper-Functions-----------------------------------------
        getValues = () => {
            let credits = [...this.props.info.transactions.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.amount)]
            return credits
        }
        getProjection = () => {
            if(this.props.info.projected.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.values)[0] === undefined)
            {return null}
            else{let projection = [...this.props.info.transactions.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.amount), ...this.props.info.projected.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.values)[0]]
            return projection}
        }
        getLabels = () => {
            let labels = [...this.props.info.transactions.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.t_date), "P1", "P2", "P3", "P4", "P5"]
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
                    transactions={this.props.info.transactions.map(obj=> obj.name)}
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
                    data: this.getValues(),
                    fill: false,
                },
                {
                    label: "Projected",
                    backgroundColor: '#6D3535', 
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

    //--Change-State------------------------------------------------
        // componentDidMount = () => {
        //     let values = this.getValues()
        //     let projection = this.getProjection()
        //     let labels = this.getLabels()
        //     this.setState(()=>{
        //         return {
        //             data: values,
        //             projection: projection,
        //             labels: labels
        //         }
        //     })
        // }   
        render() {
            console.log(this.props.info.projected.filter(obj=>obj.name===this.state.transact_name).map(obj=>obj.values)[0])
            return (
                <div>
                  {this.renderFilter()}
                  {this.renderProjection()}
                </div>
            );
        }
}
        
    
    export default Projection