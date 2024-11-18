"use client";

import React, { useEffect, useState } from 'react';
import { Dashboard } from '@/components/profile/Dashboard';
import { useRouter } from 'next/navigation';
import { ProfileForm } from '@/components/profile/ProfileForm';
import userExists from '@/hooks/userExists';

export default function Page() {
  const [userExistsState, setUserExistsState] = useState<boolean | null>(null); // Handle the case where `userExists` might be null
  const router = useRouter();

  useEffect(() => {
    const checkLoginAndUserExists = async () => {
      if (!sessionStorage.getItem("login")) {
        router.push('/login');
        return;
      }

      try {
        const exists = await userExists(); // Call the async function
        setUserExistsState(exists === 'true'); // Update state based on cookie value
      } catch (error) {
        console.error('Error checking user existence:', error);
      }
    };

    checkLoginAndUserExists();
  }, [router]);

  if (userExistsState === null) {
    return <div className='h-screen w-screen flex justify-center items-center'>
      <div className='loader'></div>
    </div>;
  }

  if (userExistsState) {
    return <Dashboard />;
  }

  return <ProfileForm />;
}
