export function DataTable({
  headers,
  children,
}: {
  headers: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((h) => (
              <th key={h} className="text-left p-4 text-sm font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
