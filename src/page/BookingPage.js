import { React, useState } from 'react';
import { Link } from 'react-router-dom';


import { CardComponent } from '../component/Booking'
function BookingPage() {
  const [isOpenBook ,setIsOpenBook] = useState(false);
  const [isOpenTel ,setIsOpenTel] = useState(false);

  const toggleBooking = ()=>{
    setIsOpenBook(!isOpenBook);
    setIsOpenTel(false);
    if (setIsOpenBook) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden'
  } else {
      document.body.style.overflow = ''
  }
  };
  


  return (
    <div className=" bg-uColor-bg font-prompt min-w-[800px] h-screen flex flex-col items-center pt-7">
      {isOpenBook && (
      <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0">
        <div className='w-screen h-screen bg-black/70 absolute top-0 left-0' onClick={toggleBooking}></div>
        <form className="bg-white p-8 rounded absolute flex flex-col justify-center items-center min-w-[20rem]" onSubmit='' >
            
            <h1 className='font-semibold text-xl'>ใบจองคิว</h1>
            <p className='py-2'>โรงพยาบาล: </p>
            <div className='flex'>
              <input name ="Patient"  type="radio" value="oldPatient" onClick={(event) => setIsOpenTel(false)}/>
              <p className='pr-4'>ผู้ป่วยเก่า</p>
              <input name ="Patient" className='px-2' type="radio" value="newPatient"onClick={(event) => setIsOpenTel(true)}/>
              <p >ผู้ป่วยใหม่</p>
            </div>

            <p className='py-2'>วันที่ 1/11/2022</p>
            <p className='py-2'>เวลา 10:30 - 11:00น </p>
            {isOpenTel && (
              <div className='flex flex-col items-center'>
                <input className='border-2 border-uColor-green h-8 ' type="tel" placeholder='กรุณากรอกเบอร์โทรศัพท์'/>
                <div className='flex mt-4'>
                  <input type="checkbox"/>
                  <p className='text-sm '>ยินยอมให้ใช้ข้อมูลส่วนบุคคลตามนโยบายความเป็นส่วนตัว</p>
                </div>

              </div>
              
            )}
            <Link to={`/history/123`}>
            <button className="bg-uColor-green text-white p-2 disabled:opacity-50" >ดำเนินการต่อ</button>

            </Link>
            

          </form>
      </div>
      )}
        <div className='grid  grid-cols-4  w-[60rem] h-8 bg-uColor-green text-white font-medium'>
          <div className='flex justify-center items-center'>วันที่</div>
          <div className='flex justify-center items-center'>เวลา</div> 
          <div className=' flex justify-center items-center'>สถานะ</div>
        </div>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>
        <CardComponent toggle = {toggleBooking}/>


    </div>
  )
}

export default BookingPage