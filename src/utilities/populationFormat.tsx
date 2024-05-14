export const formatPopulation = (p:any) => {
  const data = Intl.NumberFormat("de-DE" , undefined).format(p);
  return data;
};
