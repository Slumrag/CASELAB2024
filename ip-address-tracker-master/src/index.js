import { getGeolocationByIp } from './api/getGeolocationByIp';
import { validateIp } from './utils';

const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('submit', handleIpSubmit);

function handleIpSubmit(e) {
  e.preventDefault();
  const ip = e.target.ipAddress.value;
  if (validateIp(ip)) {
    getGeolocationByIp(ip).then(console.log);
  } else {
    alert('Invalid IP address');
  }
}
