import e from "express";
import cors from "cors";
import db from "./database.js";
import { deleteStudent, getStudents, markPayment, registerStudent } from "./controllers/studentController.js";

const app = e();
app.use(e.json());
app.use(cors());

//Routes
app.post("/api/student/register", registerStudent);
app.get("/api/student/list", getStudents);
app.delete("/api/student/delete/:id", deleteStudent);
app.put("/api/student/mark/:id", markPayment);

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});