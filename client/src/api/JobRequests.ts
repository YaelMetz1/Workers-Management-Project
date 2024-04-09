import axios, { AxiosResponse } from "axios";
import Job from "../types/Job";

const API_URL = "http://localhost:4000/api/job";

export async function getJob(id: number): Promise<Job | undefined> {
  try {
    const response = await axios.get(API_URL + `/getJob/${id}`);

    if (response) {
      return response.data as Job;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getAllJobs() {
  try {
    const response = await axios.get(API_URL + "/getJobs");

    if (response) {
      return response.data as Job[];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function addJob(job: Partial<Job>): Promise<Job | undefined> {
  try {
    const response = await axios.post(
      API_URL + "/addJob",
      job
    );
    if (response) {
      return response.data as Job;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function updateJob(job: Partial<Job>): Promise<Job | undefined> {
  try {
    const response: AxiosResponse = await axios.patch(
      API_URL + "/updateJob",
      job
    );

    if (response) {
      return response.data as Job;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function deleteJob(id: number) {
  try {
    await axios.delete(API_URL + `/deleteJob/${id}`);
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}
