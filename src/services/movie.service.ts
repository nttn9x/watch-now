import { Movie } from "@hello/models/movie.model";
import { callApi } from "@hello/utils/service.util";

interface MovieParams {
  language?: string;
  page?: number;
}

interface MoviesResponse {
  data?: {
    results: Movie[];
  };
}

interface MovieResponse {
  data?: Movie;
}

const paramsDefault = {
  language: "us",
  page: 1,
};

export async function getNowPlaying(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<MoviesResponse>({
    url: "/movie/now_playing",
    method: "GET",
    params,
  });
}

export async function getTopRated(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<MoviesResponse>({
    url: "/movie/top_rated",
    method: "GET",
    params,
  });
}

export async function getPopular(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<MoviesResponse>({
    url: "/movie/popular",
    method: "GET",
    params,
  });
}

export async function getUpComing(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<MoviesResponse>({
    url: "/movie/upcoming",
    method: "GET",
    params,
  });
}

export async function getMovieById(id: string) {
  return await callApi<MovieResponse>({
    url: `/movie/${id}`,
    method: "GET",
  });
}
