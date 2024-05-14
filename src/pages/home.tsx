import { ChangeEvent, useEffect, useState } from "react";
import CountryLIst from "../Components/CountryLIst";
import { api, SearchName } from "../api";
import { uniType } from "../Company";
import GetAllCountries from "../Components/getallcountries";

type Props = {};


const Home = ({}: Props) => {


  const [data, setData] = useState<uniType[]>();
  const [search, setSearch] = useState<string>();

  useEffect(
    ()=>{HandleClick()} , []
  )

  const HandleClick = () => {
    api.then((res) => {
      if (typeof res === undefined) {
      } else {
        console.log(res.data);
        setData(res.data);
      }
    });
  };

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    if (typeof search === "string") {
      const api = SearchName(search);
      api.then((res) => {
        if (typeof res === undefined) {
        } else {
          setData(res.data);
        }
      });
    }
  };

  return (
    <div>
      <div>
        
        <GetAllCountries
          HandleClick={HandleClick}
          HandleChange={HandleChange}
          id="search"
        />
        <CountryLIst data={data} />
      </div>
    </div>
  );
};

export default Home;
