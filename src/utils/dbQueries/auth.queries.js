import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

const DATABASE_URL = process.env.DATABASE_URL;

// Function to handle database operations
export async function insertUser({id, step, fullName, email, password, phoneNo, address, country, bankVerificationNo}) {
  const sql = neon(DATABASE_URL);
  switch(step) {
    case 1:
      return await sql`
      INSERT INTO users (full_name, email, password)
      VALUES (${fullName}, ${email}, ${password})
      RETURNING *`;
    case 2:
      return await sql`
      UPDATE users
      SET phone_no = ${phoneNo}, address = ${address}, country = ${country}, current_step = ${step}
      WHERE id = ${id}
      RETURNING *`;
    case 3:
      return await sql`
      UPDATE users
      SET bank_no = ${bankVerificationNo}, current_step = ${step}
      WHERE id = ${id}
      RETURNING *`;
  }

}

export async function checkExistingUser(email) {
  const sql = neon(DATABASE_URL);
  const result = await sql`SELECT EXISTS (SELECT 1 FROM users WHERE email = ${email})`;
  return result[0].exists
}

export async function getUser({email}) {
  const sql = neon(DATABASE_URL);
  const result = await sql`SELECT * FROM users WHERE email = ${email} LIMIT 1`;
  return result[0]
}
