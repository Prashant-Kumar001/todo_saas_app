import { prisma } from "@/lib/prisma";
import { DataTable } from "@/components/admin/DataTable";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Users</h2>

      <DataTable headers={["Email", "Created"]}>
        {users.map((user) => (
          <tr key={user.id} className="border-t">
            <td className="p-4">{user.email}</td>

            <td className="p-4">{new Date(user.createdAt).toDateString()}</td>
          </tr>
        ))}
      </DataTable>
    </div>
  );
}
