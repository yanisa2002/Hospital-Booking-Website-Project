import React from 'react'
import { Link } from 'react-router-dom'

import { CardComponent } from '../component/HistoryQueue'
function QueueHistory() {
  return (
    <div className=" bg-uColor-bg font-prompt min-w-[800px] h-screen px-20  ">
        <p className="font-bold text-2xl text-uColor-green py-4 px-24">ประวัติการจองคิว</p>
        <div className='flex flex-col items-center'>

              <Link to={`/history/123`}>
                <CardComponent/>
              </Link>

            
            <CardComponent/>
            <CardComponent/>
        </div>

    </div>
  )
}

export default QueueHistory