function StudentTable({ students, onMarkPaid, onDelete }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Phone</th>
            <th className="px-4 py-3">Month</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-t">
              <td className="px-4 py-3">{student.name}</td>
              <td className="px-4 py-3">{student.phone}</td>
              <td className="px-4 py-3">{student.month}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    student.paid
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.paid ? "Paid" : "Not Paid"}
                </span>
              </td>
              <td className="space-x-2 px-4 py-3">
                {!student.paid && (
                  <button
                    onClick={() => onMarkPaid(student.id)}
                    className="rounded-lg bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
                  >
                    Mark Paid
                  </button>
                )}

                <button
                  onClick={() => onDelete(student.id)}
                  className="rounded-lg bg-gray-800 px-3 py-1 text-white hover:bg-black"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {students.length === 0 && (
            <tr>
              <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                No students yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;