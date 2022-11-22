import React,{useState} from 'react'
import ModalDetail from './ModalDetail';

function PNMAtable(props) {
    const [data,setData] =useState('');
    const [modalOn,setModalOn] = useState(false);   
    const [detail,setDetail] =useState('');
    const column = ['No.','วันที่-เวลา','วันที่-นัดหมาย','เวลา-นัดหมาย','เลขบัตรประชาชน','ชื่อ','นามสกุล','รายละเอียด'];


  return (
    <div className="overflow-auto h-[600px]  bg-uColor-table  shadow-md mt-10">
      
    <table className="w-full  text-sm  text-left  ">
      <thead className=" text-base text-white bg-uColor-green shadow-sm ">
        <tr>
      
        {column.map((item)=>
         <th className="py-3 px-6 font-normal">
         <div className="flex items-center">{item}</div>
       </th>
    )}
         
         
        </tr>
      </thead>
      <tbody>

          {/* row */}

          {/* {data.map((item,i)=>
        ( */}
          
          <tr className=" border-b border-uColor-green  text-left">
          <td className="py-4 px-6">1</td>
          <td className="py-4 px-2">01-11-2565 09:55</td>
          <td className="py-4 px-6">02-11-2565</td>
          <td className="py-4 px-6">10:30-11:00 น.</td>
          <td className="py-4 px-6">1111111111111</td>
          <td className="py-4 px-6">สมทรง</td>
          <td className="py-4 px-6">คงสิริ</td>

          
          <td className="flex py-4  space-x-2  text-center pl-5 ">                
                <button onClick={()=>{setModalOn(true)}} className='bg-uColor-green text-white p-2 hover:bg-uColor-green/80 focus:ring-4 focus:outline-none focus:ring-uColor-green/50 font-light  text-center inline-flex items-center'>รายละเอียด</button>
          </td>
        </tr>
{/*           
        //   )
        //   )}
         */}


      </tbody>
    </table>
  
  
        {modalOn&&<ModalDetail setModalOn={setModalOn} type='NMA'/>}
          
  </div>
  )
}

export default PNMAtable