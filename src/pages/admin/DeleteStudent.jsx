import React from "react";

export default function DeleteStudent(){
    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            DELETE STUDENT
        </p>
        <div className="p-6 m-auto bg-gray-100 rounded-md shadow-xl w-1/3">
            <form>
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
        </div>
        </>
    )
}