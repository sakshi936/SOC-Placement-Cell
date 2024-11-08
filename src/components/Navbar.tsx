import React from 'react'
import { Target } from 'lucide-react';
import { Button } from "@/components/ui/button"

export const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-x py-4 bg-blue text-white'>
            <div>
                <Target size={48} />
            </div>
            <div className=''>
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Recourds</li>
                    <li>Recruiters</li>
                    <li>Allumani</li>
                </ul>
            </div>
            <div>
                <Button className='bg-white text-black'>Login</Button>
            </div>
        </nav>
    )
}
