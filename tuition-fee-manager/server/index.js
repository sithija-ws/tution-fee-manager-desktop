import e from "express";
import cors from "cors";
import db from "./database.js";
import { getStudents, registerStudent } from "./controllers/studentController.js";

const app = e();
app.use(e.json());
app.use(cors());

//Routes
app.post("/api/student/register", registerStudent);
app.get("/api/student/list", getStudents);

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});