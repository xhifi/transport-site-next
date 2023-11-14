import { SendMail } from "@/services/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, message, phone, option } = await request.json();

  if (!name || !message || !phone || !option) {
    return new Response(null, {
      status: 500,
      statusText: "Provide name, email, phone number and message properly.",
    });
  }
  const finalMessage = `
  <b style="color: crimson">Name:</b> ${name}<br />
  <b style="color: crimson">Phone:</b> ${phone}<br />
  <b style="color: crimson">Email: </b> <a href="mailto:${email}">${email}</a><br />
  <b style="color: crimson">Mode of Transport:</b> ${option}<br />
  <hr />
  <span style="color: crimson"><b>Message:</b></span> ${message}`;
  const mailed = await SendMail({ email, subject: `Website Submission - ${name} - ${phone}`, html: finalMessage });

  console.log(mailed);

  return NextResponse.json({ mailed });
}
