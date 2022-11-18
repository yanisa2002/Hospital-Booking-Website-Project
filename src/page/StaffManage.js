import React,{useState} from 'react'
import NPtable from '../component/staff/NPtable';
import PMAtable from '../component/staff/PMAtable';
import PNMAtable from '../component/staff/PNMAtable';

function StaffManage() {
  const [tabState, setTabState] = useState(1);
  return (
    <div className="flex justify-center bg-white  min-w-[800px] min-h-screen">
    <div className=" flex-col w-[90%]">
      <h1 className="lg:text-5xl md:text-4xl sm:text-35xl text-2xl  font-bold mb-7 mt-10  ">
      การจัดการคิว
      </h1>

      <div className='flex space-x-7 border-b'>
        <p className={`${tabState== 1 ?'staffTab-active':'staffTab'}`} onClick={()=>{setTabState(1)}}>ผู้ป่วยเก่ามีใบนัด</p>
        <p className={`${tabState== 2 ?'staffTab-active':'staffTab'}`} onClick={()=>{setTabState(2)}}>ผู้ป่วยเก่าไม่มีใบนัด</p>
        <p className={`${tabState== 3 ?'staffTab-active':'staffTab'}`} onClick={()=>{setTabState(3)}}>ผู้ป่วยใหม่</p>
      </div>

      <div className="mb-10">
      
        {tabState==1 &&<><PMAtable/></>}
        {tabState==2 &&<><PNMAtable/></>}
        {tabState==3 &&<><NPtable/></>}
      </div>

     
    </div>
  </div>
  )
}

export default StaffManage