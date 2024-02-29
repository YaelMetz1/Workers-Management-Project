import axios from "axios";

const API_URL = "http://localhost:4000/api";

export async function postNewUser(user: {
  email: string;
  password: string;
  fullName: string;
}) {
  try {
    await axios.post(API_URL + "/users", user);
  } catch (error) {
    console.error(" Error posting user", error);
  }
}
