import { MoonIcon, SunIcon } from "lucide-react";
import { useContext, useState } from "react";
import { Context } from "../App";

interface Props {}

const NavBar = ({}: Props) => {
  const [toggleButton , setToggleButton] = useState<string>("[1px]");
  const [mode , setMode] = useContext(Context)

  const toggle = ()=>{
    if(toggleButton === "[1px]"){
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
        <MoonIcon />
        <span onClick={toggle} className={`w-12 bg-slate-600 pl-${toggleButton} pr-[1px] block h-6 rounded-full inset-3 `}>
          <span className="w-6 bg-slate-800 h-6 block rounded-full "></span>
        </span>
        <SunIcon className="mr-12"/>
      </div>
    </div>
  );
};

export default NavBar;
