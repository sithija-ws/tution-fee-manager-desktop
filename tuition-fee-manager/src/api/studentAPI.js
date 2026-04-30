import axios from "axios";

const API_URL = "http://localhost:5000";

export const getStudents = async () => {
  return await axios.get(`${API_URL}/api/student/list`);
};

export const addStudent = async (student) => {
    try {
        await axios.post(`${API_URL}/api/student/register`, student);
    } catch (error) {
        console.log(error.message);
    }
    
}


export const markStudentPaid = (id) =>
  axios.put(`${API_URL}/api/student/mark/${id}`);

export const deleteStudent = (id) =>
  axios.delete(`${API_URL}/api/student/delete/${id}`);