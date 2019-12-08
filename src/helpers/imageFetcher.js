const url = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const fetchImage = async () => {
  const data = await fetch(`${url}/meme`);
  const json = await data.json();
  return json.image;
}