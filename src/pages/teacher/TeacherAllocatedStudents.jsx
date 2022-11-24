import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function TeacherAllocatedStudents(){
    const [inputs, setInputs] = useState({});
    const [content,setContent] = useState(null);
    const teacherName = JSON.parse(localStorage.getItem('info')).name;

    useEffect(()=>{

        axios.get(`https://inplant-backend.onrender.com/teacher/allocated-students/${teacherName}`)
        .then((res)=>{
            setContent(res.data.students)
        })

    },[])
    if(!content) return null;

    const handleSubmit = (e) => {
        axios
        .post("https://inplant-backend.onrender.com/teacher/send-email", inputs)
        .then((res) => {
            alert(res.data.message);
        }
        )
        .catch((err) => {
            console.log('error : ',err);
            alert(err.response.data.message);
        }
        );
    };

    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            ALLOCATED STUDENTS
        </p>
        <div className="p-6 m-auto w-1/2">
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-50 border-b">
                        <th className="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div className="flex items-center justify-center">
                                Name
                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div className="flex items-center justify-center">
                                Enrollment No.
                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div className="flex items-center justify-center">
                                Mobile No.
                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div className="flex items-center justify-center">
                                Email Id
                            </div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div className="flex items-center justify-center">
                                Action
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                    content.map((element)=>{
                        return (
                        <tr className="text-center border-b text-sm ">
                            <td className="p-2 border-r">{element.name}</td>
                            <td className="p-2 border-r">{element.enrollment_no}</td>
                            <td className="p-2 border-r">{element.mobile_no}</td>
                            <td className="p-2 border-r">{element.organization_mentor_email}</td>
                            <td className="p-2 border-r" onClick={() => {
                                setInputs(element); 
                                handleSubmit()
                            }}><button>ASK ASSESSMENT</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}