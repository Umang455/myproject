import axios from "axios";
import React, { useState, useEffect } from "react";


export default function AllocateMentor(){
    const [inputs, setInputs] = useState({});

    const [content,setContent] = useState(null);
    const [teacher, setTeacher] = useState(null);
    
    useEffect(()=>{

        axios.get('http://localhost:9000/admin/unallocated-students')
            .then((res)=>{
                setContent(res.data.students)
            })

        axios.get('http://localhost:9000/admin/teachers/list')
            .then((res)=>{
                setTeacher(res.data.teachers)
            })

    },[])
    if(!content) return null;
    if(!teacher) return null;


    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post(`http://localhost:9000/admin/allocate-student/${document.getElementById('studentId').value}/${document.getElementById('teacherName').value}`, inputs)
        .then((res) => {
            alert(res.data.message);
        })
        .catch((err) => {
            console.log('error : ',err);
            alert(err.response.data.message);
        });
    };

    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            ALLOCATE MENTOR
        </p>
        <form onSubmit={handleSubmit}>
            <div className="text-3xl text-center">             
                <select id="teacherName" onClick={handleChanges}>
                    <option>Select Teacher</option>
                    {
                    teacher.map((element)=>{
                    return(
                    <option value={element.name}>{element.name}</option>
                    )
                })}
                </select>
            </div>
            <div className="p-6 m-auto w-1/2">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                        <th className="p-2 border-r cursor-pointer text-sm font-thin ">
                                <div className="flex items-center justify-center">
                                    Sr No.
                                </div>
                            </th>
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
                                    Allocate
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <NavLink></NavLink> */}
                        {
                            content.map((element)=>{
                                return (
                        <tr className="text-center border-b text-sm ">
                            <td className="p-2 border-r">1</td>
                            <td className="p-2 border-r">{element.name}</td>
                            <td className="p-2 border-r">{element.enrollment_no}</td>
                            <td className="p-2 border-r">{element.mobile_no}</td>
                            <td className="p-2 border-r">{element.email}</td>
                            <td className="p-2 border-r">
                                <input type="checkbox" id="studentId" value={element._id} onClick={handleChanges}/>
                            </td>
                        </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center">
                <button
                type="submit"
                className="items-center px-4 py-2 w-1/4 rounded-md text-white bg-gray-900">
                    ADD
                </button>
            </div>
        </form>

        </>
    )
}
