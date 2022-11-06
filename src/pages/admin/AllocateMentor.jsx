import axios from "axios";
import React, { useState, useEffect } from "react";


export default function AllocateMentor(){
    const [inputs, setInputs] = useState({});

    const [content,setContent] = useState(null);
    const [teacher, setTeacher] = useState(null);

    const studentIdArr = [];
    
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

    const AllocateStudent = (studentID) => {

        const url = `http://localhost:9000/admin/allocate-single-student/${document.getElementById('teacherUserName').value}/${studentID}`
        
        axios.
        post(url)
        .then((res)=>{
            console.log(
                'response==',res)
            })
            console.log('ALlocate:',studentID);
        }
        
        const DeallocateStudent = (studentID) => {
            const url = `http://localhost:9000/admin/deallocate-single-student/${document.getElementById('teacherUserName').value}/${studentID}`
            axios.
            post(url)
            .then((res)=>{
                console.log('response==',res)
                })
        console.log('Deallocate:',studentID);
    }


    const handleSubmit = () => {
        // const url = `http://localhost:9000/admin/allocate-student/${document.getElementById('teacherUserName').value}?students=${[studentIdArr]}`;
        // console.log(url);
        alert('Mentor allocated successfully')
        // axios
        // .post(url, inputs)
        // .then((res) => {
        //     alert(res.data.message);
        // })
        // .catch((err) => {
        //     console.log('error : ',err);
        //     alert(err.response.data.message);
        // });
    };

    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            ALLOCATE MENTOR
        </p>
        <form onSubmit={handleSubmit}>
            <div className="text-3xl text-center">             
                <select id="teacherUserName" onClick={handleChanges}>
                    <option>Select Teacher</option>
                    {
                    teacher.map((element)=>{
                    return(
                    <option value={element.username}>{element.name}</option>
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
                        {
                            content.map((element)=>{
                                return (
                        <tr className="text-center border-b text-sm ">
                            <td className="p-2 border-r">{element.name}</td>
                            <td className="p-2 border-r">{element.enrollment_no}</td>
                            <td className="p-2 border-r">{element.mobile_no}</td>
                            <td className="p-2 border-r">{element.email}</td>
                            <td className="p-2 border-r">
                                <input type="checkbox" id="studentId" value={element._id} onClick={(e)=>{
                                    if(e.target.checked){
                                        AllocateStudent(element._id)
                                    }
                                    if(!e.target.checked){
                                        DeallocateStudent(element._id)
                                    }
                                }}/>
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
