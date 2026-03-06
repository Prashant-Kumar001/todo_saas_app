import { Button } from "@/components/ui/button";
import { LuTrash2 } from "react-icons/lu";

export default function TodoActions({ onDelete }: { onDelete: () => void }) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onDelete}
      className="text-slate-400 hover:text-red-500 hover:bg-red-50"
    >
      <LuTrash2 size={18} />
    </Button>
  );
}
