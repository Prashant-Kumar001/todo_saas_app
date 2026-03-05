import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { userClient } from "@/lib/userClient";
import { AppDispatch } from "@/lib/store";
import { Action, ITodo } from "@/types";
import {  deleteTodo, toggleTodos } from "@/lib/store/slices/meSlice";
import { CiCircleCheck } from "react-icons/ci";
import { LuCircle, LuTrash2 } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const TodoItem = ({
  todo,
  setLoading,
}: {
  todo: ITodo;
  setLoading: (loading: boolean) => void;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [error, setError] = useState("");

  const toggleTodo = async (action: Action) => {
    if (!todo.id) {
      toast.error("Invalid todo");
      return;
    }

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
        toast.success(`Todo ${action.toLowerCase()} updated successfully`);
      } else {
        setError(res.error || "Failed to update");
      }
    } catch (e) {
      const error = e as Error;
      setError(error.message || "Failed to update");
    } finally {
      setLoading(false);
    }
  };

  const deleteTodoHandler = async () => {
    if (!todo.id) {
      toast.error("Invalid todo");
      return;
    }


    setLoading(true);

    try {
      const res = await userClient.deleteTodo(todo.id);
      if (res.success && res.data) {
        dispatch(deleteTodo(todo.id));
        toast.success("Todo deleted successfully");
      } else {
        setError(res.error || "Failed to delete");
      }
    } catch (e) {
      const error = e as Error;
      setError(error.message || "Failed to delete");
    } finally {
      setLoading(false);
    }
  };

  return (
    <li
      className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${
        todo.priority === "HIGH"
          ? "bg-rose-50 border-rose-200"
          : "bg-white border-slate-200"
      } ${todo.status === "DONE" ? "opacity-75" : ""}`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTodo("STATUS")}
          aria-label={`Mark todo as ${
            todo.status === "DONE" ? "PENDING" : "DONE"
          }`}
          className="focus:outline-none"
        >
          {todo.status === "DONE" ? (
            <CiCircleCheck size={24} className="text-green-600" />
          ) : (
            <LuCircle size={24} className="text-slate-400" />
          )}
        </button>
        <button
          onClick={() => toggleTodo("PRIORITY")}
          aria-label={`Mark todo as ${
            todo.priority === "HIGH" ? "LOW" : "HIGH"
          } priority`}
          className="focus:outline-none"
        >
          <FaStar
            size={22}
            className={
              todo.priority === "HIGH" ? "text-amber-400" : "text-slate-300"
            }
          />
        </button>
        <div className="flex flex-col">
          <div
            className={`text-sm font-medium ${
              todo.status === "DONE"
                ? "line-through text-slate-500"
                : "text-slate-800"
            }`}
          >
            {todo.title}
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <div className="text-xs  text-slate-500">
              created{" "}
              {formatDistanceToNow(new Date(todo.createdAt), {
                addSuffix: true,
              })}
            </div>
            {todo.completedAt && (
              <div className="text-xs text-slate-500">
                completed{" "}
                {formatDistanceToNow(new Date(todo.completedAt), {
                  addSuffix: true,
                })}
              </div>
            )}
            {todo.updatedAt > todo.createdAt && (
              <div className="text-xs text-slate-500">
                updated{" "}
                {formatDistanceToNow(new Date(todo.updatedAt), {
                  addSuffix: true,
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={deleteTodoHandler}
        aria-label="Delete todo"
        className="text-red-500 hover:text-red-600 hover:bg-red-50"
      >
        <LuTrash2 />
      </Button>
      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </li>
  );
};

export default TodoItem;