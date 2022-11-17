import React from 'react'
import FormInfo from '../component/bookingMA/formInfo'

function BookingMA() {
  return (
    <div className="flex flex-col justify-center bg-uColor-bg font-prompt min-w-[800px] h-full">
      <div className='text-center mt-12 mb-8'>
        <p className=' text-3xl font-bold mb-3'>ผู้ป่วยมีใบนัด</p>
        <p>กรุณากรอกข้อมูลให้ถูกต้อง และ ครบถ้วน</p>
      </div>
      <div className='flex justify-center'>
        <FormInfo/>
      </div>
      </div>
  )
}

export default BookingMA