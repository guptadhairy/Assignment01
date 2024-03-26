import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsBasket3 } from "react-icons/bs";
import { LuLogIn } from "react-icons/lu";

const Navbar2 = () => {
  return (
    <div className='bg-white flex'>
        <div className='px-16'>
            <Image src={"/logo.png"} height={"120"} width={"100"} />
        </div>
        <div className='flex justify-between w-full'>
        <div className='text-sm font-medium mt-10 gap-8 flex'>
            <div>
            <Link href={"/"}>HOME</Link>
            </div>
            <div>
            <Link href={"/"}>ABOUT</Link>
            </div>
            <div>
            <Link href={"/"}>PAGES</Link>
            </div>
            <div>
            <Link href={"/"}>JOBS</Link>
            </div>
            <div>
            <Link href={"/"}>NEWS</Link>
            </div>
            <div>
            <Link href={"/"}>CONTACT</Link>
            </div>
        </div>
        <div className='flex gap-4 px-10 mt-10 font-semibold'> 
            <div className='flex gap-4'>
            LOGIN/REGISTER
            <LuLogIn style={{marginTop: "2px"}} size={"25px"} />
            </div>
            <div className='flex gap-4'>
                JOB BASKET
                <BsBasket3 style={{marginTop: "2px"}}  size={"25px"}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar2