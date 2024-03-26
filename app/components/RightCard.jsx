import Image from 'next/image'
import React from 'react'

const RightCard = ({img, title, location, category1, category2, category3, vacancy}) => {
  return (
    <div className='flex gap-10 px-5 py-8 h-40 border shadow-lg rounded mx-12 mt-5 '>
        <Image src={img} width={"150"} height={"150"} />
        <div className='my-6'>
            <h2 className='font-semibold'>{title}</h2>
            <p className='mt-3 text-sm'>{location}</p>
        </div>
        <div className='flex gap-3 my-10 text-sm text-purple-950'>
            <li className='list-none '>{category1} </li>
            <li>{category2}</li>
            <li>{category3}</li>
        </div>
        <div className='flex flex-col text-center my-6'>
            <h1 className='text-2xl font-bold text-purple-950'>{vacancy}</h1>
            <h4 className='text-sm font-semibold text-purple-950'>Vacancies</h4>
        </div>
    </div>
  )
}

export default RightCard
