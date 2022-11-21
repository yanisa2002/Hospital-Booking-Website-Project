import React from 'react'



//Import icon
import {BsXCircle} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function FailComponent(props) {

  return (
    
    <div className = "bg-white flex flex-col justify-center items-center rounded px-28 py-12 text-lg max-h-[60%]">
        <BsXCircle color="red" fontSize="5rem"/>
        <h1 className='pt-4 pb-2 text-2xl font-semibold text-[#FF5858]'>จองคิวไม่สำเร็จ</h1>
        <p className='py-2'>โรงพยาบาลแมวเหมียว</p>
        <div className='py-2'>
            <span className='pr-8'>วันที่ 1/11/2022</span>
            <span>เวลา 10:00 - 10:30น.</span>
        </div>
        <p className='py-2'>หมายเหตุ ขโมยแมวไป</p>
        <button className='bg-[#FF5858] text-white px-4 py-1 m-2'>กลับไปหน้าเลือกโรงพยาบาล</button>
        
        <Link to={`/`}>
            <button className='bg-white border-[#FF5858] border-2 text-[#FF5858] px-4 py-1'>ยกเลิก และ กลับสู่หน้าหลัก</button>
        </Link>
        

    </div>
  )
}

export default  FailComponent