import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const supabase = await createClient();

  const { data } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log(data.user);
  if (data.user) {
    return NextResponse.json(
      {
        code: 200,
        message: "Logged In Successfully. Welcome back.",
      },
      {
        status: 200,
      }
    );
  } else {
    return NextResponse.json(
      {
        code: 401,
        message: "Email or Password is incorrect. Please try again.",
      },
      {
        status:401,
        statusText:"Invalid Cred"
      }
    );
  }
}
