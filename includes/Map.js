import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState } from 'react';
import data from '@/data';

const Map = () => {
  const {
    contact
  } = data;

  const coordinates = contact.coordinates;

  const lat = coordinates.lat;
  const lng = coordinates.lng;

  const [center, setCenter] = useState({ lat, lng })
  const ZOOM_LEVEL = 16
  const mapRef = useRef()

  return (
    <div className='mt-8 border-4 border-white overflow-hidden shadow-xl'>
      <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} className='h-[20rem] w-full'>
        <TileLayer
          url='https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png'
        />
      </MapContainer>
    </div>
  )
}

export default Map
