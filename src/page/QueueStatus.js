
import { React, useState } from 'react';

import { WaitComponent, SuccessComponent, FailComponent} from '../component/QueueStatus'
function QueueHistory() {
    const [status ,setStatus] = useState("wait");
  return (
    <div className=" bg-uColor-bg font-prompt min-w-[800px] h-screen flex justify-center p-5">
        {status === "wait" ?
          <WaitComponent/>:
          status === "success" ? 
         <SuccessComponent/>: 
         <FailComponent/> 
         }
        
    </div>
  )
}

export default QueueHistory