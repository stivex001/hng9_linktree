import React from 'react'
import share from "../assets/Icon (1).svg"

const Modal = () => {
  return (
    <div className='bg-[#98a2b3] rounded-[8px] py-2 px-3 '>
        <div className='flex items-center gap-[34px] cursor-pointer'>
        <p className='text-[12px] leading-[18px] font-semibold text-center text-white'>Share Link</p>
        <img src={share} alt="" />
        </div>
    </div>
  )
}

export default Modal