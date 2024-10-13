const ipInput = document.querySelector('.search-bar__input');
const ipSubmit = document.querySelector('.search-bar__btn');

ipSubmit.addEventListener('click', handleIpSubmit);
ipInput.addEventListener('keydown', handleIpInputKeyDown);

async function getGeolocationByIp(ip) {
  const apiURL = new URL('https://geo.ipify.org/api/v2/country');
  apiURL.searchParams.set('ipAddress', ip);
  apiURL.searchParams.set('apiKey', process.env.API_KEY_GEOLOCATION);

  const response = await fetch(apiURL);

  return response.json();
}

function handleIpSubmit(e) {
  const ip = ipInput.value;
  getGeolocationByIp(ip).then(console.log);
}

function handleIpInputKeyDown(params) {}
