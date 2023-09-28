import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './MapView.module.css'

const MapView = () => {
  return (
    <MapContainer className={styles.map} center={[-34.60388468156064, -58.38173438140184]} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      /> 
      <Marker position={[-34.60388468156064, -58.38173438140184]}>
        <Popup>
          Hotel Prueba.
        </Popup>
      </Marker>
    </MapContainer>
  )
};

export default MapView;