import { Dialog, Image } from "@hello/components/atoms";
import Skeleton from "@hello/components/atoms/skeleton";
import { Movie } from "@hello/models/movie.model";
import { getMovieById } from "@hello/services/movie.service";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Container() {
  const params = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState<{ loading: boolean; movie: Movie | null }>(
    {
      loading: true,
      movie: null,
    }
  );
  const movieId = params.id;
  const { movie, loading } = state;

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const loadData = async () => {
      setState((prev) => ({ ...prev, loading: true }));

      const res = await getMovieById(movieId);

      setState({ loading: false, movie: res.result?.data });
    };

    loadData();
  }, [setState, movieId]);

  const handleClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Dialog visible={!!movieId} onClose={handleClose}>
      {loading && (
        <div className={"h-[500px] w-full"}>
          <Skeleton className="rounded-b-none" />
        </div>
      )}
      {!loading && movie && (
        <>
          <Image
            className={"h-[600px] w-full"}
            src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
            alt={movie.title}
            aria-label={movie.title}
          />
        </>
      )}
    </Dialog>
  );
}

export default Container;
