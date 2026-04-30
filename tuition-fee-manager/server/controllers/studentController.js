import db from "../database.js";

export const registerStudent = async (req,res)=>{
    try {
        const {name, phone, month, paid} = req.body;

        await db.prepare("INSERT INTO student (name, phone, month, paid) VALUES (?, ?, ?, ?)").run(name, phone, month, 0);
        res.json({
            message: "Student Registered Successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error"}) 
    }
}

export const getStudents = async (req,res)=>{
    try {
        const StudentsList =await db.prepare("SELECT * FROM student").all();
        res.json({
            StudentsList
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal Server Error"}) 
    }
}
