'use client'

import React from 'react';
// import '../globals.css';
// import NavBar from '../../components/NavBar';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons'
import NavBar from '@/components/NavBar';


export default function UserReportingSubmission() {
    
    return (
        <div className=" flex items-center justify-center "> {/* PAGE BODY */}
            <form action="">
                <NavBar/>
                {/* TITLE (OUTSIDE) */}
                {/* <div className="flex justify-center items-center font-bold text-6xl  text-center text-7  mt-[20vh] mb-[-20vh]">
                    <h1>Reporting Submission</h1>
                </div> */}
                {/* MAIN CONTAINER */}
                <div className="min-h-screen flex flex-col justify-center items-center">
                    {/* TITLE (INSIDE) */}
                    <div className="flex justify-center items-center font-bold text-6xl text-center text-7 gap-10 mb-[10vh]">
                        <h1>Reporting Submission</h1>
                    </div>
                    {/*SPEECH & TYPING CONTAINER */}
                    <div className="text-center mb-4 max-w-[1120px] mx-auto">
                        <div className="flex justify-center items-center gap-[20px] ">
                            {/* SPEECH */}
                            <div className='w-[550px] h-[300px]  flex flex-col justify-between items-center bg-white py-4 px-6 rounded-lg shadow-left-custom-blue z-10'>
                                <div className=''>
                                    <h2 className="font-bold text-2xl mb-4">
                                        Ai Speech to Text
                                    </h2>
                                    <p className='text-justify text-base mb-2'>
                                    Before continue, remember to speak clearly for the AI system to understand and summarize the report correctly. Find a quiet place and make sure to pronounce your words clearly for the best outcome.
                                    </p>
                                    <p className="text-red-500 text-base mb-4">
                                        Required Microphone or Audio input
                                    </p>
                                </div>
                                <button className="w-[250px] h-[75px] relative bg-[#0044cc] shadow-bottom-custom-blue rounded-lg border-none cursor-pointer outline-none z-0 ">
                                    <span className="text-white text-[50px] flex justify-center items-center">
                                        <FontAwesomeIcon icon={faMicrophoneLines} />
                                    </span>
                                </button>
                            </div>

                            {/* TYPING */}
                            <div className="w-[550px] h-[300px]  flex flex-col justify-between items-center bg-white py-4 px-6 rounded-lg shadow-left-custom-blue z-0">
                                <div>
                                    <h2 className="font-bold text-2xl mb-4">
                                        Typing Report
                                    </h2>
                                    <p className="text-justify text-base mb-auto">
                                        Before continue, it&apos;s important to know that you&apos;ll have to type out your report yourself on this page. Just use your keyboard to input all the important information about the incident.
                                    </p>
                                </div>
                                <button className="w-[250px] h-[75px]   bg-[#0044cc] justify-between shadow-bottom-custom-blue rounded-lg border-none cursor-pointer outline-none z-0">
                                    <span className="text-white text-[57px] flex justify-center items-center ">
                                        <FontAwesomeIcon icon={faKeyboard} />
                                    </span>
                                </button>
                            </div> 
                        </div>
                    </div>
                    {/* LIST CONTTAINER */}
                    <div className="flex justify-center items-center mb-4 ">
                        <div className="flex justify-center items-center w-[1120px] h-[50px]  bg-white shadow-middle-custom-blue rounded-lg gap-4 z-20">
                            <div className="flex">
                                type of case / report type
                            </div>
                            <div>
                                <select className="p-2 bg-white rounded-lg border border-[#696969] " name='reportype' required>
                                    <option value="placeholder">Type of reports</option>
                                    <option value="wan">1</option>
                                    <option value="to">2</option>
                                    <option value="tree">3</option>
                                    <option value="for">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* LIST CONTAINER TEMPLETE V2 */}
                    {/* <div className="w-[1120px] mx-auto my-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-2xl z-30"> */}
                    <div className="w-[1120px] mx-auto p-6 mb-4 bg-white shadow-buttom-custom-blue rounded-lg z-20"> 
                        <div className="flex items-center justify-between gap-6">
                            Label Section
                            <div className="flex items-center space-x-4">
                            <div className="p-3 bg-police-blue rounded-full">
                                <i class="fas fa-clipboard-list text-white text-lg"></i>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-gray-800">Select Your Report</h2>
                                <p class="text-gray-500 text-sm">Choose the type of case or report from the dropdown below</p>
                            </div>
                            </div>
                            Dropdown Section
                            <div className="relative w-1/3">
                            <select id="report-type" class="appearance-none w-full py-3 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 shadow-sm">
                                <option>Type of reports</option>
                                <option>Report 1</option>
                                <option>Report 2</option>
                                <option>Report 3</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
