"use server";

import { cookies } from "next/headers";

export default async function userExists() {
  const cookieStore = cookies(); // `cookies()` does not need `await`
  const userExist = cookieStore.get('userExist')?.value;

  return userExist || null; // Return `null` if the cookie is not found
}