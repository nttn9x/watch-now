import { callApi } from "@hello/utils/service.util";

export async function getCreditsByMovieId(movieId: string) {
  return await callApi({
    url: `movie/${movieId}/credits`,
    method: "GET",
  });
}
