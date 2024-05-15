import { MoonIcon, SunIcon } from "lucide-react";
import { useContext, useState } from "react";
import { Context } from "../App";

interface Props {}

const NavBar = ({}: Props) => {
  const [toggleButton , setToggleButton] = useState<string>("1");
  const [mode , setMode] = useContext(Context)

  const toggle = ()=>{
    if(toggleButton === "1"){
      setToggleButton("6")
      setMode(!mode);
      console.log(mode)
    }
    else{
      setToggleButton("[1px]")
      setMode(!mode);
      console.log(mode)
    }
  }
  return (
    <div className={mode?"w-full flex gap-12  h-28 fixed  text-black justify-between items-center top-0 bg-slate-300":"w-full flex gap-12  h-28 fixed  text-white justify-between items-center top-0 bg-slate-900" }>
      <a href="/">
        <h3 className=" font-worksans text-xl uppercase font-bold p-4 ">
          Countries <p className="text-sm text-slate-600 ">by Joshua</p>{" "}
        </h3>
      </a>
      <div className="flex gap-2">
        {mode?<SunIcon />:<MoonIcon />}
        <span onClick={toggle} className={mode? `w-10 bg-green-900  pr-[1px] block h-6 rounded-full inset-3 mr-12  hover:bg-slate-500`: `w-10 bg-red-900  pr-[1px] block h-6 rounded-full inset-3   mr-12 hover:bg-slate-500`}>
            
        </span>
        
      </div>
    </div>
  );
};

export default NavBar;
