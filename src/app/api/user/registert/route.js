import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqbody = await req.json();
    reqbody.otp = "0";
    const prisma = new PrismaClient();
    const result = await prisma.users.create({
      data: reqbody,
    });
    return NextResponse.json({ status: true });
  } catch (error) {
    return NextResponse.json({ status: false, data: error });
  }
}
