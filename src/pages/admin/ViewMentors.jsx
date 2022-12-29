import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function ViewMentors(){
  const [teacherName, setTeacherName] = useState("")
  const [teacher, setTeacher] = useState(null)
  const [content,setContent] = useState([]);
  
  useEffect(()=>{
    axios.get('http://localhost:9000/admin/teachers/list')
    .then((res)=>{
      setTeacher(res.data.teachers)
    })
  },[])
  
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .get(`http://localhost:9000/admin/allocated-students/${teacherName}`)
    .then((res) => {
      setContent(res.data.students)
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
  };
  
  console.log(content);
  console.log(teacherName)
  
  return(
    <>
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

    <form onSubmit={handleSubmit}>
      <div className="px-6 py-2">
        <table className="min-w-full border-collapse block md:table">
          <thead className="md:block md:table-header-group hidden">
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
          Get
        </button>
      </div>
    </form>
  </>
  )
}