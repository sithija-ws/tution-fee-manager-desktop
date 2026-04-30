import axios from "axios";

const API_URL = "http://localhost:5000";

export const getStudents = async () => {
    try {
        await axios.get(`${API_URL}/api/student/list`);
    } catch (error) {
        console.log(error.message);
    }
    
}

export const registerStudent = async (student) => {
    try {
        await axios.post(`${API_URL}/api/student/register`, student);
    } catch (error) {
        console.log(error.message);
    }
    
}

