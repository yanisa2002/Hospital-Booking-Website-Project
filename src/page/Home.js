import React from 'react'

function Home() {
  return (
    <div className="flex justify-center bg-uColor-bg font-prompt min-w-[800px] h-screen">
      <div className=" flex-col w-[70%] min-w-[800px]">
        <div className=' grid grid-cols-2'>
          <div className='mt-28'>
            <div className=' text-6xl font-bold'><p className=' mb-8'>จองคิวออนไลน์</p><p>กับ QHospital</p></div>
            <p className=' mt-14 text-lg font-medium'>ไม่ต้องเสียเวลานั่งรอเรียกตรวจอีกต่อไป<br/>กดจองคิว และ แจ้งเตือนเมื่อใกล้ถึงคิวของคุณ</p>
            
            <div className='mt-14'><button className='transition duration-500 ease-in-out bg-uColor-green text-[#ffff] p-3 px-10 transform hover:-translate-y-1 hover:scale-110'>จองคิว</button></div>
            </div>
          <div className='flex'><img className='max-w-none' src='/img/consultancy 1.png'/></div>
          </div>
          <div className='flex justify-center mt-40 '>
            <div  className=' justify-center'>
              <p className='text-2xl font-bold'>รูปแบบการจอง</p>
              <div className='w-full border-b'></div>
   
            </div>
          </div>
        </div>
        </div>
  )
}

export default Home