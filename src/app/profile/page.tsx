"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Dashboard } from '@/components/profile/Dashboard';
import { useRouter } from 'next/navigation';
import { ProfileForm } from '@/components/profile/ProfileForm';

export default function Page() {
  const [userExists, setUserExists] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!sessionStorage.getItem("login")) {
      router.push('/login');
    }
    setUserExists(true)
  }, [router]);

  if (userExists) {
    return (
      <>
        <Dashboard />
      </>
    )
  }

  return (
    <>
      <ProfileForm />
    </>
  )
}
