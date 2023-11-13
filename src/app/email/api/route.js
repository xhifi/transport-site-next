import { SendMail } from "@/services/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, subject, text } = await request.json();
  // console.log(email, subject, text);

  const mailed = await SendMail(email, subject, text);

  return NextResponse.json({ mailed });
}
