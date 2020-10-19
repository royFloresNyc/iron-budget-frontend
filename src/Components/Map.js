import React from 'react'

const Map = ({searchVal}) => {
    return (
        <div className="map" >
            <iframe
                title="map"
                width="600"
                height="450"
                src={`https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_MAPS_API_KEY}
                    &zoom=15
                    &q=${searchVal}`} >
            </iframe>
        </div>
    )
}

export default Map