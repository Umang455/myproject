import React, { useState,useEffect, useContext } from "react";
import axios from 'axios';
// import { Token } from "../../context";

export default function TeacherAllocatedStudents(){
  const [content,setContent] = useState([]);

  const token = JSON.parse(sessionStorage.getItem("token"))
//   const [token, setToken] = useContext(Token)
  console.log(token);
  
  useEffect(()=>{
    axios.get('http://localhost:9000/teacher/allocated-students', {
        headers: {
            Authorization: token
        }
    })
    .then((res)=>{
      setContent(res.data.students)
    })
  },[])
  
  if(!content) return null;
  
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
  
  console.log(content);
  
  return(
    <>
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
            <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell sm:hidden">
            Actions
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
                  Actions
                </span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mr-4 border border-blue-500 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
                  Delete
                </button>
              </td>
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