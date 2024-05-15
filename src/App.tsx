import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Country from "./pages/country";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";

export const  Context = React.createContext<boolean | any>(null) ;


type Props = {};

const App = ({}: Props) => {
  const [mode, setMode] = useState(false)
  return (
    <div className={mode?" w-full m-h-full h-auto bg-slate-100 absolute top-0":" w-full h-full bg-slate-950"}>
      <Context.Provider value={[mode, setMode]}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country" element={<Country />}></Route>
        <Route path="/country/:name" element={<Country/>}></Route>
      </Routes>
      </Context.Provider>
    </div>
  );
};

export default App;
