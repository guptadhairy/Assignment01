import React from 'react'
import { FaEarthAmericas, FaRegClock } from "react-icons/fa6";
const LeftCard4 = () => {
  return (
    <div className="mt-14 mx-14 border shadow-xl rounded py-6 px-6 w-80">
        <h1 className='text-2xl font-semibold  text-center'>FEATURED JOBS</h1>
        <hr className="h-0.2 bg-black w-full mt-5" />
        <div className='flex justify-between mt-5'>
            <h2 className='text-lg font-semibold'>Car Transporter</h2>
            <h2 className='text-sm mt-2 text-gray-400'>£27500</h2>
        </div>
        <div className='flex mt-2 gap-2'>
        <FaEarthAmericas size={"15px"} className='mt-1'  />
        <h2 className='text-sm'> Netherlands, Arnhem</h2>
        </div>
        <div className='flex justify-end gap-2'>
            <FaRegClock className='mt-1'  size={"15px"} color='orange'/>
            <h2 className='text-sm text-orange-400'>Part Time</h2>
        </div>
        <div>
            <p className='text-sm text-gray-400 mt-2'>Suspendisse neque mi, convallis id dolor a, rutrum venenatis dui. Proin eu justo bibendum, hendrerit lorem vitae, ullamcorper...</p>
        </div>
        <hr className="h-0.2 bg-black w-full mt-5" />
        <div className='mt-5'>
            <h2 className='text-lg font-semibold'>Engineer Center</h2>
            <h2 className='text-sm mt-2 text-gray-400 flex justify-end'>$5000 - $10000/ month</h2>
        </div>
        <div className='flex mt-2 gap-2'>
        <FaEarthAmericas size={"15px"} className='mt-1'  />
        <h2 className='text-sm'> England, Cheshire, Crewe</h2>
        </div>
        <div className='flex justify-end gap-2 mt-2' >
            <FaRegClock className='mt-1'  size={"15px"} color='green'/>
            <h2 className='text-sm text-green-400'>Full Time</h2>
        </div>
        <div>
            <p className='text-sm text-gray-400 mt-2'>Our Client is currently recruiting for a Town Centre Engineer to maintain and develop the public realm in...</p>
        </div>
        <hr className="h-0.2 bg-black w-full mt-5" />
        <div className='mt-5'>
            <h2 className='text-lg font-semibold'>Graduate Sales Assistant</h2>
            <h2 className='text-sm mt-2 text-gray-400 flex justify-end'>£25000 - £35000 Basic - First Year</h2>
        </div>
        <div className='flex mt-2 gap-2'>
        <FaEarthAmericas size={"15px"} className='mt-1'  />
        <h2 className='text-sm'> England, Norfolk, Norwich</h2>
        </div>
        <div className='flex justify-end gap-2 mt-2'>
            <FaRegClock className='mt-1'  size={"15px"} color='red'/>
            <h2 className='text-sm text-red-400'>Internship</h2>
        </div>
        <div>
            <p className='text-sm text-gray-400 mt-2'>Based in Norwich our client is an established and highly successful technology solutions provider working primarily in the ...</p>
        </div>
        <hr className="h-0.2 bg-black w-full mt-5" />
        <button className='mt-8 bg-purple-900 text-white w-full py-3  rounded font-bold text-xs flex justify-center'>VIEW ALL JOBS</button>
    </div>
  )
}

export default LeftCard4