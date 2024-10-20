import 'leaflet/dist/leaflet.css';
import { getGeolocationByIp } from './api/getGeolocationByIp';
import { validateIp, initMap } from './utils';
import { addMapOffset } from './utils/addMapOffset';

const searchBar = document.querySelector('.search-bar');
const ipAddress = document.querySelector('#ip');
const location = document.querySelector('#location');
const timezone = document.querySelector('#timezone');
const isp = document.querySelector('#isp');
const { marker, map } = initMap();

searchBar.addEventListener('submit', handleIpSubmit);
document.addEventListener('DOMContentLoaded', () => {
  getGeolocationByIp().then(setGeolocationInfo);
});

function setGeolocationInfo(info) {
  const { country, region, lat, lng } = info.location;
  ipAddress.textContent = info.ip;
  location.textContent = `${country} ${region}`;
  timezone.textContent = info.location.timezone;
  isp.textContent = info.isp;

  map.setView([lat, lng]);
  marker.setLatLng([lat, lng]);

  if (matchMedia('(max-width: 1024px)').matches) {
    addMapOffset(map);
  }
}

function handleIpSubmit(e) {
  e.preventDefault();
  const ip = e.target.ipAddress.value;
  if (validateIp(ip)) {
    getGeolocationByIp(ip).then(setGeolocationInfo);
  } else {
    alert('Invalid IP address');
  }
}
