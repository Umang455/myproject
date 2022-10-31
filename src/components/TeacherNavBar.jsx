import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TeacherNavBar() {
    return (
    <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
        <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">
                        <NavLink to="/teacher/dashboard">
                            <AiFillHome size={30} color="#fff"/>
                        </NavLink>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                        <ul className="position">
                            <div className="flex space-x-6">
                                <li className='block py-2 rounded-md text-base font-medium'>
                                    <NavLink exact to="/teacher/dashboard" style={({ isActive }) =>({
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
                                    <NavLink exact to="/teacher/student" style={({ isActive }) =>({
                                            borderRadius: isActive ? 4 : 0,
                                            paddingBlock: isActive ? 10 : 0,
                                            paddingLeft: isActive ? 10 : 0,
                                            paddingRight: isActive ? 10 : 0,
                                            color: isActive ? '#ffffff' : '#f3f4f6',
                                            backgroundColor: isActive ? '#111827' : '#1f2937'
                                        })}>Students
                                        </NavLink>
                                </li>
                                <li className='block py-2 rounded-md text-base font-medium'>
                                    <NavLink exact to="/teacher/allocated-students" style={({ isActive }) =>({
                                            borderRadius: isActive ? 4 : 0,
                                            paddingBlock: isActive ? 10 : 0,
                                            paddingLeft: isActive ? 10 : 0,
                                            paddingRight: isActive ? 10 : 0,
                                            color: isActive ? '#ffffff' : '#f3f4f6',
                                            backgroundColor: isActive ? '#111827' : '#1f2937'
                                        })}>Allocated Students
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
                                <FaUserAlt size={40} color="#cbd5e1" style={{"border":"2px solid #fefefe", "borderRadius":"50%", "padding":"2px"}} />
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
                                        <NavLink to="/teacher/change-info">
                                            <button
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                Change Info
                                            </button>
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                    <button
                                    onClick={() => {
                                        localStorage.setItem('authenticated',false);
                                        localStorage.setItem('info',null)
                                        localStorage.setItem('userId',null)
                                        window.location.href = '/teacher/login';
                                    }}
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Sign out
                                    </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
        
        {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </Disclosure.Button>
                ))}
            </div>
        </Disclosure.Panel> */}
        </>
        )}
    </Disclosure>
    )
}
