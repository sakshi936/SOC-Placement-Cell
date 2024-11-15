import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    interested: z.enum(["Yes", "No"]),
    fullName: z.string().min(2).max(50),
    enrollment: z.string().min(12).max(12),
    university: z.string(),
    course: z.enum(["MCA", "IMCA"]),
    yoa: z.string(),
    yop: z.string(),
    dob: z.string().refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid Date",
    }),
    gender: z.enum(["Male", "Female", "Mentally Ill"]),
    category: z.enum(["General", "EWS", "OBC", "ST", "SC"]),
    speciallyAbled: z.enum(["Yes", "No"]),
    ssc: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid percentage"),
    hssc: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid percentage"),
    diplomaPercentage: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid percentage"),
    aggregateUGCGPA: z.string().regex(/^\d+(\.\d{1})?$/, "Enter a valid CGPA"),
    aggregateUGPercentage: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid percentage"),
    aggregatePGCGPA: z.string().regex(/^\d+(\.\d{1})?$/, "Enter a valid CGPA"),
    aggregatePGPercentage: z.string().regex(/^\d+(\.\d{1,2})?$/, "Enter a valid percentage"),
    UGCourse: z.string(),
    UGSpecialization: z.string(),
    UGyop: z.string(),
    activeBacklog: z.enum(["Yes", "No"]),
    numberOfBacklog: z.number(),
    backlogHistory: z.enum(["Yes", "No"]),
    diplomaInAnyCourse: z.string(),
    diplomayop: z.string(),
    diplomayoa: z.string(),
    diplomaInstitute: z.string(),
    mobileNo: z.string().min(10).max(10),
    altMobileNo: z.string().min(10).max(10),
    email: z.string(),
    sscSchoolName: z.string(),
    sscBoard: z.string(),
    sscyop: z.string(),
    hsscSchoolName: z.string(),
    hsscBoard: z.string(),
    hsscyop: z.string(),
    gapInStudies: z.enum(["Yes", "No"]),
    noOfGap: z.number(),
    ISemSGPA: z.string(),
    ISemATKT: z.number(),
    IISemSGPA: z.string(),
    IISemATKT: z.number(),
    IIISemSGPA: z.string(),
    IIISemATKT: z.number(),
    IVSemSGPA: z.string(),
    IVSemATKT: z.number(),
    VSemSGPA: z.string(),
    VSemATKT: z.number(),
    VISemSGPA: z.string(),
    VISemATKT: z.number(),
    VIISemSGPA: z.string(),
    VIISemATKT: z.number(),
    VIIISemSGPA: z.string(),
    VIIISemATKT: z.number(),
    currentSem: z.string(),
    localAddress: z.string(),
    localPincode: z.string(),
    permanentAddress: z.string(),
    hometown: z.string(),
    state: z.string(),
    permanentPincode: z.string(),
    fatherName: z.string(),
    fatherContactNo: z.string(),
    fatherOccupation: z.string(),
    motherName: z.string(),
    motherContactNo: z.string(),
    exp: z.string(),
    image: z.instanceof(File).refine(file => file.type.startsWith("image/"), {
        message: "Only image files are allowed",
    }),
    resume: z.instanceof(File).refine(file => file.type === "application/pdf", {
        message: "Only PDF files are allowed",
    }),
    affirmation: z.enum(["Yes", "No"])
})

export const ProfileForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            interested: "Yes",
            fullName: "",
            enrollment: "",
            university: "",
            course: "MCA",
            yoa: "",
            yop: "",
            dob: "",
            gender: "Male",
            category: "General",
            speciallyAbled: "Yes",
            ssc: "",
            hssc: "",
            diplomaPercentage: "",
            aggregateUGCGPA: "",
            aggregateUGPercentage: "",
            aggregatePGCGPA: "",
            aggregatePGPercentage: "",
            UGCourse: "",
            UGSpecialization: "",
            UGyop: "",
            activeBacklog: "No",
            numberOfBacklog: 0,
            backlogHistory: "No",
            diplomaInAnyCourse: "",
            diplomayop: "",
            diplomayoa: "",
            diplomaInstitute: "",
            mobileNo: "",
            altMobileNo: "",
            email: "",
            sscSchoolName: "",
            sscBoard: "",
            sscyop: "",
            hsscSchoolName: "",
            hsscBoard: "",
            hsscyop: "",
            gapInStudies: "No",
            noOfGap: 0,
            ISemSGPA: "",
            ISemATKT: 0,
            IISemSGPA: "",
            IISemATKT: 0,
            IIISemSGPA: "",
            IIISemATKT: 0,
            IVSemSGPA: "",
            IVSemATKT: 0,
            VSemSGPA: "",
            VSemATKT: 0,
            VISemSGPA: "",
            VISemATKT: 0,
            VIISemSGPA: "",
            VIISemATKT: 0,
            VIIISemSGPA: "",
            VIIISemATKT: 0,
            currentSem: "",
            localAddress: "",
            localPincode: "",
            permanentAddress: "",
            hometown: "",
            state: "",
            permanentPincode: "",
            fatherName: "",
            fatherContactNo: "",
            fatherOccupation: "",
            motherName: "",
            motherContactNo: "",
            exp: "",
            image: undefined,
            resume: undefined,
            affirmation: "Yes"
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <div className='py-8 px-96 bg-blue'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-200 p-7 rounded-lg" >
                    <FormField
                        control={form.control}
                        name="interested"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Are You Interested For Campus Placement For IPS Academy</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={field.value === "Yes"}
                                                onChange={() => field.onChange("Yes")}
                                            />{" "}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={field.value === "No"}
                                                onChange={() => field.onChange("No")}
                                            />{" "}
                                            No
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Full Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="enrollment"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enrollment No.</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Enrollment No." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="university"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>University Name</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="University Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="course"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Course</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="MCA"
                                                checked={field.value === "MCA"}
                                                onChange={() => field.onChange("MCA")}
                                            />{" "}
                                            MCA
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="IMCA"
                                                checked={field.value === "IMCA"}
                                                onChange={() => field.onChange("IMCA")}
                                            />{" "}
                                            IMCA
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="yoa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year of Admission</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Year of Admission" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="yop"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Year of Passing</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Year of Passing" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dob"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl>
                                    <Input required type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Male"
                                                checked={field.value === "Male"}
                                                onChange={() => field.onChange("Male")}
                                            />{" "}
                                            Male
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="Female"
                                                checked={field.value === "Female"}
                                                onChange={() => field.onChange("Female")}
                                            />{" "}
                                            Female
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="Mentally Ill"
                                                checked={field.value === "Mentally Ill"}
                                                onChange={() => field.onChange("Mentally Ill")}
                                            />{" "}
                                            Mentally Ill
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="General"
                                                checked={field.value === "General"}
                                                onChange={() => field.onChange("General")}
                                            />{" "}
                                            General
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="EWS"
                                                checked={field.value === "EWS"}
                                                onChange={() => field.onChange("EWS")}
                                            />{" "}
                                            EWS
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="OBC"
                                                checked={field.value === "OBC"}
                                                onChange={() => field.onChange("OBC")}
                                            />{" "}
                                            OBC
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="ST"
                                                checked={field.value === "ST"}
                                                onChange={() => field.onChange("ST")}
                                            />{" "}
                                            ST
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="SC"
                                                checked={field.value === "SC"}
                                                onChange={() => field.onChange("SC")}
                                            />{" "}
                                            SC
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="speciallyAbled"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Specially Abled or Handicapped</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={field.value === "Yes"}
                                                onChange={() => field.onChange("Yes")}
                                            />{" "}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={field.value === "No"}
                                                onChange={() => field.onChange("No")}
                                            />{" "}
                                            No
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ssc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>SSC (10th) %</FormLabel>
                                <FormControl>
                                    <Input required type="text" placeholder="Percentage (e.g., 85.5)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="hssc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>HSSC (12th) %</FormLabel>
                                <FormControl>
                                    <Input required type="text" placeholder="Percentage (e.g., 85.5)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="diplomaPercentage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Percentage in Diploma</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="Percentage (e.g., 85.5)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="aggregateUGCGPA"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Aggregate UG CGPA (Upto Last Semester)</FormLabel>
                                <FormControl>
                                    <Input required type="text" placeholder="CGPA (e.g., 8.5)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="aggregateUGPercentage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Aggregate UG Percentage %</FormLabel>
                                <FormControl>
                                    <Input required type="text" placeholder="Percentage (e.g., 85.5)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="aggregatePGCGPA"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Aggregate PG CGPA (Upto Last Semester)</FormLabel>
                                <FormControl>
                                    <Input required type="text" placeholder="CGPA (e.g., 8.5)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="aggregatePGPercentage"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Aggregate PG Percentage %</FormLabel>
                                <FormControl>
                                    <Input required type="text" placeholder="Percentage (e.g., 85.5)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="UGCourse"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>UG Course</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="UG Course" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="UGSpecialization"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>UG Specialization</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="UG Specialization" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="UGyop"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>UG Year of Passing</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="UG Year of Passing" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="activeBacklog"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Any Active Backlogs</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={field.value === "Yes"}
                                                onChange={() => field.onChange("Yes")}
                                            />{" "}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={field.value === "No"}
                                                onChange={() => field.onChange("No")}
                                            />{" "}
                                            No
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="numberOfBacklog"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number of Backlog</FormLabel>
                                <FormControl>
                                    <Input required type='number' placeholder="Number of Backlog (write 0 if none)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="backlogHistory"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Any Backlogs in History</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={field.value === "Yes"}
                                                onChange={() => field.onChange("Yes")}
                                            />{" "}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={field.value === "No"}
                                                onChange={() => field.onChange("No")}
                                            />{" "}
                                            No
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="diplomaInAnyCourse"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Diploma in Any Course</FormLabel>
                                <FormControl>
                                    <Input type='text' placeholder="Diploma in Any Course" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="diplomayop"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Diploma Year of Passing</FormLabel>
                                <FormControl>
                                    <Input type='text' placeholder="Diploma Year of Passing" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="diplomayoa"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Diploma Year of Admission</FormLabel>
                                <FormControl>
                                    <Input type='text' placeholder="Diploma Year of Admission" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="diplomaInstitute"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Diploma Institute Name</FormLabel>
                                <FormControl>
                                    <Input type='text' placeholder="Diploma Institute Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="mobileNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile No.</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Mobile No." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="altMobileNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alternate Mobile No.</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Alternate Mobile No." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input required type='email' placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sscSchoolName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>SSC (10th) School Name</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="SSC (10th) School Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sscBoard"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>SSC (10th) Board</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="SSC (10th) Board" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sscyop"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>SSC (10th) Year of Passing</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="SSC (10th) Year of Passing" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="hsscSchoolName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>HSSC (12th) School Name</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="HSSC (12th) School Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="hsscBoard"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>HSSC (12th) Board</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="HSSC (12th) Board" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="hsscyop"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>HSSC (12th) Year of Passing</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="HSSC (12th) Year of Passing" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gapInStudies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Any Gap in Studies</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={field.value === "Yes"}
                                                onChange={() => field.onChange("Yes")}
                                            />{" "}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={field.value === "No"}
                                                onChange={() => field.onChange("No")}
                                            />{" "}
                                            No
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="noOfGap"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Number of Gap Years</FormLabel>
                                <FormControl>
                                    <Input required type='number' placeholder="Number of Gap Years (write 0 if none)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="currentSem"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current Semester</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Current Semester" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="localAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Local Address</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Local Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="localPincode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pin Code (Local Address)</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Pin Code (Local Address)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="permanentAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Permanent Address</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Permanent Address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="hometown"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Home Town</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Home Town" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="State" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="permanentPincode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pin Code (Permanent Address)</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Pin Code (Permanent Address)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fatherName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Father&apos;s Name</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Father's Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fatherContactNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Father&apos;s Contact Number</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Father's Contact Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fatherOccupation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Father&apos;s Occupation</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Father's Occupation" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="motherName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mother&apos;s Name</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Mother's Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="motherContactNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mother&apos;s Contact Number</FormLabel>
                                <FormControl>
                                    <Input required type='text' placeholder="Mother's Contact Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="exp"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Any Previous Experience?:</FormLabel>
                                <FormControl>
                                    <Input type='text' placeholder="For example: Frontend Developer at TCS, Freelancing as Figma Designer, ..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Image</FormLabel>
                                <FormControl>
                                    <Input
                                        required
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => field.onChange(e.target.files?.[0] || null)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="resume"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload Resume (PDF only){" "}</FormLabel>
                                <FormControl>
                                    <input
                                        required
                                        type="file"
                                        accept="application/pdf"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file && file.type === "application/pdf") {
                                                field.onChange(file);
                                            } else {
                                                field.onChange(null);
                                                alert("Please upload a PDF file.");
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="affirmation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>This is to certify that the Information filled is true to my knowledge . If any information is found to be untrue .I shall bear the aftermath situation and disciplinary action resulting there in.</FormLabel>
                                <FormControl>
                                    <div className="space-y-2 space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Yes"
                                                checked={field.value === "Yes"}
                                                onChange={() => field.onChange("Yes")}
                                            />{" "}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                value="No"
                                                checked={field.value === "No"}
                                                onChange={() => field.onChange("No")}
                                            />{" "}
                                            No
                                        </label>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
