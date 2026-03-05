import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { userId } = await auth();

        if (!userId)
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { id } = await context.params;

        const todo = await prisma.todo.deleteMany({
            where: {
                id,
                userId,
            },
        });

        if (todo.count === 0)
            return NextResponse.json({ error: "Todo not found" }, { status: 404 });

        return NextResponse.json(
            { message: "Todo deleted", success: true },
            { status: 200 }
        );
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Failed to delete todo" },
            { status: 500 }
        );
    }
}