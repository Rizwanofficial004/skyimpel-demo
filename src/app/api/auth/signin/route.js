import { NextResponse } from 'next/server';
import { getUser } from '../../../../utils/dbQueries/auth.queries';

export async function POST(req) {
  try {
    const userInfo = await req.json();
    const response = await getUser(userInfo);

    if (!userInfo || userInfo.password !== response?.password) {
      const responseData = {
        message: 'Incorrect email or password',
        status: true,
      };
      return NextResponse.json(responseData, {
        status: 403,
      });
    }

    delete response.password
    const responseData = {
      message: 'sigin successfully',
      status: true,
      userInfo: response
    };
    return NextResponse.json(responseData, {
      status: 200,
    });
  } catch (error) {
    console.log('error--', error);
    const errorResponse = {
      message: 'Error inserting data',
      status: false,
    };
    return NextResponse.json(errorResponse, {
      status: 500,
    });
  }
}
