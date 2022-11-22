import React from 'react'

//Import image
import demoPic from '../../asset/demo.jpg'

//Import icon
import { BsCheck2Circle } from 'react-icons/bs';

function SuccessComponent(props) {

  return (
    
    <div className = "bg-white bg-uColor flex flex-col justify-center items-center rounded px-32 py-4 text-lg max-h-[75%]">
        <BsCheck2Circle  fontSize="5rem"/>
        <h1 className='pt-4 pb-2 text-2xl font-semibold'>จองคิวสำเร็จ</h1>
        <p className=''>คิวของคุณ  </p>
        <p className='text-7xl pb-2'>XX</p>
        <p className='py-2'>คิวปัจจุบัน YY</p>
        <p className='py-2'>สถานที่ ติดต่อแผนก บลาๆๆ</p>
        <div className='pt-2 pb-8'>
            <span className='pr-8'>วันที่ 1/11/2022</span>
            <span>เวลา 10:00 - 10:30น.</span>
        </div>
        <button className='bg-red-600 text-white px-4 py-1'>ยกเลิกคิว</button>
        <p>&lt;- ย้อนกลับ</p>

    </div>
  )
}

export default  SuccessComponent