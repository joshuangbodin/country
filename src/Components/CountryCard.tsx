import { Link } from "react-router-dom";
import { formatPopulation } from "../utilities/populationFormat";


interface Props{
    key  :number;
    flag: string;
    name: {common: string , official:string};
    capital: string[];
    continents: [string];
    population: number;
}

const CountryCard = ({flag,name,capital,continents,population}: Props) => {
  return (
    <div className="w-5/6 bg-slate-800 text-white md:w-1/4 lg:w-1/5 p-1 rounded-xl shadow-xl font-worksans hover:bg-slate-900 ">
        <Link to={`/country/${name.common}`}>
        <div  ><img src={flag} className=" rounded-xl w-full h-52 object-cover" alt="" /></div>
        <div className=" ml-2">
            <h3><strong>Name: </strong>{name.common}</h3>
            <p><strong>Capital: </strong>{capital}</p>
            <p><strong>Continent: </strong> {continents}</p>
            <p><strong>Population: </strong>{formatPopulation( population)}</p>
        </div></Link>
    </div>
  )
}

export default CountryCard