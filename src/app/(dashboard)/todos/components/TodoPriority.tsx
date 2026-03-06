import { FaStar } from "react-icons/fa";

export default function TodoPriority({
  priority,
  onToggle,
}: {
  priority: string;
  onToggle: () => void;
}) {
  return (
    <button onClick={onToggle} className="mt-1 hover:scale-110 transition">
      <FaStar
        size={18}
        className={priority === "HIGH" ? "text-amber-400" : "text-slate-300"}
      />
    </button>
  );
}
