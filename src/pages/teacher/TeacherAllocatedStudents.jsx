import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default function TeacherAllocatedStudents(){
    const [inputs, setInputs] = useState({});
    const [content,setContent] = useState(null);
    const teacherName = JSON.parse(localStorage.getItem('info')).name;

    useEffect(()=>{

        axios.get(`http://localhost:9000/teacher/allocated-students/${teacherName}`)
        .then((res)=>{
            setContent(res.data.students)
        })

    },[])
    if(!content) return null;

    const handleIndustrySubmit = (e) => {
        axios
        .post("http://localhost:9000/teacher/send-email", inputs)
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
            <div className="items-center py-2 pl-[768px]">
                <button className="bg-gray-900 p-1 text-gray-50 rounded">ASK ASSESSMENT</button>
            </div>
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
                            <td className="p-2 border-r">
                                <NavLink target={"__blank"} to={`/give-assessment/?name=${element.name}`}><button className="bg-gray-900 text-gray-50 p-1 mr-2 rounded">GIVE</button></NavLink>
                            <button className="bg-gray-900 text-gray-50 p-1 ml-2 rounded" onClick={() => {
                                setInputs(element); 
                                handleIndustrySubmit()
                            }}>ASK</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}