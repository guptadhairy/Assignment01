import React from 'react'
import { FaPhoneSquare, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-gray-100 py-4 px-10'>
        <div className='mx-5 flex justify-between'>
            <div className='flex gap-20'>
                <div className='flex text-center gap-3 text-sm '>
                <FaPhoneSquare size={"18px"} />
                +44 (0)1254 302034
                </div>
                <div className='flex text-center gap-3 text-sm '>
                    <FaEnvelope size={"18px"}/>
                    enquiries@recruitment.com
                </div>
            </div>
            <div className='flex gap-8'>
                <FaFacebookF size={"18px"} />
                <FaTwitter size={"18px"} />
                <FaLinkedinIn size={"18px"} />
                <FaGooglePlusG size={"21px"} />
            </div>
        </div>
    </div>
  )
}

export default Navbar