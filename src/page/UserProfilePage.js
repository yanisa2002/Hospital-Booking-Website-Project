
import { React, useState } from 'react';

function UserProfilePage() {

  return (
    <div className=" bg-uColor-bg font-prompt min-w-[800px] h-screen px-20  ">
        <h1 className="font-bold text-2xl text-uColor-green py-4 px-24">บัญชีผู้ใช้</h1>
        <div className='flex justify-center '>
            <div className='bg-white w-[50rem] rounded flex  justify-center p-8'>
                <div className='hidden-overflow w-28 h-28'>
                    <img className='w-full h-full rounded-full' src='https://i.pinimg.com/originals/01/6f/72/016f72c5812e1b8f71bdbf19d8c7558b.jpg' alt=''/>
                </div>
                <div className='pl-10'>
                    <p>เลขประจำตัวประชาชน : 9876543210001</p>
                    <p>ชื่อ : นายสมศักดิ์</p>
                    <p>นามสกุล : สมกับความเป็นชาย</p>
                    <p>เบอร์โทรศัพท์ : 0987654001</p>
                    <p>อีเมล : testing_staff@gmail.com</p>
                    <p>วันเกิด :2022-11-20T15</p>

                </div>

            </div>

        </div>
    </div>
  )
}

export default UserProfilePage