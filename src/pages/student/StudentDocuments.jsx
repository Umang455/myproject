import axios from "axios";
import React, { useState, useEffect } from "react";

export default function StudentDocuments() {
    const [files, setFiles] = useState({})
    const token = JSON.parse(sessionStorage.getItem("token"))

    useEffect(() => {
        axios
        .get("http://localhost:9000/student/file/map", {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            setFiles(res.data.documents)
        })
    }, [])
    if(!files) return null

    console.log(files);
    return (
      <section className="section flex justify-center md:my-[10rem]" >
          <div className="container ">
  
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Documents</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Download this documents</p>
        </div>
      
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                {
                    files.files?.map((file) => (
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <div className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </a>
                    </div>
                  </li>

                    ))
                }

                </ul>
              </dd>
            </div>

        </div>
      </div>
      </section>
    )
  }