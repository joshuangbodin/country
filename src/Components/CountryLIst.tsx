import { uniType } from "../Company";

import CountryCard from "./CountryCard";
interface Props {
  data: uniType[] | undefined;
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
          <p className=" text-red-700 text-xl font-bold">no Result</p>
        )}
      </div>
    </div>
  );
};

export default CountryLIst;
