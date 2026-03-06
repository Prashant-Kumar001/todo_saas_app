"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

import { userClient } from "@/lib/userClient";
import { AppDispatch } from "@/lib/store";
import { Action, ITodo } from "@/types";
import { deleteTodo, toggleTodos } from "@/lib/store/slices/meSlice";

import TodoCheckbox from "./TodoCheckbox";
import TodoPriority from "./TodoPriority";
import TodoMeta from "./TodoMeta";
import TodoActions from "./TodoActions";

export default function TodoItem({
  todo,
  setLoading,
}: {
  todo: ITodo;
  setLoading: (loading: boolean) => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState("");

  const toggleTodo = async (action: Action) => {
    if (!todo.id) return toast.error("Invalid todo");

    setLoading(true);

    try {
      const res = await userClient.toggleTodo(
        todo.id,
        todo.status,
        todo.priority,
        action,
      );

      if (res.success && res.data) {
        dispatch(toggleTodos(res.data));
      } else {
        setError(res.error || "Failed to update");
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const deleteHandler = async () => {
    if (!todo.id) return toast.error("Invalid todo");

    setLoading(true);

    try {
      const res = await userClient.deleteTodo(todo.id);

      if (res.success) {
        dispatch(deleteTodo(todo.id));
        toast.success("Todo deleted");
      } else {
        setError(res.error || "Delete failed");
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <li
      className={`group flex items-start justify-between gap-4 p-4 rounded-xl border transition
      ${todo.priority === "HIGH" ? "bg-rose-50 border-rose-200" : "bg-white"}
      ${todo.status === "DONE" ? "opacity-70" : ""}
    `}
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <TodoCheckbox
          status={todo.status}
          onToggle={() => toggleTodo("STATUS")}
        />

        <TodoPriority
          priority={todo.priority}
          onToggle={() => toggleTodo("PRIORITY")}
        />

        <TodoMeta todo={todo} />
      </div>

      <TodoActions onDelete={deleteHandler} />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </li>
  );
}
