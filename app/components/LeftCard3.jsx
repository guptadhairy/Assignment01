import React from 'react'

const LeftCard3 = () => {
  return (
    <div className='mt-14 mx-10 flex justify-center'>
        <div className='bg-blue-600 text-white py-8 px-10 rounded w-80 h-70 bg-cover bg-center' style={{ backgroundImage: "url('/cv.png')" }}>
            <h1 className='text-4xl font-semibold text-center'>
                Upload Your 
            </h1>
            <h1 className='text-4xl font-semibold text-center'> CV</h1>
            <p className='mt-4 text-sm text-center font-normal'>Upload your CV to apply for as many jobs as you like</p>
            <button className='mt-8 bg-white text-purple-950 w-full py-3 rounded font-bold text-xs flex justify-center'>UPLOAD YOUR CV</button>
        </div>
    </div>
  )
}

export default LeftCard3