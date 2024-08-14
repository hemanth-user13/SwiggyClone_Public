import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton() {
    const navigate = useNavigate()
  return (
    <div>
      {/* <button type="button" onClick={()=>{navigate(-1)}} class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">&larr; Back</button> */}
      <span
        class="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md text-indigo-500 hover:bg-indigo-50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18">
            </path>
        </svg>
        <span class="ml-1 font-bold text-lg" onClick={()=>{navigate(-1)}}>Back</span>
    </span>
    </div>
  )
}

export default BackButton
