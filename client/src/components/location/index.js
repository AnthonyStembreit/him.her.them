import React from 'react'
import Map from '../map'

const location = {
  address: '332 W 75th St, Kansas City, MO 64114',
  lat: 38.992692,
  lng: -94.593427,
  
}

export default function Location( ){
    return(
        <div id="location">
          <Map location={location} zoomLevel={19} />
        </div>
    )
}