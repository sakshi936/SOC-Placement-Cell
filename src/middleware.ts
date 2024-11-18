import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getStudentProfile } from './axiosApiRequest';

export async function middleware(request: NextRequest) {
  // Create a NextResponse object
  const res = NextResponse.next();

  // Retrieve the 'student_id' cookie from the request
  const studentId = request.cookies.get('student_id')?.value;

  // If the 'student_id' cookie is not present, redirect to the login page
  if (!studentId) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    // Fetch the student profile using the provided student ID
    const response = await getStudentProfile(studentId);

    if (response.status === 404) {
      // Set a cookie indicating the user does not exist
      res.cookies.set('userExist', 'false');
      return res;
    }

    // Set a cookie indicating the user exists
    res.cookies.set('userExist', 'true');
    return res;
  } catch (error) {
    // Log the error and handle it appropriately
    console.error('Error fetching student profile:', error);
    return NextResponse.redirect(new URL('/error', request.url)); // Redirect to a generic error page
  }
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ['/profile/:path*'], // Apply middleware to all subpaths under '/profile'
};
