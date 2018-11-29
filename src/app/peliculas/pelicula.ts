export interface Pelicula {
    data: Pelicula;
    id: number;
    title: string;
    title_origin?: string;
    description: string;
    ano: string;
    duration: number;
    image: string;
    url_origin: string;
    state: number;
    director: [any];
    genres: [any];
    actors: [any];
    calidad: string;
    extid: string;
    tmdb_id: number;
    imdb_id: string; 
    image_bg: string;
    rating_tmdb: number;
    rating_imdb: number;
    vote_count_tmdb: number;
    vote_count_imdb: number;
    release_date: string;
    budget: number;
    revenue: number;
}

/////Datos Peliculas de Tmdb
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

export interface Crew {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface MovieTmdb {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
}
