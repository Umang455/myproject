import axios from "axios";
import React, { useState, useEffect } from "react";


export default function AllocateMentor(){
    const [inputs, setInputs] = useState({});

    const [content,setContent] = useState(null);
    const [teacher, setTeacher] = useState(null);
    
    useEffect(()=>{

        axios.get('https://inplant-backend.onrender.com/admin/unallocated-students')
            .then((res)=>{
                setContent(res.data.students)
            })

        axios.get('https://inplant-backend.onrender.com/admin/teachers/list')
            .then((res)=>{
                setTeacher(res.data.teachers)
            })

    },[])

    if(!content) return null;
    if(!teacher) return null;

    function Search() {
        var input, filter, tBody, tRow, tData, i, txtValue;
        input = document.getElementById('search');
        filter = input.value.toUpperCase();
        tBody = document.getElementById('table-body');
        tRow = tBody.getElementsByTagName('tr');

        for (i = 0; i < tRow.length; i++) {
            tData = tRow[i].getElementsByTagName("td")[1];
            txtValue = tData.textContent || tData.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tRow[i].style.display = "";
            } else {
                tRow[i].style.display = "none";
            }
        }
    }

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
    };

    const AllocateStudent = (studentID) => {

        const url = `https://inplant-backend.onrender.com/admin/allocate-single-student/${document.getElementById('teacherUserName').value}/${studentID}`
        
        axios.
        post(url)
        .then((res)=>{
            console.log(
                'response==',res)
            })
            console.log('Allocate:',studentID);
        }
        
        const DeallocateStudent = (studentID) => {
            const url = `https://inplant-backend.onrender.com/admin/deallocate-single-student/${document.getElementById('teacherUserName').value}/${studentID}`
            axios.
            post(url)
            .then((res)=>{
                console.log('response==',res)
                })
        console.log('Deallocate:',studentID);
    }


    const handleSubmit = () => {
        alert('Mentor allocated successfully')
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
            <div className="flex justify-center">
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" onKeyUp={Search} id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by ENROLLEMNT NO..." />
                        </div>
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

                    <tbody id="table-body">
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
