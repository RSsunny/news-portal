import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const reqbody = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.users.findUnique({
      where: reqbody,
    });
    if (result.length === 0) {
      return NextResponse.json({ status: "fail" });
    } else {
      const token = await CreateToken();
    }
  } catch (error) {}
}
