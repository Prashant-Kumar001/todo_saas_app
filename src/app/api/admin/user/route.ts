import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json({ users, success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error, success: false });

    }

}
