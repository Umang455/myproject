import axios from "axios";
import React, { useState, useEffect } from "react";


export default function AllocateMentor(){
  const students = []
  const [teacherName, setTeacherName] = useState("")
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(`http://localhost:9000/admin/allocate-students/${teacherName}`, students)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      // console.log('error : ',err);
      alert(err.response.data.message);
    });
    e.target.reset();
    window.location.reload()
  };

  console.log(teacherName);
  console.log(students)
  
  return(
  <>
  <form onSubmit={handleSubmit}>
    <div className="text-sm pt-6 flex justify-center ">
      <select id="teacherUserName" onChange={(e) => {
        setTeacherName(e.target.value)
      }} className="text-sm text-gray-800 px-4 py-3 rounded bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-purple-400">
        <option>Select Teacher</option>
        {
          teacher.map((element)=>{
            return(
              <option value={element.username}>{element.name}</option>
              )
          })}
      </select>
    </div>

    <div className="p-6 m-auto w-full">
      <form>
        <label for="default-search" class="text-sm font-medium text-gray-900 sr-only ">
          Search
        </label>
        <input type="search" onKeyUp={Search} id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Enrollemtent number..."/>
      </form>
    </div>
    
    <div className="px-6 py-2">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-grey-500 md:border-none block md:table-row -top-full md:top-auto -left-full md:left-auto">
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
              Enrollment No
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
              Name
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
              Email Id
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
              Mobile Number
            </th>
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
              Allocate
            </th>
          </tr>
        </thead>
        <tbody id="table-body" className="block md:table-row-group">
        {
          content.map((element) => {
            return(
              <tr key={element._id} id="tr" className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Enrollment No
                    </span>
                    {element.enrollment_no}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Name
                    </span>
                    {element.name}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Email Id
                    </span>
                    {element.email}
                  </td>
                  <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                    <span className="inline-block w-1/3 md:hidden font-bold">
                      Mobile Number
                    </span>
                    {element.mobile_no}
                  </td>
                <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                  <span className="inline-block w-1/3 md:hidden font-bold">
                    Allocate
                  </span>
                  <input type="checkbox" id="studentId" value={element._id} onClick={(e)=>{
                    if(e.target.checked){
                      students.push(element._id)
                      console.log(students)
                      }
                    if(!e.target.checked){
                      students.pop(element._id)
                      console.log(students)
                    }}}/>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
      }}>
      <button class="text-lg font-semibold bg-gray-800 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white hover:bg-black" >
        Add
      </button>
    </div>
  </form>
        {/* <p className="text-3xl p-10 font-semibold text-center">
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
        </form> */}

        </>
    )
}
