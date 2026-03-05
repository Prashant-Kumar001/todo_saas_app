import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

const PLAN_LIMITS = {
    FREE: 5,
    PRO: Infinity,
};

async function getUserPlan() {
    const { has } = await auth();
    const hasUnlimitedTodos = has({ feature: "unlimited_todos" });

    if (hasUnlimitedTodos) {
        return "PRO";
    }

    return "FREE";
}

export async function POST(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const userInDB = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!userInDB) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        const { title, description } = await req.json();

        if (!title?.trim()) {
            return NextResponse.json(
                { error: "Title is required" },
                { status: 400 }
            );
        }

        const plan = await getUserPlan();
        const limit = PLAN_LIMITS[plan];

        const todoCount = await prisma.todo.count({
            where: { userId },
        });

        if (todoCount >= limit) {
            return NextResponse.json(
                {
                    error: `Todo limit reached (${limit}) for ${plan} plan. Upgrade to create more todos.`,
                },
                { status: 403 }
            );
        }

        // create todo
        const todo = await prisma.todo.create({
            data: {
                title: title.trim(),
                description,
                userId,
            },
        });

        return NextResponse.json(todo, { status: 201 });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { error: "Failed to create todo" },
            { status: 500 }
        );
    }
}