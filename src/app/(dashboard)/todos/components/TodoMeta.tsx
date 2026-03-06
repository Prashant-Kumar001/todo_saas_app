import { ITodo } from "@/types";
import { formatDistanceToNow } from "date-fns";

export default function TodoMeta({ todo }: { todo: ITodo }) {
  return (
    <div className="flex flex-col min-w-0">
      <p
        className={`text-sm font-medium truncate
        ${
          todo.status === "DONE"
            ? "line-through text-slate-500"
            : "text-slate-800"
        }`}
      >
        {todo.title}
      </p>

      <div className="flex flex-wrap gap-3 text-xs text-slate-500 mt-1">
        <span>
          created{" "}
          {formatDistanceToNow(new Date(todo.createdAt), {
            addSuffix: true,
          })}
        </span>

        {todo.completedAt && (
          <span>
            completed{" "}
            {formatDistanceToNow(new Date(todo.completedAt), {
              addSuffix: true,
            })}
          </span>
        )}
      </div>
    </div>
  );
}
