import { Movie } from "@hello/models/movie.model";
import { callApi } from "@hello/utils/service.util";

interface MovieParams {
  language?: string;
  page?: number;
}

const paramsDefault = {
  language: "us",
  page: 1,
};

export async function getNowPlaying(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<Movie>({
    url: "/movie/now_playing",
    method: "GET",
    params,
  });
}

export async function getTopRated(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<Movie>({
    url: "/movie/top_rated",
    method: "GET",
    params,
  });
}

export async function getPopular(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<Movie>({
    url: "/movie/popular",
    method: "GET",
    params,
  });
}

export async function getUpComing(options: MovieParams = {}) {
  const params = { ...paramsDefault, ...options };

  return await callApi<Movie>({
    url: "/movie/upcoming",
    method: "GET",
    params,
  });
}

export async function getMovieById(id: string) {
  return await callApi<Movie>({
    url: `/movie/${id}`,
    method: "GET",
  });
}
