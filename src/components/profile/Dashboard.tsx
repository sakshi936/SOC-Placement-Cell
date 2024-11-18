import React from 'react'
// import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer';
import { useState, useEffect, ChangeEvent } from 'react';
import { SideBar } from '@/components/SideBar';

type UserProfile = {
    username: string;
    email: string;
    mobile: string;
    gender: string;
    semester: string;
    expertise: string;
    programmingLanguage: string;
    experience: string;
    resume: string;
  };

export const Dashboard = () => {
    const [user, setUser] = useState<UserProfile>({
        username: '',
        email: '',
        mobile: '',
        gender: '',
        semester: '',
        expertise: '',
        programmingLanguage: '',
        experience: '',
        resume: ''
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);

    useEffect(() => {
        // Fetch or initialize user data here
        const mockData: UserProfile = {
            username: 'John Doe',
            email: 'john@example.com',
            mobile: '1234567890',
            gender: 'Male',
            semester: '5th',
            expertise: 'Frontend Development',
            programmingLanguage: 'JavaScript, React',
            experience: '2 years',
            resume: 'link-to-resume.pdf'
        };
        setUser(mockData);
    }, []);

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    // Save profile updates
    const handleSave = () => {
        // Update user profile logic here (API call or database update)
        console.log('Updated User:', user);
        setIsEditing(false);
    };

    return (
        <div>
            <SideBar />
            <div className='h-screen flex justify-center items-center p-x'>
                <div className="container mx-auto p-4">
                    <h2 className="text-2xl font-semibold mb-4">User Dashboard</h2>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.keys(user).map((field) => (
                                <div key={field} className="mb-2">
                                    <label className="block text-gray-700 font-bold">
                                        {field.charAt(0).toUpperCase() + field.slice(1)}:
                                    </label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name={field}
                                            value={user[field as keyof UserProfile]}
                                            onChange={handleChange}
                                            className="w-full border px-2 py-1 rounded"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{user[field as keyof UserProfile]}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            {isEditing ? (
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={toggleEdit}
                                    className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
