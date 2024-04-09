import axios, { AxiosResponse } from "axios";
import Employee from "../types/Employee";

const API_URL = "http://localhost:4000/api/admin";

export async function getAllEmployees() {
  try {
    const response = await axios.get(API_URL + "/getEmployees");

    if (response) {
      return response.data as Employee[];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function addEmployee(employee: Partial<Employee>): Promise<Employee | undefined> {
  try {
    const response = await axios.post(
      API_URL + "/addEmployee",
      employee
    );
    if (response) {
      return response.data as Employee;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function updateEmployee(employee: Partial<Employee>): Promise<Employee | undefined> {
  try {
    const response: AxiosResponse = await axios.patch(
      API_URL + "/updateEmployee",
      employee
    );

    if (response) {
      return response.data as Employee;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function deleteEmployee(id: number) {
  try {
    await axios.delete(API_URL + `/deleteEmployee/${id}`);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}
