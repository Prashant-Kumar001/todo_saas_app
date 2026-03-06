import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

    

    const testimonials = await prisma.feedback.findMany({
        where: {
            approved: true,
        },
        take: 4,
    });

    return NextResponse.json(testimonials);
}