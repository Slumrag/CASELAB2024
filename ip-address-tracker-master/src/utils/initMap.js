import icon from '../../images/icon-location.svg';
import L from 'leaflet';

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
});

export function initMap(elementId = 'map', latLng = [51.5, -0.09]) {
  const map = L.map(elementId).setView([51.505, -0.09], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const marker = L.marker(latLng, { icon: markerIcon }).addTo(map);
  return { map, marker };
}
