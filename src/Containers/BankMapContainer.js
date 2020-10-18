import React from 'react'
// import ENV from '../.env'

class BankMapContainer extends React.Component {
//--State---------------------------------------------------------------------------------------
    state = {
        searchValues: 'chase'
    }
//--Component-Manipulation-----------------------------------------------------------------------
    // componentDidMount = () => {

    //     console.log('bank props: ', this.props.banks)
    //     // const myBank = this.props.banks[0].name
    //     // this.setState({searchValues: myBank})
    // }
    // "geo_location": {
    //     "lat": 40.6162746,
    //     "lng": -73.9965698
    //     }

    // console.log('geo location of addres:' , props.geoLocation)
    // this.props.geoLocation.lat, this.props.geoLocation.lng

    //7205+17th+Avenue+Brooklyn+NY
    render() {
        console.log("insideRender")
        if(this.props.geoLocation)
        {
        return (
            <iframe
            title="map"
            width="600"
            height="450"
            src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_MAPS_KEY}
            &zoom=15
            &q=${this.state.searchValues}`} >
            </iframe>
        )}
        else{return <h1>LOADING</h1>}
    }
}

export default BankMapContainer