import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Country from "./pages/country";
import NavBar from "./Components/NavBar";

type Props = {};

const App = ({}: Props) => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country" element={<Country />}></Route>
        <Route path="/country/:name" element={<Country/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
