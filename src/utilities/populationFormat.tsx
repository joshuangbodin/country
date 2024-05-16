//exporting fxn to format teh population
export const formatPopulation = (p:any) => {
  const data = Intl.NumberFormat("de-DE" , undefined).format(p);
  return data;
};
