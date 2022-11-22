import React from 'react'

//Import image
import demoPic from '../../asset/demo.jpg'

//Import icon
import { BsClockHistory } from 'react-icons/bs';

function WaitComponent(props) {

  return (
    
    <div className = "bg-white flex flex-col justify-center items-center rounded px-10 py-12 text-lg max-h-[50%]">
        <BsClockHistory  fontSize="5rem"/>
        <h1 className='pt-4 pb-2'>รอดำเนินการตรวจสอบ</h1>
        <p className='text-sm '>รอประมาณ 10 นาที </p>
        <p className='text-sm py-2'>สามารถตรวจสอบผลได้ที่หน้าประวัติการจอง</p>
        <p className='py-2'>โรงพยาบาลแมวเหมียว</p>
        <div className='py-2'>
            <span className='pr-8'>วันที่ 1/11/2022</span>
            <span>เวลา 10:00 - 10:30น.</span>

        </div>

    </div>
  )
}

export default  WaitComponent