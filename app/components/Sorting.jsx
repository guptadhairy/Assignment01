import React from 'react'
import { MdOutlineSwapVert } from "react-icons/md";
import { FaChevronDown, FaList } from "react-icons/fa";
import { BsGrid3X2 } from "react-icons/bs";
const Sorting = () => {
  return (
    <div className='flex gap-10 px-5 py-8 h-20 border rounded mx-12 mt-5 justify-between'>
        <div className='flex gap-3'>
        <MdOutlineSwapVert size={"20px"} color='purple' />
        <p className='text-purple-900 text-sm'>Sort </p>
        <FaChevronDown size={"10px"} className='mt-2' color='purple' />
        </div>
        <div className='flex gap-3'>
        <BsGrid3X2 />
        <p className='text-sm'>Grid</p>
        </div>
        <div className='flex gap-3'>
            <FaList/>
            <p className='text-sm'>List</p>
        </div>
        <div>
            <p className='text-sm'>Showing 1-12 of 2601 results</p>
        </div>
        <div>
            <button className='border px-1 '>1</button>
            <button className='border px-1'>2</button>
            <button className='border px-1'>3</button>
            <button className='border px-1'>...</button>
            <button className='border px-1'>217</button>
        </div>
    </div>
  )
}

export default Sorting