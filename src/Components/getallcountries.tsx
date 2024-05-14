import { ChangeEvent } from "react";


interface Props{
    HandleClick : ()=>void;
    HandleChange: (e:ChangeEvent<HTMLInputElement>)=> void;
    id:string;
}

const GetAllCountries = ({HandleClick, HandleChange, id}: Props) => {
  return (
    <div id={id} className=" w-full h-20 flex justify-center md:justify-start gap-6 md:ml-32 mt-32">
        
        <input id = "search" type="search" onChange={HandleChange} placeholder="search by country name" className="md:h-12 h-8 rounded p-1  "  />
        <button
        className="bg-slate-800 rounded-md text-white h-8 md:h-12 md:w-52 w-40 hover:bg-slate-900 "
        onClick={HandleClick}
      >
         
        get all Countries
      </button>
    </div>
  )
}

export default GetAllCountries