export interface ProductionCountry {
  name: string;
}
export interface Genre {
  name: string;
}

export interface SpokenLanguage {
  name: string;
}

export interface ProductionCompany {
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  production_countries?: ProductionCountry[];
  production_companies?: ProductionCompany[];
  genre_ids: number[];
  genres?: Genre[];
  id: number;
  spoken_languages?: SpokenLanguage[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
}
