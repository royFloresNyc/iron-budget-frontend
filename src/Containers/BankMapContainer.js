import React from 'react'
import Map from '../Components/Map'

class BankMapContainer extends React.Component {
//--State---------------------------------------------------------------------------------------
    state = {
        searchValue: 'bank'
    }
//--Component-Manipulation-----------------------------------------------------------------------
    componentDidMount() {
        if(this.props.banks){
            this.setState({searchValue: this.getBankName()})
        }
    }

    clickHandler = (searchVal) => {
        this.setState({ searchValue: searchVal})
    }

    getBankName = () => {
        return (this.props.banks ? this.props.banks.map(bank => bank.name)[0] : 'bank')
    }
  
    render(){
        return (
            <div>
                <div className="map-btn" onClick={() => this.clickHandler(this.getBankName())}>My Bank</div>
                <div className="map-btn" onClick={() => this.clickHandler("ATM")}>ATM</div>
                <div className="map-btn" onClick={() => this.clickHandler("Banks")}>Other Banks</div>
                <Map searchVal={this.state.searchValue} />
            </div>
        )
    }
}

export default BankMapContainer