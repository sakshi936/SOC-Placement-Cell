"use server";
import { cookies } from "next/headers";
import { getStudentProfile } from '@/axiosApiRequest';

export default async function getStudentData() {
    const cookieStore = cookies();
    const id = cookieStore.get('student_id')?.value;

    try {
        if (id) {
            const response = await getStudentProfile(id);
            return response;
        }
    } catch (error) {
        console.error('Error Getting Student Data:', error);
        return error;
    }

    return;
}
