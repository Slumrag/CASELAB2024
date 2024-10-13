export async function getGeolocationByIp(ip) {
  const apiURL = new URL('https://geo.ipify.org/api/v2/country,city');
  apiURL.searchParams.set('ipAddress', ip);
  apiURL.searchParams.set('apiKey', process.env.API_KEY_GEOLOCATION);

  const response = await fetch(apiURL);

  return response.json();
}
