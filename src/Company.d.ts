
//uni type for unary country item
export interface uniType{
    altSpellings: string[];
    area: number;
    borders: string[];
    capital: string[]
    cca2: string;
    cca3: string;
    coatOfArms: {png: 'https://mainfacts.com/media/images/coats_of_arms/md.png', svg: 'https://mainfacts.com/media/images/coats_of_arms/md.svg'}
    continents: [string]
    currencies: {name:{name:string , symbol:string}};
    flags:{png :"" , svg:""}
    independent: boolean;
    Languages: object;
    population: number;
    region: string;
    timezones: [""]
    name:
    {common: 'Moldova', official: 'Republic of Moldova'};
}