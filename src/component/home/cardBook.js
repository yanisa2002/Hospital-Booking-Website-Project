import React from "react";
import { Link } from "react-router-dom";

function CardBook(props) {
  const{title, descript,newPage }=props;
  return (
    <div className="relative block w-3/5 p-2 bg-gray-900 group shadow-md mt-10 ">
      <div className="absolute inset-0 bg-white  flex justify-items-center p-5 group-hover:opacity-50">
      
      <img className='max-w-full bg-lime-100 p-1 mr-5' src={`/img/${title=='มีใบนัด'?'icons-A.png':'icons-notA.png'}`}/>
        <div className="w-full space-y-2">
        
            <p className="2xl:text-2xl md:text-base font-bold ">{title}</p>
            <p className="2xl:text-base md:text-sm ">{descript}</p>
        
          
        </div>
      </div>

  
      <div className="relative p-2 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
        <div className="p-5 px-10 text-center">
          <Link to={newPage}>
          <div className="w-full px-10 py-2 text-sm text-white bg-uColor-green hover:bg-green-700 hover:font-semibold cursor-pointer" onClick={()=>{}}>
            จองคิว
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardBook;
