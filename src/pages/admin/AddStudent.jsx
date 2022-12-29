import React,{useState} from "react";
import axios from 'axios';

export default function AddStudent(){
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState();
  
  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    // console.log(inputs);
  };
  
  const handleManSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:9000/admin/add-student", inputs)
    .then((res) => {
      alert(res.data.message);
    })
    .catch((err) => {
      // console.log('error : ',err);
      alert(err.response.data.message);
    });
    // e.target.reset();
  };
  
  const handleFileSubmit = (e) => {
    e.preventDefault();
    {console.log(data)}
    let formData = new FormData();
    formData.append('file', data);
    const url = `http://localhost:9000/admin/add-student/excel`
    // console.log(url,formData);
    axios.post(url,formData)
    .then((res)=>{
      alert(res.data.message)
      // console.log(res)
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
    // e.target.reset();
  }
  
  return(
  <>
  <section className=" py-1">
    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Add Student</h6>
          </div>
        </div>
        
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleManSubmit}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>

            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Username
                  </label>
                  <input
                  name="enrollment_no"
                  onChange={handleChanges}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Full Name
                  </label>
                  <input
                  name="name"
                  onChange={handleChanges}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Email Address
                  </label>
                  <input
                  name="email"
                  onChange={handleChanges}
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Mobile No
                  </label>
                  <input
                  name="mobile_no"
                  onChange={handleChanges}
                  type="number"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                  name="password"
                  onChange={handleChanges}
                  type="password"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
            </div>
            
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Faculty Mentor Information
            </h6>
            
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Faculty Mentor Name
                  </label>
                  <input
                  name="faculty_mentor_name"
                  onChange={handleChanges}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Email Address
                  </label>
                  <input
                  name="faculty_mentor_email"
                  onChange={handleChanges}
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Mobile Number
                  </label>
                  <input
                  name="faculty_mentor_mobile_no"
                  onChange={handleChanges}
                  type="number"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
            </div>
            
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Industry Mentor Information
            </h6>
            
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Organisation Name
                  </label>
                  <input
                  name="organization_name"
                  onChange={handleChanges}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Industry Mentor Name
                  </label>
                  <input
                  name="organization_mentor_name"
                  onChange={handleChanges}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Industry Mentor Email Id
                  </label>
                  <input
                  name="organization_mentor_email"
                  onChange={handleChanges}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                </div>
              </div>
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

          <hr className="my-6 border-b-1" />
          <p className="font-semibold text-center md:text-2xl">Import Data from Excel</p>
          <form
          onSubmit={handleFileSubmit}
          method="post"
          encType="multipart/form-data">
            <div class="flex justify-center">
              <div class="my-5 w-96 ">
                <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Upload excel (xlsx) file</label>
                <input
                onChange={(e) => {
                  setData(e.target.files[0]);
                  }}
                name="excel-file"
                id="dropzone-file"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition 
                ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" />
              </div>
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
        </div>
      </div>
    </div>
  </section>
        {/* <p className="text-3xl p-10 font-semibold text-center">
             ADD TEACHER
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form onSubmit={handleManSubmit}>
                <div className="p-4">
                    <div className="p-2">
                        <label
                        htmlFor="name"
                        className="block text-xl">
                            Name :
                        </label>
                        <div className="flex">
                            <input
                            type="text"
                            onChange={handleChanges}
                            name="name"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label
                        htmlFor="username"
                        className="block text-xl">
                            Username :
                        </label>
                        <div className="flex">
                            <input
                            onChange={handleChanges}
                            type="text"
                            name="username"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                    <div className="p-2">
                        <label
                        htmlFor="password"
                        className="block text-xl">
                            Password :
                        </label>
                        <div className="flex">
                            <input
                            type="password"
                            onChange={handleChanges}
                            name="password"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <button
                    type="submit"
                    className="items-center px-4 py-2 w-1/4 rounded-md text-white bg-gray-900">
                        ADD
                    </button>
                </div>
            </form>
            <p className="text-2xl">Import Data from Excel</p>
            <form onSubmit={handleFileSubmit} method="post" encType="multipart/form-data">
                <input id="dropzone-file" onChange={(e)=>{setData(e.target.files[0])}} name="excel-file" type="file"/>
                <button type="submit" className="bg-green-200 px-3 py-1 mt-4 rounded-lg border-2 border-gray-200">Upload</button>
            </form>
        </div> */}
        </>
    )
}