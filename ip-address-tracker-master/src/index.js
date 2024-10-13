import { getGeolocationByIp } from './api/getGeolocationByIp';
import { validateIp } from './utils';

const searchBar = document.querySelector('.search-bar');
const ipAddress = document.querySelector('#ip');
const location = document.querySelector('#location');
const timezone = document.querySelector('#timezone');
const isp = document.querySelector('#isp');

searchBar.addEventListener('submit', handleIpSubmit);

function setGeolocationInfo(info) {
  ipAddress.textContent = info.ip;
  const { country, region } = info.location;
  location.textContent = `${country} ${region}`;
  timezone.textContent = info.location.timezone;
  isp.textContent = info.isp;
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
