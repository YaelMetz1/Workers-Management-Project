import axios, { AxiosResponse } from "axios";
import User from "../types/User";

const API_URL = "http://localhost:4000/api/user";

export async function checkUserExists(user: {
  email: string;
  password: string;
}): Promise<User | undefined> {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(user),
  // };

  // const response = await fetch(API_URL + "/verification", requestOptions);
  // if (!response.ok) {
  //   throw new Error("Network response was not ok");
  // }
  // return response.json();

  try {
    const response: AxiosResponse = await axios.post(
      API_URL + "/verification",
      user
    );

    if (response) {
      return response.data as User;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//An employee is registered in the system
export async function register(user: { email: string; password: string }) {
  console.log(user);
  try {
    await axios.post(API_URL + "/register", user);
  } catch (error) {
    console.error(" Error registering user", error);
  }

  // const requestOptions = {
  //   method: "POST",
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(user),
  // };

  // const response = await fetch(API_URL + "/register", requestOptions);
  // if (!response.ok) {
  //   throw new Error("Error registering user");
  // }
  // return response.json();
}
