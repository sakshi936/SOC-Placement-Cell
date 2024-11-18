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
    enrollment: z.string().min(12).max(12),

    // Personal ====================

    fullName: z.string().min(2).max(50),
    dob: z.string().refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid Date",
    }),
    gender: z.enum(["Male", "Female", "Mentally Ill"]),
    mobileNo: z.string().min(10).max(10),
    altMobileNo: z.string().min(10).max(10),
    email: z.string(),
    category: z.enum(["General", "EWS", "OBC", "ST", "SC"]),
    speciallyAbled: z.enum(["Yes", "No"]),
    localAddress: z.string(),
    localPincode: z.string(),
    permanentAddress: z.string(),
    permanentPincode: z.string(),
    hometown: z.string(),
    state: z.string(),
    passportPhoto: z.string(),

    // SSC =====================

    SSCpercentage: z.string(),
    SSCschoolName: z.string(),
    SSCboard: z.string(),
    SSCyearOfPassing: z.string(),

    // HSSC =====================

    HSSCpercentage: z.string(),
    HSSCschoolName: z.string(),
    HSSCboard: z.string(),
    HSSCyearOfPassing: z.string(),

    // Undergraduation =====================

    UGuniversityName: z.string(),
    UGcourse: z.string(),
    UGspecialization: z.string(),
    UGaggregateCGPA: z.string(),
    UGaggregatePercentage: z.string(),
    UGyearOfAdmission: z.string(),
    UGyearOfPassing: z.string(),

    // Post Graduation =======================

    PGuniversityName: z.string(),
    PGcourse: z.string(),
    PGyearOfAdmission: z.string(),
    PGyearOfPassing: z.string(),
    PGaggregateCGPA: z.string(),
    PGaggregatePercentage: z.string(),

    // DIPLOMA ======================

    DIPLOMAcourse: z.string(),
    DIPLOMApercentage: z.string(),
    DIPLOMAadmissionYear: z.string(),
    DIPLOMApassOutYear: z.string(),
    DIPLOMAinstituteName: z.string(),

    // SEMESTER DETAILS ========================

    ISemSGPA: z.string(),
    ISemATKT: z.string(),
    IISemSGPA: z.string(),
    IISemATKT: z.string(),
    IIISemSGPA: z.string(),
    IIISemATKT: z.string(),
    IVSemSGPA: z.string(),
    IVSemATKT: z.string(),
    VSemSGPA: z.string(),
    VSemATKT: z.string(),
    VISemSGPA: z.string(),
    VISemATKT: z.string(),
    VIISemSGPA: z.string(),
    VIISemATKT: z.string(),
    VIIISemSGPA: z.string(),
    VIIISemATKT: z.string(),

    // Academic Gaps and Backlogs =============================

    hasGap: z.enum(["Yes", "No"]),
    numberOfGapYears: z.string(),
    hasActiveBacklogs: z.string(),
    totalActiveBacklogs: z.string(),
    backlogHistory: z.enum(["Yes", "No"]),

    // Family Details =============================

    fatherName: z.string(),
    fatherContactNo: z.string(),
    fatherOccupation: z.string(),
    motherName: z.string(),
    motherContactNo: z.string(),


    affirmation: z.enum(["Yes", "No"])
})

export const ProfileForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            interested: "Yes",
            enrollment: "",

            // Personal ====================

            fullName: "",
            dob: "",
            gender: "Male",
            mobileNo: "",
            altMobileNo: "",
            email: "",
            category: "General",
            speciallyAbled: "No",
            localAddress: "",
            localPincode: "",
            permanentAddress: "",
            permanentPincode: "",
            hometown: "",
            state: "",
            passportPhoto: "",

            // SSC =====================

            SSCpercentage: "",
            SSCschoolName: "",
            SSCboard: "",
            SSCyearOfPassing: "",

            // HSSC =====================

            HSSCpercentage: "",
            HSSCschoolName: "",
            HSSCboard: "",
            HSSCyearOfPassing: "",

            // Undergraduation =====================

            UGuniversityName: "",
            UGcourse: "",
            UGspecialization: "",
            UGaggregateCGPA: "",
            UGaggregatePercentage: "",
            UGyearOfAdmission: "",
            UGyearOfPassing: "",

            // Post Graduation =======================

            PGuniversityName: "",
            PGcourse: "",
            PGyearOfAdmission: "",
            PGyearOfPassing: "",
            PGaggregateCGPA: "",
            PGaggregatePercentage: "",

            // DIPLOMA ======================

            DIPLOMAcourse: "",
            DIPLOMApercentage: "",
            DIPLOMAadmissionYear: "",
            DIPLOMApassOutYear: "",
            DIPLOMAinstituteName: "",

            // SEMESTER DETAILS ========================

            ISemSGPA: "",
            ISemATKT: "",
            IISemSGPA: "",
            IISemATKT: "",
            IIISemSGPA: "",
            IIISemATKT: "",
            IVSemSGPA: "",
            IVSemATKT: "",
            VSemSGPA: "",
            VSemATKT: "",
            VISemSGPA: "",
            VISemATKT: "",
            VIISemSGPA: "",
            VIISemATKT: "",
            VIIISemSGPA: "",
            VIIISemATKT: "",

            // Academic Gaps and Backlogs =============================

            hasGap: "No",
            numberOfGapYears: "",
            hasActiveBacklogs: "",
            totalActiveBacklogs: "",
            backlogHistory: "No",

            // Family Details =============================

            fatherName: "",
            fatherContactNo: "",
            fatherOccupation: "",
            motherName: "",
            motherContactNo: "",


            affirmation: "Yes"
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <div className='py-8 px-32 bg-blue'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 gap-x-16 bg-gray-500 p-7 rounded-lg" >
                    <div className='border grid grid-cols-2 p-7 bg-gray-200 rounded-xl'>
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
                    </div>

                    {/* ===================== */}

                    <div className='p-7 bg-gray-200 rounded-xl grid grid-cols-2 gap-7'>
                        <h2 className='col-span-2 border-b-2 border-gray-400 text-3xl font-semibold text-gray-400'>Personal Information</h2>
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
                                <FormItem className='col-span-2'>
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
                        <div className='col-span-2 grid grid-cols-3 gap-7'>
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
                        </div>
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className='col-span-2'>
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
                                <FormItem className='col-span-2'>
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
                            name="passportPhoto"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Upload Photo</FormLabel>
                                    <FormControl>
                                        <Input
                                            required
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = () => field.onChange(reader.result as string);
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>


                    {/* Academic Information ===================== */}

                    <div className='p-7 bg-gray-200 rounded-xl grid grid-cols-2 gap-7'>
                        <h2 className='col-span-2 border-b-2 border-gray-400 text-3xl font-semibold text-gray-400'>Academic Information</h2>
                        <FormField
                            control={form.control}
                            name="SSCpercentage"
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
                            name="SSCschoolName"
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
                            name="SSCboard"
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
                            name="SSCyearOfPassing"
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
                            name="HSSCpercentage"
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
                            name="HSSCschoolName"
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
                            name="HSSCboard"
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
                            name="HSSCyearOfPassing"
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
                            name="UGuniversityName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>UG University Name</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="UG University Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="UGcourse"
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
                            name="UGspecialization"
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
                            name="UGaggregateCGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>UG Aggregate CGPA</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="UG Aggregate CGPA" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="UGaggregatePercentage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>UG Aggregrate Percentage</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="UG Aggregrate Percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="UGyearOfAdmission"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>UG Aggregrate Percentage</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="UG Aggregrate Percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="UGyearOfPassing"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>UG Aggregrate Percentage</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="UG Aggregrate Percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="PGuniversityName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PG University Name</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="PG University Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="PGcourse"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PG Course</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="PG Course" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="PGyearOfAdmission"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PG Aggregrate Percentage</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="PG Aggregrate Percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="PGyearOfPassing"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PG Aggregrate Percentage</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="PG Aggregrate Percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="PGaggregateCGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PG Aggregate CGPA</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="PG Aggregate CGPA" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="PGaggregatePercentage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>PG Aggregrate Percentage</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="PG Aggregrate Percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="DIPLOMAcourse"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Diploma Course</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="Diploma Course" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="DIPLOMApercentage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Diploma Percentage</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="Diploma Percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="DIPLOMAadmissionYear"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Diploma Admission Year</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="Diploma Admission Year" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="DIPLOMApassOutYear"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Diploma Pass Out Year</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="Diploma Pass Out Year" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="DIPLOMAinstituteName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Diploma Institute Name</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="Diploma Pass Out Year" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Semester ===================== */}

                    <div className='p-7 bg-gray-200 rounded-xl grid grid-cols-2 gap-7'>
                        <h2 className='col-span-2 border-b-2 border-gray-400 text-3xl font-semibold text-gray-400'>Semester-wise Performance</h2>
                        <FormField
                            control={form.control}
                            name="ISemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ISemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IISemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Second Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IISemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Second Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IIISemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Third Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IIISemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Third Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IVSemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fourth Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IVSemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fourth Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VSemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fifth Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VSemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Fifth Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VISemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sixth Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VISemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sixth Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VIISemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Seventh Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VIISemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Seventh Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VIIISemSGPA"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Eighth Semester SGPA</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="SGPA (e.g., 8.5)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="VIIISemATKT"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Eighth Semester ATKT</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Number or ATKTs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Academic Gaps and Backlogs ===================== */}

                    <div className='p-7 bg-gray-200 rounded-xl grid grid-cols-2 gap-7'>
                        <h2 className='col-span-2 border-b-2 border-gray-400 text-3xl font-semibold text-gray-400'>Academic Gaps and Backlogs</h2>
                        <FormField
                            control={form.control}
                            name="hasGap"
                            render={({ field }) => (
                                <FormItem className='col-span-2'>
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
                            name="numberOfGapYears"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Number of Gap Years</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="Number of Gap Years" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="hasActiveBacklogs"
                            render={({ field }) => (
                                <FormItem className='col-span-2'>
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
                            name="totalActiveBacklogs"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Total Active Backlogs</FormLabel>
                                    <FormControl>
                                        <Input required type='text' placeholder="Total Active Backlogs" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="backlogHistory"
                            render={({ field }) => (
                                <FormItem className='col-span-2'>
                                    <FormLabel>Any Backlogs in Past</FormLabel>
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
                    </div>

                    {/* Family Details ===================== */}

                    <div className='p-7 bg-gray-200 rounded-xl grid grid-cols-2 gap-7'>
                        <h2 className='col-span-2 border-b-2 border-gray-400 text-3xl font-semibold text-gray-400'>Family Details</h2>
                        <div className='col-span-2 grid grid-cols-3 gap-7'>
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
                        </div>
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
                    </div>

                    {/* Affirmation ===================== */}

                    <div className='p-7 bg-gray-200 rounded-xl grid grid-cols-1 gap-7'>
                        <h2 className='col-span-2 border-b-2 border-gray-400 text-3xl font-semibold text-gray-400'>Affirmation</h2>
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
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
