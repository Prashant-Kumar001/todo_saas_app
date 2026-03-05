import { NextResponse, NextRequest } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { Action, TodoPriority, TodoStatus } from "@/types";

export async function PUT(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { userId } = await auth();

        if (!userId)
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { id } = await context.params;

        if (!id || !id.trim())
            return NextResponse.json({ error: "Id is required" }, { status: 400 });

        const { status, priority, action } = (await req.json()) as {
            status?: TodoStatus;
            priority?: TodoPriority;
            action: Action;
        };

        if (action === "PRIORITY") {
            const todo = await prisma.todo.update({
                where: { id, userId },
                data: {
                    priority: priority === "HIGH" ? "LOW" : "HIGH",
                    updatedAt: new Date(),
                },
            });

            return NextResponse.json(todo, { status: 200 });
        }

        if (action === "STATUS") {
            const todo = await prisma.todo.update({
                where: { id, userId },
                data: {
                    status: status === "PENDING" ? "DONE" : "PENDING",
                    completedAt: status === "PENDING" ? new Date() : null,
                    updatedAt: new Date(),
                },
            });

            return NextResponse.json(todo, { status: 200 });
        }

        return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Failed to update todo" },
            { status: 500 }
        );
    }
}