import { useEffect, useState } from "react";

import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpComing,
} from "@hello/services/movie.service";
import { Movie } from "@hello/models/movie.model";
import { MovieType } from "./movies.constant";

function useMoviesHook(type: MovieType) {
  const [state, setState] = useState<{
    loading: boolean;
    data: Movie[] | null | undefined;
  }>({
    loading: true,
    data: null,
  });
  useEffect(() => {
    const loadData = async () => {
      let res;
      switch (type) {
        case MovieType.Popular:
          res = await getPopular();
          break;
        case MovieType.NowPlaying:
          res = await getNowPlaying();
          break;
        case MovieType.UpComing:
          res = await getUpComing();
          break;
        default:
          res = await getTopRated();
      }

      setState({ loading: false, data: res.result?.data?.results });
    };

    loadData();
  }, [type]);

  return state;
}

export default useMoviesHook;
