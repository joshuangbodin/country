//hooks imports
import { useContext, useEffect, useState } from "react";
//useParams hook import
import { useParams } from "react-router-dom";
//search Name import from api
import { SearchName } from "../api";
//type import
import { uniType } from "../Company";
//format Population import
import { formatPopulation } from "../utilities/populationFormat";
//context provider import
import { Context } from "../App";
//icon import
import { ArrowLeft } from "lucide-react";

interface Props {}

const Country = ({}: Props) => {
  //states and contexts
  const [info, setInfo] = useState<uniType>();
  const [mode] = useContext(Context);

  //accepting data from the url
  let { name }: any = useParams<string>();

  //rendering the page at load with stored data/info
  useEffect(() => {
    if (typeof name === undefined) {
    } else {
      const data = SearchName(name);
      data
        .then((res) => {
          console.log(res.data[0]);
          setInfo(res.data[0]);
        })
        .catch();
    }
  }, []);

  //go back btn event handler
  const goback = () => {
    history.back();
  };
  return (
    <div
      className={
        mode
          ? "w-full  min-h-screen font-worksans flex flex-col justify-center items-center  text-black"
          : "w-full  min-h-screen font-worksans flex flex-col justify-center items-center  text-white"
      }
    >
      <div
        className={
          mode
            ? "w-5/6 p-12 min-h-screen  bg-slate-300 md:flex rounded-md gap-4 mt-32"
            : "w-5/6 p-12 min-h-screen  bg-slate-800 md:flex rounded-md gap-4 mt-32 "
        }
      >
        <div>
          <button
            className=" w-8 h-8 rounded-full hover:bg-slate-500 flex justify-center items-center"
            onClick={goback}
          >
            <ArrowLeft />
          </button>
        </div>
        <div>
          <h3
            className={
              mode
                ? " text-black font-bold uppercase mb-4 text-3xl"
                : " text-white font-bold uppercase mb-4 text-3xl"
            }
          >
            {info?.name.common}
          </h3>
          <div className=" flex flex-row md:flex-col gap-4 w-full md:w-2/3">
            <div>
              <p>
                <strong>Flag and Coat Of Arms:</strong>
              </p>
              <img
                className="w-full md:w-full  md:h-80 object-cover"
                src={info?.flags.svg}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full md:w-full md:h-auto object-cover"
                src={info?.coatOfArms.svg}
                alt="no image"
              />
            </div>
          </div>
        </div>
        <div className="p-3 w-full justify-center flex flex-col items center mt-12 md:mt-0 md:w-1/2">
          <p className="h-12 mb-0.5">
            <strong>Name:</strong> {info?.name.common} , {info?.name.official}
          </p>
          <p className="h-12 mb-0.5">
            <strong>Continent:</strong> {info?.continents}
          </p>
          <p className="h-12 mb-0.5">
            <strong>Capital:</strong> {info?.capital}
          </p>
          <p className="m-h-12  mb-0.5">
            <strong>Alt Spellings:</strong> {info?.altSpellings}
          </p>
          <p className="h-12 mb-0.5">
            <strong>cca2:</strong> {info?.cca2}
          </p>
          <p className="h-12 mb-0.5">
            <strong>Region:</strong> {info?.region}
          </p>
          <p className="h-12 mb-0.5">
            <strong>independent:</strong>{" "}
            {info?.independent ? <span>true</span> : <span>false</span>}
          </p>
          <p className="h-12 mb-0.5">
            <strong>Population:</strong> {formatPopulation(info?.population)}
          </p>
          <p className="h-12 mb-0.5">
            <strong>Area:</strong> {formatPopulation(info?.area)} KM2
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
