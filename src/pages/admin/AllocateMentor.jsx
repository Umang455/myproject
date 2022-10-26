import React from "react";

export default function AllocateMentor(){
    return(
        <>
        <p className="text-3xl p-10 font-semibold text-center">
            ALLOCATE MENTOR
        </p>
        <div className="text-3xl text-center">
            <select>
                <option value="bac">bac</option>
                <option value="dar">dar</option>
                <option value="llb">llb</option>
                <option value="abc">abc</option>
                <option value="xyz">xyz</option>
            </select>
        </div>
        <div class="p-6 m-auto w-1/2">
            <table class="w-full border">
                <thead>
                    <tr class="bg-gray-50 border-b">
                    <th class="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div class="flex items-center justify-center">
                                Sr No.
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div class="flex items-center justify-center">
                                Name
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div class="flex items-center justify-center">
                                Enrollment No.
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div class="flex items-center justify-center">
                                Mobile No.
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div class="flex items-center justify-center">
                                Email Id
                            </div>
                        </th>
                        <th class="p-2 border-r cursor-pointer text-sm font-thin ">
                            <div class="flex items-center justify-center">
                                Allocate
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center border-b text-sm ">
                        <td class="p-2 border-r">1</td>
                        <td class="p-2 border-r">Himanshu Bharambe</td>
                        <td class="p-2 border-r">FS20CO032</td>
                        <td class="p-2 border-r">9987654321</td>
                        <td class="p-2 border-r">abc@gmail.com</td>
                        <input type="checkbox" id="topping" name="topping" value="Paneer" />
                    </tr>
                    <tr class="text-center border-b text-sm ">
                        <td class="p-2 border-r">2</td>
                        <td class="p-2 border-r">Pranav Dhawale</td>
                        <td class="p-2 border-r">FW20CO001</td>
                        <td class="p-2 border-r">9807685043</td>
                        <td class="p-2 border-r">pranav@gmail.com</td>
                        <input type="checkbox" id="topping" name="topping" value="Paneer" />
                    </tr>
                    <tr class="text-center border-b text-sm ">
                        <td class="p-2 border-r">3</td>
                        <td class="p-2 border-r">Pranav Dhawale</td>
                        <td class="p-2 border-r">FW20CO001</td>
                        <td class="p-2 border-r">9807685043</td>
                        <td class="p-2 border-r">pranav@gmail.com</td>
                        <input type="checkbox" id="topping" name="topping" value="Paneer" />
                    </tr>
                    <tr class="text-center border-b text-sm ">
                        <td class="p-2 border-r">4</td>
                        <td class="p-2 border-r">Pranav Dhawale</td>
                        <td class="p-2 border-r">FW20CO001</td>
                        <td class="p-2 border-r">9807685043</td>
                        <td class="p-2 border-r">pranav@gmail.com</td>
                        <input type="checkbox" id="topping" name="topping" value="Paneer" />
                    </tr>
                    <tr class="text-center border-b text-sm ">
                        <td class="p-2 border-r">5</td>
                        <td class="p-2 border-r">Pranav Dhawale</td>
                        <td class="p-2 border-r">FW20CO001</td>
                        <td class="p-2 border-r">9807685043</td>
                        <td class="p-2 border-r">pranav@gmail.com</td>
                        <input type="checkbox" id="topping" name="topping" value="Paneer" />
                    </tr>
                </tbody>
            </table>
        </div>

        </>
    )
}
