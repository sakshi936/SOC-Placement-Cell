"use client"
import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import { useState } from 'react';
import { PanelRightClose } from 'lucide-react';
import Image from 'next/image';
// import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SchoolIcon from '@mui/icons-material/School';
import { isLoggedIn } from '@/hooks/userExists';
import getStudentData from '@/hooks/getStudentData';

export const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<string | undefined>();
    const [userData, setUserData] = useState<UserData>();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        isLoggedIn().then((data) => {
            setIsUserLoggedIn(data);
        });
        const data = getStudentData();
        console.log(data);
        data.then(data => {
            setUserData(data);
        });
    }, []);
    const DrawerList = (
        <Box
            sx={{
                width: 250,
                position: "relative",
                height: "100%"
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <div className='bg-blue'>
                <Image
                    src="/SOC-Logo.png"
                    alt=""
                    height={100}
                    width={100}
                    className='w-full h-auto'
                />
            </div>
            <Divider />
            <List>
                <ListItemButton href="/#about" sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <PersonIcon />
                    <p>About Us</p>
                </ListItemButton>
                <ListItemButton href="/#records" sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <StarIcon />
                    <p>Top Students</p>
                </ListItemButton>
                <ListItemButton href="/#recruiters" sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <PersonSearchIcon />
                    <p>Recruiters</p>
                </ListItemButton>
                <ListItemButton href="/#alumni" sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <SchoolIcon />
                    <p>Alumni</p>
                </ListItemButton>
            </List>
            <div className='absolute bottom-0 w-full flex justify-center items-center py-7 bg-blue text-white'>
                {isUserLoggedIn ?
                    <ListItemButton href="/profile" sx={{ border: "", display: "flex", justifyContent: "center", gap: "1rem" }}>
                        <Image
                            src="/test.jpg"
                            alt="Profile Photo"
                            width={40}
                            height={40}
                            className="rounded-full aspect-square object-cover"
                        />
                        <div className="text-2xl font-semibold">
                        {
										userData?.name
											.toLowerCase()
											.split(' ')
											.map(word => word.charAt(0).toUpperCase() + word.slice(1))
											.join(' ')
									}
                        </div>
                    </ListItemButton>
                    : <ListItemButton href="/login" sx={{ border: "", display: "flex", justifyContent: "center", gap: "1rem" }}>
                        <LoginIcon />
                        <p>Login</p>
                    </ListItemButton>
                }
            </div>
        </Box>
    );

    return (
        <div className='fixed z-50 top-4 left-4'>
            <button
                onClick={toggleDrawer(true)}
                className='p-2 bg-blue rounded-xl'
            >
                <PanelRightClose color='white' />
            </button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}

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
    name: string;
    enrollmentNumber: string;
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