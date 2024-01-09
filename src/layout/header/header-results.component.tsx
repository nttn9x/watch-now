import "./header.css";

import { Skeleton } from "@hello/components/atoms";
import { MovieCard } from "@hello/components/molecule";
import { APP_URLS } from "@hello/constants/navigation.constant";
import { Movie } from "@hello/models/movie.model";
import { Link } from "react-router-dom";

function HeaderResults({
  loading,
  data,
}: {
  loading: boolean;
  data?: Movie[] | null | undefined;
}) {
  return (
    <div className="flex-1 overflow-auto flex gap-4 justify-center flex-wrap">
      {loading && (
        <>
          <div className={"w-[230px] h-[350px]"}>
            <Skeleton />
          </div>
          <div className={"w-[230px] h-[350px]"}>
            <Skeleton />
          </div>
        </>
      )}
      {!loading &&
        data?.map((movie: Movie) => (
          <Link
            data-testid={`link-${movie.id}`}
            key={movie.id}
            to={`${APP_URLS.Movies}/${movie.id}`}
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
    </div>
  );
}

export default HeaderResults;
