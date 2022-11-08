import React from "react";
import axios from 'axios';
import { useState } from "react";

export default function StudentUploadDocuments() {

    const [data,setData] =useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', data)
      const url = `https://inplant-backend.onrender.com/student/file/upload/${localStorage.getItem('userId')}`
      console.log(localStorage.getItem('userId'));
        axios.post(url,formData)
        .then((result)=>{
            alert(result.data.message)
            console.log(result)
        })
        .catch((err)=>{
            alert(err.data.message||"Something went wrong")
        })
    }

    return (
        <>
        <p className="text-3xl p-10 font-semibold text-center">
             UPLOAD DOCUMENT
        </p>
            <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center w-full">
            <label for="dropzone-file" className="flex flex-col justify-center items-center w-3/5 h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer">
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">(ENROLLMENT_NO-<i>filename</i>).pdf</p>
                </div>
                <input required id="dropzone-file" onChange={(e)=>{setData(e.target.files[0])}} name="file" type="file"/>
            <button type="submit" className="bg-green-200 px-3 py-1 mt-4 rounded-lg border-2 border-gray-200">Upload</button>
            </label>
        </div>
            </form>
        </>
    );
}