import axios from "axios";
import { loginData, StudentDetails } from "./types";

// backend api request to lgoin
export const reqLogin = async ({ email, password }: loginData) => {
	try {
		const response = await axios.post("/api/login", { email, password });
		// console.log("Response data:", response.data.student._id); // Debugging line
		return response.data; // This will return the whole response as it is .
	} catch (err: any) {
		return err.message; // Return the error message if the request fails
	}
};

// create student profile
export const createProfile = async (details: StudentDetails) => {
	try {
		console.log(details);
		const response = await axios.post("http://localhost:8000/api/student/", details);
		console.log("hit");
		return response.data.message;
	} catch (error) {
		return `Failed to request students profile creation with : ${(error as Error).message}`;
	}
};

//  show student profile   // id: reqLogin response.data.student._id
export const getStudentProfile = async (userId: string) => {
	try {
		const response = await axios.post(`http://localhost:8000/api/student/profile`, { userId });
		console.log(response);
		// console.log(response.status);
		return response.data.student;
	} catch (error) {
		// console.log(error);
		return error;
		// return `Failed to request student data with : ${(error as Error).message}`;
	}
};

// show all the students details

export const getAllStudentsProfiles = async () => {
	try {
		const response = await axios.get("/api/student/profiles");
		return response.data.students;
	} catch (error) {
		return `Failed to request students data with : ${(error as Error).message}`;
	}
};

// update edited student data  id will be student profile._id

export const updateProfile = async (id: string, editedData: StudentDetails) => {
	try {
		const response = await axios.put(`/api/student/update/${id}`, editedData);
	} catch (error) {
		return `Failed to request update student profile with : ${(error as Error).message}`;
	}
};
