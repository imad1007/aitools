import React, { useState } from 'react'
import { useLocation  } from 'react-router-dom';
import Logo from '../assets/AIFORGE.png'

const HeaderElements = ["Home", "About", "Services", "Contact"]


export default function Header() {
    const [mode, setMode] = useState('light');
    const darkMode = localStorage.getItem('darkMode');


    const darkModeFunction = () => {

        if (darkMode === null) {
            document.body.classList.toggle('dark');
            localStorage.setItem('darkMode', true);
            setMode('dark')
        } else {
            if (darkMode === 'true') {
                document.body.classList.remove('dark');
                localStorage.setItem('darkMode', false);
                setMode('light')
            } else {
                document.body.classList.toggle('dark');
                localStorage.setItem('darkMode', true);
                setMode('dark')
            }
        }


    }
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center rtl:space-x-reverse">
                        {/* <img src={Logo} className="h-12" alt="Flowbite Logo" /> */}
                        <span className="self-center text-xl whitespace-nowrap font-mono text-gray-800 dark:text-white">AIForge</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button onClick={darkModeFunction}>
                            {mode === 'light' ?
                                <svg className="w-6 h-6 text-indigo-800 dark:indigo-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z" />
                                </svg> :
                                <svg className="w-6 h-6 text-yellow-300 dark:Yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                                </svg>
                            }
                        </button>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-thin p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                HeaderElements.map((item, index) => (
                                    <li key={index}>
                                        <a href={item==='Home'?'/':item} className="block py-2 px-3 text-sm font-thin whitespace-normal md:p-0 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-indigo-700 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray " >{item}</a>
                                    </li>
                                ))
                            }
                        
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
