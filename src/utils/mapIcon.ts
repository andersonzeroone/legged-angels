import  Leaflet  from 'leaflet';
import mapMarkerImg from '../assets/point.svg';

const mapIcon = Leaflet.icon({
  iconUrl:mapMarkerImg,

  iconSize:[58,68],
  iconAnchor: [5, 55],
  popupAnchor: [25, -44],

});

export default mapIcon;
