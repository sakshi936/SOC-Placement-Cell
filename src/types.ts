// student login details type
export interface loginData {
	email: string;
	password: string;
}

//  student profile details type
export interface StudentDetails {
	userId: string; // id generated by MongoDB while registering the student for login (response.data.student._id)

	interested: string;
	enrollment: string;

	// Personal Information
	fullName: string;
	dob: string; // Date of Birth (DD/MM/YY)
	gender: string;
	mobileNo: string;
	altMobileNo: string;
	email: string;
	category: string;
	speciallyAbled: string;
	localAddress: string;
	localPincode: string;
	permanentAddress: string;
	permanentPincode: string;
	hometown: string;
	state: string;
	passportPhoto: string; // URL or base64 encoded image

	// current university details
	universityName: string;
	course: string;
	current_semester: string;

	// Academic Information
	ssc: {
		percentage: string;
		schoolName: string;
		board: string;
		yearOfPassing: string;
	};
	hssc: {
		percentage: string;
		schoolName: string;
		board: string;
		yearOfPassing: string;
	};
	diploma: {
		course: string;
		percentage: string;
		admissionYear: string;
		passOutYear: string;
		instituteName: string;
	};
	undergraduate: {
		universityName: string;
		course: string;
		specialization: string;
		aggregateCGPA: string;
		aggregatePercentage: string;
		yearOfAdmission: string;
		yearOfPassing: string;
	};
	postgraduate: {
		universityName: string;
		course: string;
		yearOfAdmission: string;
		yearOfPassing: string;
		aggregateCGPA: string;
		aggregatePercentage: string;
	};
	semesterDetails: Array<{
		semester: string;
		sgpa: string;
		atkt: string; // Number of ATKT in the semester
	}>;

	// Academic Gaps and Backlogs
	gaps: {
		hasGap: string;
		numberOfYears: string;
	};
	backlogs: {
		hasActiveBacklogs: string;
		totalActiveBacklogs: string;
		backlogHistory: string;
	};

	// Family Details
	father: {
		name: string;
		contactNo: string;
		occupation: string;
	};
	mother: {
		name: string;
		contactNo: string;
	};

	// Career and Experience
	internship: string;
}
