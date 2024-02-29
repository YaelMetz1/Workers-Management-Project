import axios, { AxiosResponse } from "axios";
import User from "../types/User";

const API_URL = "http://localhost:4000/api";

export async function checkUserExists(user: {
  email: string;
  password: string;
}): Promise<User | undefined> {

  try {
    const response: AxiosResponse = await axios.post(
      API_URL + "/checkUserExists",
      user
    );
    
    if (response.data.user) {
      return response.data.user[0] as User;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}
