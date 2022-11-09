import React,{useState,useEffect} from "react";
import axios from 'axios';
// import { NavLink } from "react-router-dom";

export default function ViewTeachers(){

    const [content,setContent] = useState(null);
    
    useEffect(()=>{

        axios.get('http://localhost:9000/admin/teachers/list')
            .then((res)=>{
                setContent(res.data.teachers)
            })
    },[])

    if(!content) return null;

    function Search() {
        var input, filter, tBody,tRow,tData, i, txtValue;
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

    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            VIEW TEACHERS
        </p>
        <div className="p-6 m-auto w-1/2">
        <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" onKeyUp={Search} id="search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by Enrollemtent number..."/>
    </div>
</form>
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
                <tbody id="table-body">
                    {
                        content.map((element)=>{
                            return (
                    <tr className="text-center border-b text-sm ">
                        <td className="p-2 border-r">{element.name}</td>
                        <td className="p-2 border-r">{element.username}</td>
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