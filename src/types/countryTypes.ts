export type TCurrency = {
  "code": string,
  "name": string,
  "symbol": string
}

export type TLanguage = {
  "iso639_1": string,
  "iso639_2": string,
  "name": string,
  "nativeName": string
}

export type TRegionalBloc = {
  "acronym": string,
  "name": string,
  "otherAcronyms": string[],
  "otherNames": string[]
}

export type TCountry = {
  "name": string,
  "topLevelDomain": string[],
  "alpha2Code": string,
  "alpha3Code": string,
  "callingCodes": string[],
  "capital": string,
  "altSpellings": string[],
  "region": string,
  "subregion": string,
  "population": number,
  "latlng": [number, number],
  "demonym": string,
  "area": number,
  "gini": number,
  "timezones": string[],
  "borders": string[],
  "nativeName": string,
  "numericCode": string,
  "currencies": TCurrency[],
  "languages": TLanguage[],
  "translations": {
      [key: string]: string,
  },
  "flag": string,
  "regionalBlocs": TRegionalBloc[],
  "cioc": string
}