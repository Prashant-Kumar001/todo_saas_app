"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";
import { LuPlus } from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { userClient } from "@/lib/userClient";
import { AppDispatch, RootState } from "@/lib/store";
import { addTodos } from "@/lib/store/slices/meSlice";
import LoadingOverlay from "@/components/ui/loader";
import Loading from './components/loading'
import TodoItem from "./components/todoItem";
import { useUser } from "@clerk/nextjs";



export default function TodosPage() {
  const { user } = useUser();
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    todos,
    loading: todosLoading,
  } = useSelector((state: RootState) => state.dashboard);
  const dispatch = useDispatch<AppDispatch>();

const billing = user?.publicMetadata?.subscription;
  console.log("user", user?.publicMetadata)
  console.log("billing", billing)

  const addTodo = async () => {
    if (!newTodo.trim()) {
      toast.error("Todo cannot be empty");
      return;
    }
    if (newTodo.length > 100) {
      toast.error("Todo title cannot exceed 100 characters");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await userClient.createTodo({
        title: newTodo.trim(),
      });
      if (res.success && res.data) {
        dispatch(addTodos(res.data));
        setNewTodo("");
        toast.success("Todo added successfully");
      } else {
        setError(res.error || "Failed to add todo");
      }
    } catch (e) {
        const error = e as Error;  
        console.log(error) 
      setError(error.message || "Failed to add todo");
    } finally {
      setLoading(false);
    }
  };

 

  if (todosLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-xl border-slate-200 shadow-lg">
        <CardHeader className="border-b border-slate-200">
          <CardTitle className="text-2xl font-semibold text-slate-800">
            Todos
          </CardTitle>
          <div>
            <p className="text-sm text-slate-500">
              {todos.length} {todos.length === 1 ? "todo" : "todos"}
            </p>
          </div>
          
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="flex gap-3">
            <Input
              placeholder="Add a new todo…"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              className="rounded-lg border-slate-300 focus:ring-2 focus:ring-blue-500"
            />
            <Button
              onClick={addTodo}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              {loading ? <Loader2Icon className="animate-spin" /> : <LuPlus />}
            </Button>
          </div>

          {error && (
            <Alert variant="destructive" className="rounded-lg">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <ul className="space-y-3">
            {todos.length === 0 ? (
              <li className="text-center py-10 text-sm text-slate-500">
                No todos yet. Add a task above to get started.
              </li>
            ) : (
              todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} setLoading={setLoading} />
              ))
            )}
          </ul>
        </CardContent>
      </Card>
      <LoadingOverlay isLoading={loading} />
    </div>
  );
}
