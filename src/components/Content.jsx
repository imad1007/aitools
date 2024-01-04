import React, { useState } from 'react'
import DataDesplayed from './DataDesplayed'
import '../App.css'


const categorys = ["All","Text to Image  🎨","Speech-to-Text  🎤","Website Builder ✨","Advertising Assistant 〽"]




export default function Content() {

    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    



    const floatCategoryClick = (e) =>{
        setCategory(e.target.value);
        
    }


    return (
        <div>
            <section className=" dark:bg-gray-900 ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center ">
                        {/* <p className="mb-4 tracking-tight text-green-400 md:text-xl dark:text-white w-60 mx-auto bg-green-100  rounded-xl p-1">Internal Server Error.</p> */}
                        <h1 class="mb-4 text-4xl font-extrabold tracking-normal leading-none text-black md:text-5xl lg:text-6xl dark:text-white">Empowering Your Search for Cutting-edge Artificial<span className='.gradient-text'> Intelligence Solutions</span></h1>
                        <form>
                            <label htmlFor="default-search" className="mb-2 text-sm font-thin text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative max-w-screen-md mx-auto mt-10">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" value={keyword} onChange={e => setKeyword(e.target.value)} className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search tools..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-400 hover:bg-green-800 rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-800">Search</button>
                            </div>
                        </form>
                        <div className="mt-4 whitespace-nowrap overflow-x-auto p-2 ">
                            {categorys.map((item,index)=>(
                                 <button key={index} className={`text-gray-900 text-sm font-thin me-2 px-6 py-3 rounded-xl  dark:text-white border border-gray-300 hover:bg-green-300 ${category===item?"bg-green-400 text-white dark:bg-green-800  ":""}`} value={item} onClick={floatCategoryClick} >{item}</button>
                            ))}

                        </div>

                    </div>
                </div>
                <DataDesplayed keyword={keyword.toLowerCase()} category={category} />
            </section>
        </div>
    )
}
