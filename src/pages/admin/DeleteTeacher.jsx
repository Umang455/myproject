import React,{useState} from "react";
import axios from 'axios';

export default function DeleteTeacher(){
  
  const [inputs, setInputs] = useState({});
  
  
  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    console.log(inputs);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:9000/admin/delete-teacher", inputs)
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
  <section className=" py-1 bg-blueGray-50">
    <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div className="  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Delete Teacher</h6>
          </div>
        </div>
        
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="  w-full mb-3">
                  <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Username
                  </label>
                  <input
                  name="username"
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
              <button type="submit" class="text-lg font-semibold bg-gray-800 text-white rounded-lg px-6 py-2 block shadow-xl hover:text-white hover:bg-black" >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
        {/* <p className="text-3xl p-10 font-semibold text-center">
            DELETE STUDENT
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form onSubmit={handleSubmit}>
                <div className="p-4">
                    <div className="p-2">
                        <label
                        htmlFor="enrollment_no"
                        className="block text-xl">
                            Enrollment No :
                        </label>
                        <div className="flex">
                            <input
                            type="text"
                            onChange={handleChanges}
                            name="enrollment_no"
                            className="block w-full px-4 py-2 mt-2 border"/>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-center">
                    <button
                    type="submit"
                    className="items-center px-4 py-2 w-1/4 rounded-md text-white bg-gray-900">
                        DELETE
                    </button>
                </div>
            </form>
        </div> */}
        </>
    )
}