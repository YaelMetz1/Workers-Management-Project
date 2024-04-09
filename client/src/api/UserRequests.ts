import axios, { AxiosResponse } from "axios";
import User from "../types/Employee";

const API_URL = "http://localhost:4000/api/user";

export async function checkUserExists(user: {
  email: string;
  password: string;
}): Promise<User | undefined> {

  const response = await axios.post(
    API_URL + "/verification",
    user
  );
  if (response) {
    return response.data as User;
  }
}

//An employee is registered in the system
export async function register(user: { email: string; password: string }): Promise<User | undefined> {
  try {
    const response: AxiosResponse = await axios.post(API_URL + "/register", user);
    if (response) {
      return response.data as User;
    }
  } catch (error) {
    console.error(" Error registering user", error);
  }
}
