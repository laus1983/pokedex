import { API_HOST } from "../utils/constans";

export async function getPokemonsApi(limit = 20, offset = 0) {
  try {
    const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
