import { prisma } from "@/lib/prisma";
import DeleteTodoButton from "@/components/admin/DeleteTodoButton";
import ToggleStatusButton from "@/components/admin/ToggleStatusButton";

export default async function AdminTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 50,
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Todos Management</h1>
        <p className="text-gray-500">Monitor and manage all user todos</p>
      </div>

      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 text-left text-sm">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">User</th>
              <th className="p-4">Priority</th>
              <th className="p-4">Status</th>
              <th className="p-4">Created</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="border-t hover:bg-gray-50">
                {/* Title */}
                <td className="p-4 font-medium">{todo.title}</td>

                {/* User */}
                <td className="p-4 text-gray-500">{todo.userId}</td>

                {/* Priority */}
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full
                    ${
                      todo.priority === "HIGH"
                        ? "bg-red-100 text-red-600"
                        : todo.priority === "LOW"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {todo.priority}
                  </span>
                </td>
                <td className="p-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full
                    ${todo.status == "DONE" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                  >
                    {todo.status}
                  </span>
                </td>

                <td className="p-4 text-gray-500">
                  {new Date(todo.createdAt).toDateString()}
                </td>

                <td className="p-4 flex gap-2">
                  <ToggleStatusButton id={todo.id} status={todo.status} />

                  <DeleteTodoButton id={todo.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
