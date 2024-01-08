import { Credit } from "@hello/models/credit.model";
import { callApi } from "@hello/utils/service.util";

interface ResultResponse {
  data?: { cast: Credit[] };
}

export async function getCreditsByMovieId(movieId: string) {
  return await callApi<ResultResponse>({
    url: `movie/${movieId}/credits`,
    method: "GET",
  });
}
