"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { toast } from "sonner";
import * as Yup from "yup";

export default function Login() {
	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email")
			.matches(/^[a-zA-Z0-9._%+-]+@ipsacademy\.org$/, "Email must be in the format email@ipsacademy.org")
			.required("Required"),

		password: Yup.string()
			.matches(/^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/, "Password must be in YYYY-MM-DD format")
			.required("Password is required"),
	});

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginSchema,
		onSubmit: (values) => {
			toast(`Successfully LoggedIn with Email: ${values.email}`);
		},
	});

	return (
		<section className="w-full h-screen flex justify-center items-center bg-blue-700">
			<div className="w-full flex  justify-center items-center  ">
				<form onSubmit={formik.handleSubmit} className=" w-1/3 p-10 bg-white/90  rounded-2xl flex flex-col justify-center items-center gap-y-6 ">
					<h1 className="text-2xl font-semibold mb-4">Student Login</h1>
					<div className="w-full">
						<Label htmlFor="email">Email</Label>
						<Input type="email" placeholder="email@ipsacademy.org" id="email" {...formik.getFieldProps("email")} className=" bg-gray-300 " />
						{formik.touched.email && formik.errors.email ? <div className="text-red-800">{formik.errors.email}</div> : null}
					</div>
					<div className="w-full">
						<Label htmlFor="password">Password</Label>
						<Input type="password" placeholder="DOB(YYYY-MM-DD)" {...formik.getFieldProps("password")} className=" bg-gray-300" />
						{formik.touched.password && formik.errors.password ? <div className="text-red-800">{formik.errors.password}</div> : null}
					</div>

					<Button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-800">
						Login
					</Button>
				</form>
			</div>
		</section>
	);
}
