import React, {useState,useEffect} from "react";
import axios from 'axios';
// import { NavLink } from "react-router-dom";

export default function TeacherStudent(){

    const [content,setContent] = useState(null);
    
    useEffect(()=>{

        axios.get('https://inplant-backend.onrender.com/teacher/students/list')
            .then((res)=>{
                setContent(res.data.students)
            })
    },[])

    if(!content) return null;

    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            STUDENT LIST
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
                        <td className="p-2 border-r">{element.email}</td>
                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}