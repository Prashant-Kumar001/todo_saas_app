import { auth } from "@clerk/nextjs/server";

export async function isAdmin() {
    const { userId } = await auth();
    return userId === process.env.ADMIN_USER_ID;
}