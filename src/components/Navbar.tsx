"use client";
import React, { useEffect, useState } from "react";
// import { Target } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Divider from "@mui/material/Divider";
import { isLoggedIn } from "@/hooks/userExists";
import getStudentData from "@/hooks/getStudentData";

export const Navbar = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState<string | undefined>();
	const [userData, setUserData] = useState<UserData>();

	useEffect(() => {
		const login = isLoggedIn();
		login.then((data) => {
			setIsUserLoggedIn(data);
		});
		const data = getStudentData();
		console.log(data);
		data.then((data) => {
			setUserData(data);
		});
	}, []);

	return (
		<nav className="flex justify-end items-center p-x py-2 bg-bgc text-white w-full gap-12">
			{/* <div>
				<Image src="/SOC-Logo.png" alt="" height={100} width={350} />
			</div> */}
			<div className="">
				<ul className="flex gap-4">
					<Link href="/">
						<li>
							<HomeIcon />
						</li>
					</Link>
					<Divider orientation="vertical" variant="fullWidth" flexItem className="bg-white" />
					<Link href="https://www.instagram.com/ips_placement_cell/" target="_blank">
						<li>
							<InstagramIcon />
						</li>
					</Link>
					<Divider orientation="vertical" variant="fullWidth" flexItem className="bg-white" />
					<Link href="https://www.linkedin.com/company/ipsacademy/" target="_blank">
						<li>
							<LinkedInIcon />
						</li>
					</Link>
					<Divider orientation="vertical" variant="fullWidth" flexItem className="bg-white" />
					<Link href="https://www.youtube.com/@indoreprofessionalstudiesa6935" target="_blank">
						<li>
							<YouTubeIcon />
						</li>
					</Link>
					<Divider orientation="vertical" variant="fullWidth" flexItem className="bg-white" />
					<Link href="tel:7470528480" target="_blank">
						<li>Contact Us</li>
					</Link>
					<Divider orientation="vertical" variant="fullWidth" flexItem className="bg-white" />
					<Link href="mail:princesinghchouhan7470@gmail.com" target="_blank">
						<li>Email</li>
					</Link>
					<Divider orientation="vertical" variant="fullWidth" flexItem className="bg-white" />
				</ul>
			</div>
			<div>
				{isUserLoggedIn ? (
					<Link href="/profile">
						<div className="flex gap-3 items-center justify-center">
							<Image src="/test.jpg" alt="Profile Photo" width={40} height={40} className="rounded-full aspect-square object-cover" />
							<div className="text-2xl font-semibold">
								{userData?.fullName
									// .toLowerCase()
									// .split(" ")
									// .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
									// .join(" ")
								}
							</div>
						</div>
					</Link>
				) : (
					<Link href="/login" className="">
						<div className="">Login</div>
					</Link>
				)}
			</div>
		</nav>
	);
};

interface UserData {
	ssc: {
		percentage: number;
		schoolName: string;
		board: string;
		yearOfPassing: number;
	};
	hssc: {
		percentage: number;
		schoolName: string;
		board: string;
		yearOfPassing: number;
	};
	diploma: {
		percentage: number;
		admissionYear: number;
		passOutYear: number;
		instituteName: string;
	};
	undergraduate: {
		universityName: string;
		course: string;
		aggregateCGPA: number;
		aggregatePercentage: number;
		specialization: string;
		yearOfAdmission: number;
		yearOfPassing: number;
	};
	postgraduate: {
		universityName: string;
		course: string;
		yearOfAdmission: number;
		yearOfPassing: number;
		aggregateCGPA: number;
		aggregatePercentage: number;
	};
	gaps: {
		hasGap: string;
		numberOfYears: number;
	};
	backlogs: {
		hasActiveBacklogs: string;
		totalActiveBacklogs: number;
		backlogHistory: string;
	};
	father: {
		name: string;
		contactNo: string;
		occupation: string;
	};
	mother: {
		name: string;
		contactNo: string;
	};
	_id: string;
	userId: string;
	fullName: string;
	enrollment: string;
	dob: string;
	gender: string;
	category: string;
	speciallyAbled: string;
	mobileNo: string;
	altMobileNo: string;
	email: string;
	localAddress: string;
	localPincode: string;
	permanentAddress: string;
	permanentPincode: string;
	hometown: string;
	state: string;
	passportPhoto: string;
	semesterDetails: {
		semester: number;
		sgpa: number;
		atkt: number;
		_id: string;
	}[];
	internship: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
