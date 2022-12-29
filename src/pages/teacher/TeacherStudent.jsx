import React,{useState,useEffect} from "react";
import axios from 'axios';
import TeacherProfile from "../../components/TeacherProfile";

export default function TeacherStudent(){
  
  const [content,setContent] = useState(null);
  const [info, setInfo] = useState();
  const [model, setModel] = useState(false);
  
  useEffect(()=>{
    axios.get('http://localhost:9000/teacher/students/list')
    .then((res)=>{
      setContent(res.data.students)
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
        </tr>
      </thead>
      <tbody id="table-body" className="block md:table-row-group">
      {
        content.map((element) => {
          return(
            <tr id="tr" className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
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
        {/* <div className={model ? '' : 'hidden'} id="model">
                 <button className="bg-red-400 font-bold ml-5 mt-5 p-3 rounded-lg" onClick={() => { setModel(false) }}>X</button>
                 {info? <TeacherProfile name={info.name || ""} username={info.username || ""} email={info.email || "Contact details not found"} mobile_no={info.mobile_no || "Mobile number not found"} /> : 'loading...'}
                
           </div>
        <div className={model ? 'hidden' : ''}>
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
                                Username
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
                    <tr key={element._id} className="text-center border-b text-sm hover:bg-green-300" onClick={() => { setModel(true); localStorage.setItem('teacherInfo',JSON.stringify(element))}}>
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

        </div> */}
        </>
    )
}

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import TeacherProfile from "../../components/TeacherProfile";

// export default function ViewTeachers() {
//     const [content, setContent] = useState(null);

//     const [info, setInfo] = useState();

//     const [model, setModel] = useState(false);
//     useEffect(()=>{
//         setInfo(JSON.parse(localStorage.getItem('teacherInfo')))
//     },[model])

//     useEffect(() => {

//         axios.get('http://localhost:9000/admin/teachers/list')
//             .then((res) => {
//                 setContent(res.data.students)
//             })
//     }, [])

//     if (!content) return null;
    

//     function Search() {
//         var input, filter, tBody, tRow, tData, i, txtValue;
//         input = document.getElementById('search');
//         filter = input.value.toUpperCase();
//         tBody = document.getElementById('table-body');
//         tRow = tBody.getElementsByTagName('tr');

//         for (i = 0; i < tRow.length; i++) {
//             tData = tRow[i].getElementsByTagName("td")[1];
//             txtValue = tData.textContent || tData.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tRow[i].style.display = "";
//             } else {
//                 tRow[i].style.display = "none";
//             }
//         }
//     }

//     return (
//         <>
//             {/* <div className={model ? '' : 'hidden'} id="model">
//                 <button className="bg-red-400 font-bold ml-5 mt-5 p-3 rounded-lg" onClick={() => { setModel(false) }}>X</button>
//                 {info? <TeacherProfile name={info.name || ""} username={info.username || ""} email={info.email || "Contact details not found"} mobile_no={info.mobile_no || "Mobile number not found"} /> : 'loading...'}
                
//             </div> */}
//             <div >

//                 <p className="text-3xl p-10 font-semibold text-center">
//                     VIEW TEACHERS
//                 </p>
//                 <div className="p-6 m-auto w-1/2">


//                     <form>
//                         <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
//                         <div className="relative">
//                             <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//                                 <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//                             </div>
//                             <input type="search" onKeyUp={Search} id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search by USERNAME..." />
//                         </div>
//                     </form>


//                     <table className="w-full border">
//                         <thead>
//                             <tr className="bg-gray-50 border-b">
//                                 <th className="p-2 border-r cursor-pointer text-sm font-thin ">
//                                     <div className="flex items-center justify-center">
//                                         Name
//                                     </div>
//                                 </th>
//                                 <th className="p-2 border-r cursor-pointer text-sm font-thin ">
//                                     <div className="flex items-center justify-center">
//                                         Username
//                                     </div>
//                                 </th>
//                                 <th className="p-2 border-r cursor-pointer text-sm font-thin ">
//                                     <div className="flex items-center justify-center">
//                                         Mobile No.
//                                     </div>
//                                 </th>
//                                 <th className="p-2 border-r cursor-pointer text-sm font-thin ">
//                                     <div className="flex items-center justify-center">
//                                         Email Id
//                                     </div>
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody id="table-body">
//                             {
//                                 content.map((element) => {
//                                     return (
//                                         <tr key={element._id} className="text-center border-b text-sm hover:bg-green-300" onClick={() => { setModel(true); localStorage.setItem('studentInfo',JSON.stringify(element))}}>
//                                             <td className="p-2 border-r">{element.name}</td>
//                                             <td className="p-2 border-r">{element.enrollment_no}</td>
//                                             <td className="p-2 border-r">{element.mobile_no}</td>
//                                             <td className="p-2 border-r">{element.email}</td>
//                                         </tr>
//                                     )
//                                 })
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     )
// }