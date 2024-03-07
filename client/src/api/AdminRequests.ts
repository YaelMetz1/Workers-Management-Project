import axios, { AxiosResponse } from "axios";
import User from "../types/User";

const API_URL = "http://localhost:4000/api/admin";

export async function getAllUsers(){
  try {
    const response: AxiosResponse = await axios.get(API_URL + "/getEmployees");

    if (response) {
      return response.data as User[];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function addEmployee(employee: { name: string, email: string; phoneNumber: string, jobTitle: string, salary: number }){
  try {
    const response: AxiosResponse = await axios.post(API_URL + "/addEmployee", employee);

    if (response) {
      return;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function updateEmployee(employee: { name: string, email: string; phoneNumber: string, jobTitle: string, salary: number }){
  try {
    const response: AxiosResponse = await axios.patch(API_URL + "/updateEmployee", employee);

    if (response) {
      return;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function deleteEmployee(id: number){

   await axios.delete(API_URL + `/deleteEmployee/${id}`)
    // .then(()=>{
    // })
    // .catch(error=>{

    // })
  }