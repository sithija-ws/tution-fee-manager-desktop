import { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";
import {
  addStudent,
  deleteStudent,
  getStudents,
  markStudentPaid,
} from "../api/studentApi";

function Students() {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    month: "",
  });

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addStudent(form);

    setForm({
      name: "",
      phone: "",
      month: "",
    });

    loadStudents();
  };

  const handleMarkPaid = async (id) => {
    await markStudentPaid(id);
    loadStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Tuition Fee Manager
          </h1>
          <p className="mt-1 text-gray-500">
            Manage students and monthly payments easily.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mb-6 grid gap-3 rounded-xl bg-white p-5 shadow md:grid-cols-4"
        >
          <input
            className="rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Student name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            className="rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            className="rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Month"
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
            required
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Add Student
          </button>
        </form>

        <StudentTable
          students={students}
          onMarkPaid={handleMarkPaid}
          onDelete={handleDelete}
        />
      </section>
    </main>
  );
}

export default Students;