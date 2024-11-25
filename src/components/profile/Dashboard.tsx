import React, { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";
import getStudentData from "@/hooks/getStudentData";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";

// type SemesterDetails = {
//     semester: number;
//     sgpa: number;
//     atkt: number;
// };

// type UserProfile = {
//     username: string;
//     email: string;
//     mobile: string;
//     gender: string;
//     category: string;
//     speciallyAbled: string;
//     localAddress: string;
//     localPincode: string;
//     permanentAddress: string;
//     permanentPincode: string;
//     hometown: string;
//     state: string;
//     passportPhoto: string;
//     semesterDetails: SemesterDetails[];
//     internship: string;
// };

export const Dashboard = () => {
	// const [user, setUser] = useState<UserProfile>({
	//     username: '',
	//     email: '',
	//     mobile: '',
	//     gender: '',
	//     category: '',
	//     speciallyAbled: '',
	//     localAddress: '',
	//     localPincode: '',
	//     permanentAddress: '',
	//     permanentPincode: '',
	//     hometown: '',
	//     state: '',
	//     passportPhoto: '',
	//     semesterDetails: [],
	//     internship: ''
	// });
	// const [isEditing, setIsEditing] = useState<boolean>(false);

	const [userData, setUserData] = useState<UserData>();

	useEffect(() => {
		const data = getStudentData(); // Fetching real data if available
		console.log(data);
		data.then((data) => {
			setUserData(data);
		});
		// Mock data (this can be replaced by real fetched data)
		// const mockData: UserProfile = {
		//     username: 'Prince',
		//     email: 'chad@gmail.com',
		//     mobile: '7458963210',
		//     gender: 'Male',
		//     category: 'General',
		//     speciallyAbled: 'No',
		//     localAddress: 'Mannat',
		//     localPincode: '12340',
		//     permanentAddress: 'Dhar',
		//     permanentPincode: '454001',
		//     hometown: 'Dhar',
		//     state: 'MP',
		//     passportPhoto: 'https://example.com/passport.jpg',
		//     semesterDetails: [
		//         { semester: 1, sgpa: 10, atkt: 0 },
		//         { semester: 2, sgpa: 9, atkt: 0 },
		//         { semester: 3, sgpa: 9.5, atkt: 0 }
		//     ],
		//     internship: 'Software Development Internship'
		// };
		// setUser(mockData);
	}, []);

	// Handle input change
	// const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
	//     const { name, value } = e.target;
	//     setUser({ ...user, [name]: value });
	// };

	// // Toggle edit mode
	// const toggleEdit = () => {
	//     setIsEditing(!isEditing);
	// };

	// // Save profile updates
	// const handleSave = () => {
	//     console.log('Updated User:', user);
	//     setIsEditing(false);
	// };

	return (
		<div>
			<Navbar />
			<SideBar />
			<div className="container mx-auto p-4">
				<div className="flex justify-center items-center mb-8">
					{userData?.passportPhoto ? (
						<Image src="/test.jpg" alt="Profile Photo" width={150} height={150} className="rounded-full aspect-square object-cover" />
					) : (
						<Image src="/test.jpg" alt="Profile Photo" width={150} height={150} className="rounded-full aspect-square object-cover" />
					)}
				</div>
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-2">{userData?.fullName || "Name not available"}</h1>
					<p className="text-xl text-gray-600">{userData?.enrollment || "Enrollment number not available"}</p>
					<p className="text-md text-gray-400">{userData?.email || "Email not available"}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
					{/* Basic Information */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-4">Basic Information</h2>
						<ul className="space-y-2">
							<li>
								<strong>Date of Birth:</strong> {userData?.dob}
							</li>
							<li>
								<strong>Gender:</strong> {userData?.gender}
							</li>
							<li>
								<strong>Category:</strong> {userData?.category}
							</li>
							<li>
								<strong>Hometown:</strong> {userData?.hometown}
							</li>
							<li>
								<strong>State:</strong> {userData?.state}
							</li>
						</ul>
					</div>

					{/* Academic Details */}
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-xl font-semibold mb-4">Academic Details</h2>
						<h3 className="text-lg font-medium">SSC:</h3>
						<ul className="space-y-2">
							<li>Percentage: {userData?.ssc.percentage}%</li>
							<li>School: {userData?.ssc.schoolName}</li>
							<li>Board: {userData?.ssc.board}</li>
							<li>Year of Passing: {userData?.ssc.yearOfPassing}</li>
						</ul>

						<h3 className="text-lg font-medium mt-4">HSSC:</h3>
						<ul className="space-y-2">
							<li>Percentage: {userData?.hssc.percentage}%</li>
							<li>School: {userData?.hssc.schoolName}</li>
							<li>Board: {userData?.hssc.board}</li>
							<li>Year of Passing: {userData?.hssc.yearOfPassing}</li>
						</ul>

						<h3 className="text-lg font-medium mt-4">Undergraduate:</h3>
						<ul className="space-y-2">
							<li>University: {userData?.undergraduate.universityName}</li>
							<li>Course: {userData?.undergraduate.course}</li>
							<li>Aggregate Percentage: {userData?.undergraduate.aggregatePercentage}%</li>
							<li>Specialization: {userData?.undergraduate.specialization}</li>
							<li>Year of Admission: {userData?.undergraduate.yearOfAdmission}</li>
							<li>Year of Passing: {userData?.undergraduate.yearOfPassing}</li>
						</ul>
					</div>
				</div>

				<div className="mt-8">
					<h2 className="text-xl font-semibold mb-4">Backlogs & Gaps</h2>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<ul className="space-y-2">
							<li>
								<strong>Has Gap:</strong> {userData?.gaps.hasGap}
							</li>
							<li>
								<strong>Number of Years:</strong> {userData?.gaps.numberOfYears}
							</li>
							<li>
								<strong>Active Backlogs:</strong> {userData?.backlogs.hasActiveBacklogs}
							</li>
							<li>
								<strong>Total Active Backlogs:</strong> {userData?.backlogs.totalActiveBacklogs}
							</li>
						</ul>
					</div>
				</div>

				{/* Family Information */}
				<div className="mt-8">
					<h2 className="text-xl font-semibold mb-4">Family Information</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-lg font-medium">Fathers Info:</h3>
							<ul className="space-y-2">
								<li>Name: {userData?.father.name}</li>
								<li>Contact: {userData?.father.contactNo}</li>
								<li>Occupation: {userData?.father.occupation}</li>
							</ul>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-lg font-medium">Mothers Info:</h3>
							<ul className="space-y-2">
								<li>Name: {userData?.mother.name}</li>
								<li>Contact: {userData?.mother.contactNo}</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Internship */}
				<div className="mt-8">
					<h2 className="text-xl font-semibold mb-4">Internship</h2>
					<div className="bg-white p-6 rounded-lg shadow-md">
						<p>{userData?.internship}</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
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
