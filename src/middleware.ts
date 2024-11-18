import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getStudentProfile } from './axiosApiRequest';

export async function middleware(request: NextRequest) {
  // Get the cookies from the request
  const studentId = request.cookies.get('student_id')?.value;

  if (!studentId) {
    // If the cookie is not present, redirect to the login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const response = await getStudentProfile(studentId);

  console.log(response);


  // If the cookie is present, proceed with the request
  return NextResponse.next();
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ['/profile/:path*'], // Apply middleware to the '/profile' route
};
