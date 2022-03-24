import { ReactDOM } from 'react-router-dom'
import TruckLocation from './TruckLocation'
// import ThemePark from ''

const Map = () => {

  return (
    <div className="map">
        <img src="url('https://thumbs.dreamstime.com/b/amusement-park-concept-landscape-map-flat-fairground-elements-castle-mountains-cartoon-vector-illustration-132534318.jpg')" className="mapContainer" alt="mainHomepage"/>
        <TruckLocation />
    </div>

  )
}

export default Map