import axios, { AxiosResponse } from "axios";
import { error } from "./theme";

export const HP_API_BASE = "https://hp-api.onrender.com/api";
export const GITHUB_API_BASE = "https://api.github.com";
export const WEATHER_API_BASE = "https://api.openweathermap.org/data/2.5";

// Makes a GET request with themed error handling
export async function owlPost<T>(url: string): Promise<T | null> {
  try {
    const response: AxiosResponse<T> = await axios.get(url, { timeout: 10000 });
    return response.data;
  } catch (err: any) {
    if (err.response) {
      console.log(error(`The owls returned with bad news! (Status: ${err.response.status})`));
    } else if (err.request) {
      console.log(error("The owls could not deliver your message — network error!"));
    } else {
      console.log(error("A dark spell has disrupted the magic..."));
    }
    return null;
  }
}
