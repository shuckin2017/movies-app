export function getStrapiURL(path = "") {
  return `"https://yts.mx/api/v2"${path}.json`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
