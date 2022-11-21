
import { React, useState } from 'react';

import { SuccessComponent, FailComponent} from '../component/HistoryQueue'
function QueueHistory() {
    const [status ,setStatus] = useState("success");
  return (
    <div className=" bg-uColor-bg font-prompt min-w-[800px] h-screen flex justify-center p-5">
        {status === "success" ?
         <SuccessComponent/>: 
         <FailComponent/> 
         }
        
    </div>
  )
}

export default QueueHistory