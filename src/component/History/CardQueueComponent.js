import React from 'react'

//Import image
import demoPic from '../../asset/demo.jpg'

//Import icon
import { BsCheck2Circle } from 'react-icons/bs';

function CardQueueComponent(props) {

  return (
    <div className = "grid grid-cols-4 grid-rows-2 bg-white mb-4 p-2 text-lg rounded-xl w-[85rem] max-w-6xl">
        <div className='row-span-2 '>
            <div className='w-36 h-28 overflow-hidden flex items-center'>
                <img  alt='' src={demoPic}/>
            </div>
            
        </div>
        <div className='font-semibold'>โรงพยาบาล: </div>
        <div className='font-semibold'>วันที่นัด: </div>
        <div className='flex justify-center items-center'>
            <BsCheck2Circle color="text-uColor" fontSize="3.5rem"/>
            
        </div>
        <div className='font-semibold'>แผนก: </div>
        <div className='font-semibold'>เวลานัด: </div>
        <div className='text-sm flex flex-col items-center'>
            <p className='text-uColor"'>จองคิวสำเร็จ</p>
            <p>24-11-2565 10:30น.</p>
        </div>

    </div>
  )
}

export default CardQueueComponent