import React from 'react'

function BookCard(props) {
    const{toggle} = props


  return ( 
    <div className='grid grid-cols-4  w-[60rem] h-7 bg-uColor  text-sm'>
        <div className='flex justify-center items-center'>1/11/2022</div>
        <div className='flex justify-center items-center'>9:00 - 9:30น</div> 
        <div className='flex justify-center items-center'>ปานกลาง</div>
        <div className='flex justify-end items-center px-3'>

        <button onClick={toggle} className='bg-uColor-green text-white px-3'>
                จอง
        </button>

        </div>
    </div>
  )
}

export default BookCard