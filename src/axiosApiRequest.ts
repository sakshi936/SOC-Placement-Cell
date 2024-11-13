import axios from "axios";

interface loginData {
	email: string;
	password: string;
}

export const reqLogin = async ({ email, password }: loginData) => {
	try {
		const response = await axios.post("/api/login", { email, password });
		// console.log("Response data:", response.data.student.name); // Debugging line
		return response.data.message; // This will return the response data directly
	} catch (err: any) {
		return err.message; // Return the error message if the request fails
	}
};
