import { CiCircleCheck } from "react-icons/ci";
import { LuCircle } from "react-icons/lu";

export default function TodoCheckbox({
  status,
  onToggle,
}: {
  status: string;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="mt-1 text-slate-400 hover:text-green-600 transition"
    >
      {status === "DONE" ? (
        <CiCircleCheck size={22} className="text-green-600" />
      ) : (
        <LuCircle size={22} />
      )}
    </button>
  );
}
