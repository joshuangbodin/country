//type import
import { uniType } from "../Company";

import CountryCard from "./CountryCard";
interface Props {//passing the array that will be rendered
  data: uniType[] | undefined;//rem: data maybe undefined if there is no source to fetch from
}

const CountryLIst = ({ data }: Props) => {
  return (
    <div>
      <div className="w-full flex min-h-screen gap-12 flex-col md:flex-row items-center md:flex-wrap justify-center ">
        {data ? (
          data.map((datum, id) => (
            <CountryCard
              key={id}
              flag={datum.flags.svg}
              population={datum.population}
              capital={datum.capital}
              continents={datum.continents}
              name={datum.name}
            />
          ))
        ) : (
          <p className=" text-red-700 text-xl font-bold">Please Check your Network and try Again</p>
        )}
      </div>
    </div>
  );
};

export default CountryLIst;
