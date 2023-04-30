// The base URL for the server
const BASE_URL = 'https://mate-academy.github.io/react_phone-catalog/_new';

// A function for making requests to the server
const request = async (url: string) => {
  // Execute a fetch request using the provided URL
  const res = await fetch(BASE_URL + url);

  // If the response status is not "ok", throw an error
  if (!res.ok) {
    throw new Error();
  }

  // Parse the response as JSON and return it
  return res.json();
};

// A function for getting a list of products
export const getProducts = () => request('/products.json');

// A function for getting suggested products for a specific product ID
export const getSuggestedProducts = (id: string) => request(`/products/${id}.json`);
