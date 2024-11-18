"use client"
import React from 'react'
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

export const SideBar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

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
                <ListItemButton href="/login" sx={{ border: "", display: "flex", justifyContent: "center", gap: "1rem" }}>
                    <LoginIcon />
                    <p>Login</p>
                </ListItemButton>
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
