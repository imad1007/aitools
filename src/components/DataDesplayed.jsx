import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AIdata from '../assets/AItoolsdata.json'
import NoResultIcon from '../assets/NOresults.png'

export default function DataDesplayed({ keyword, category }) {


    const [aitools, setAitools] = useState(AIdata)


    useEffect(() => {

        //if keyword have a vlue then the AIdata array should have only the items that include the same value
        if (keyword.length > 0) {
            const newAIdataarray = (AIdata.filter((items) => items.title.toLowerCase().includes(keyword)))
            setAitools(newAIdataarray)
            // alert("input has change!!!")
        } else {
            setAitools(AIdata)
        }
        if (category) {
            if (category === "All") {
                setAitools(AIdata)
            } else {
                if (keyword.length > 0) {
                    let arrayFiltredByCategory = AIdata.filter((item) => item.category[0] === category);
                    setAitools(arrayFiltredByCategory.filter((items) => items.title.toLowerCase().includes(keyword)))
                } else {
                    let arrayFiltredByCategory = AIdata.filter((item) => item.category[0] === category);
                    setAitools(arrayFiltredByCategory)
                }
            }
        }
    }, [keyword, category])


    return (
        <div className=' py-8 px-4 mx-auto max-w-screen-xl'>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {aitools.length > 0 ?
                    aitools.map((item, index) =>
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={item.url}>
                                <img className="rounded-t-lg"  src={item.image} alt="" />
                                <div className="p-5">
                                    <h5 className="mb-2 text-xl md:text-2xl font-thin tracking-normal text-gray-900 dark:text-white overflow-hidden overflow-x-auto  ">{item.title}</h5>
                                    <p className="mb-3 text-sm  font-thin text-gray-700 dark:text-gray-400 truncate hover:text-clip ">{item.description}</p>
                                    {/* <a href={item.url} className=" end-4 inline-flex items-center px-3 py-2 text-sm font-thin text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 justify-end">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a> */}
                                </div>
                            </a>
                        </div>
                    ) : false
                }
            </div>
            {
                aitools.length <= 0 ?
                    <div className="flex dark:bg-gray-900  ">
                        <div className=" flex mx-auto items-center py-8 ">
                            <div>
                                <h2 className="text-6xl text-gray-400 dark:text-white md:text-4xl"> No result </h2>
                            </div>
                            <div>
                                <img src={NoResultIcon} alt="" className=' h-14 ' />
                            </div>
                        </div>
                    </div> : false
            }
        </div>
    )
}
