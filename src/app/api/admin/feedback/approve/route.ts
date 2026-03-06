import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
    const { userId } = await auth();

    if (userId !== process.env.ADMIN_USER_ID) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 403 }
        );
    }

    const { id } = await req.json();

    const feedback = await prisma.feedback.update({
        where: { id },
        data: { approved: true },
    });

    return NextResponse.json(feedback);
}