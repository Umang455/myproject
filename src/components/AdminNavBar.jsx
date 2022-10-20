import React from "react";
import { Menu, Transition } from '@headlessui/react'
import { NavLink } from "react-router-dom";

export default function AdminNavBar() {
    const navlinks = [
        {
            name: "Add Student",
            link: "/admin/add-student",
        },
        {
            name: "Delete Student",
            link: "/admin/delete-student",
        },
        {
            name: "View Students",
            link: "/admin/students",
        },
        {
            name: "Add Teacher",
            link: "/admin/add-teacher",
        },
        {
            name: "Delete Teacher",
            link: "/admin/delete-teacher",
        },
        {
            name: "View Teachers",
            link: "/admin/teachers",
        },
        {
            name: "Allocate Mentors",
            link: "/admin/allocate-student",
        },
        {
            name: "View Mentor",
            link: "/admin/teacher-students/abc1",
        }
    ];

    return(
        <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <img
                        className="block h-8 w-auto lg:block"
                        src=""
                        alt="GPM Logo"
                        />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <ul className="position">
                            <div className="flex space-x-6">
                                <li className='block py-2 rounded-md text-base font-medium'>
                                    <NavLink exact to="/dashboard" style={({ isActive }) =>({
                                        borderRadius: isActive ? 4 : 0,
                                        paddingBlock: isActive ? 10 : 0,
                                        paddingLeft: isActive ? 10 : 0,
                                        paddingRight: isActive ? 10 : 0,
                                        color: isActive ? '#ffffff' : '#f3f4f6',
                                        backgroundColor: isActive ? '#111827' : '#1f2937'
                                    })}>Dashboard
                                    </NavLink>
                                </li>
                                <li className='block py-2 rounded-md text-base font-medium'>
                                    <NavLink exact to="/student" style={({ isActive }) =>({
                                            borderRadius: isActive ? 4 : 0,
                                            paddingBlock: isActive ? 10 : 0,
                                            paddingLeft: isActive ? 10 : 0,
                                            paddingRight: isActive ? 10 : 0,
                                            color: isActive ? '#ffffff' : '#f3f4f6',
                                            backgroundColor: isActive ? '#111827' : '#1f2937'
                                        })}>Student
                                        </NavLink>
                                </li>
                                <li className='block py-2 rounded-md text-base font-medium'>
                                    <NavLink exact to="/teacher" style={({ isActive }) =>({
                                            borderRadius: isActive ? 4 : 0,
                                            paddingBlock: isActive ? 10 : 0,
                                            paddingLeft: isActive ? 10 : 0,
                                            paddingRight: isActive ? 10 : 0,
                                            color: isActive ? '#ffffff' : '#f3f4f6',
                                            backgroundColor: isActive ? '#111827' : '#1f2937'
                                        })}>Teacher
                                        </NavLink>
                                </li>
                                <li className='block py-2 rounded-md text-base font-medium'>
                                    <NavLink exact to="/mentor" style={({ isActive }) =>({
                                            borderRadius: isActive ? 4 : 0,
                                            paddingBlock: isActive ? 10 : 0,
                                            paddingLeft: isActive ? 10 : 0,
                                            paddingRight: isActive ? 10 : 0,
                                            color: isActive ? '#ffffff' : '#f3f4f6',
                                            backgroundColor: isActive ? '#111827' : '#1f2937'
                                        })}>Mentor
                                        </NavLink>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                className="h-8 w-8 rounded-full"
                                src=""
                                alt=""
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Change Info
                                    </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Sign out
                                    </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
        </>
    )
}