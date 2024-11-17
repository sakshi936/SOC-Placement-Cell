import axios from "axios";
import { loginData, StudentDetails } from "./types";

// backend api request to lgoin
export const reqLogin = async ({ email, password }: loginData) => {
	try {
		const response = await axios.post("/api/login", { email, password });
		// console.log("Response data:", response.data.student._id); // Debugging line
		return response.data.message; // This will return the whole response as it is .
	} catch (err: any) {
		return err.message; // Return the error message if the request fails
	}
};

// create student profile
export const createProfile = async (details: StudentDetails) => {
	try {
		const response = await axios.post("/api/student/", details);
		return response.data.message;
	} catch (error) {
		return (error as Error).message;
	}
};

//  show student profile   // id: reqLogin response.data.student._id
export const getStudentProfile = async (id: string) => {
	try {
		const response = await axios.post("/api/student/profile", id);
		return response.data.student;
	} catch (error) {
		return (error as Error).message;
	}
};
