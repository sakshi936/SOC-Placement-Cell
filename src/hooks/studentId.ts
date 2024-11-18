"use server";

import { cookies } from "next/headers";

export default async function studentId() {
  const cookieStore = cookies();
  const id = cookieStore.get('student_id')?.value;

  return id;
}
