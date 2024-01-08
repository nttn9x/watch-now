import { Credit } from "@hello/models/credit.model";
import { Movie } from "@hello/models/movie.model";
import { getCreditsByMovieId } from "@hello/services/credit.service";
import { getMovieById } from "@hello/services/movie.service";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function useMovieHook() {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<{
    loading: boolean;
    data: Movie | undefined | null;
  }>({
    loading: true,
    data: null,
  });
  const [credits, setCredits] = useState<{
    loading: boolean;
    data: { cast: Credit[] } | null | undefined;
  }>({
    loading: true,
    data: null,
  });
  const movieId = params.id;

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const loadData = async () => {
      setMovie((prev) => ({ ...prev, loading: true }));

      const res = await getMovieById(movieId);

      setMovie({ loading: false, data: res.result?.data });
    };

    loadData();
  }, [setMovie, movieId]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const loadData = async () => {
      setCredits((prev) => ({ ...prev, loading: true }));

      const res = await getCreditsByMovieId(movieId);

      setCredits({ loading: false, data: res.result?.data });
    };

    loadData();
  }, [setCredits, movieId]);

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return { movieId, movie, credits, handleClose };
}

export default useMovieHook;
