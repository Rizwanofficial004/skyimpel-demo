import { NextResponse } from 'next/server';
import { insertUser, checkExistingUser } from '../../../../utils/dbQueries/auth.queries';

export async function POST(req) {
  try {
    const userInfo = await req.json();
    
    if (userInfo.step === 1) {
      const isUserExist = await checkExistingUser(userInfo.email)
      if (isUserExist) {
        const responseData = {
          message: 'This email is already registered',
          status: true
        };
        return NextResponse.json(responseData, {
          status: 409,
        });
      }
    }

    const response = await insertUser(userInfo);

    const responseData = {
      message: 'Added successfully',
      status: true,
      userInfo: response[0]
    };
    return NextResponse.json(responseData, {
      status: 201,
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
