import { useEffect, useState } from "react";

import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpComing,
} from "@hello/services/movie.service";
import { MovieType } from "./movies.constant";

function useMoviesHook(type: MovieType) {
  const [state, setState] = useState({
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
  }, [setState, type]);

  return state;
}

export default useMoviesHook;
