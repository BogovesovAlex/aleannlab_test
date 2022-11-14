import { GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from "react";

import { defaultTheme } from './Theme';

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwhell: false,
  disableDoubleClickZoom: false,
  fullscreenControll: false,
  styles: defaultTheme,
}

function Map({ centerPoint }) {
  const center = useMemo(() => ({ lat: centerPoint.lat, lng: centerPoint.long }), [centerPoint.lat, centerPoint.long]);

  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
      options={defaultOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
export default Map;