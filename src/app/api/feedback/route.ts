import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { message, rating } = await req.json();

        if (!message) {
            return NextResponse.json(
                { error: "Feedback message required" },
                { status: 400 }
            );
        }

        const feedback = await prisma.feedback.create({
            data: {
                userId,
                message,
                rating,
            },
        });

        return NextResponse.json(feedback);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Server Error" }, { status: 500 });
    }
}