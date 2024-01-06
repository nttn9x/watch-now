import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Typography } from "@hello/components/atoms";
import Skeleton from "@hello/components/atoms/skeleton";
import { MovieCard, ScrollMenu } from "@hello/components/molecule";
import { Movie } from "@hello/models/movie.model";
import { APP_URLS } from "@hello/constants/navigation.constant";

import useMoviesHook from "./movies-list.hook";
import { MovieType } from "./movies.constant";

interface MoviesListProps {
  label: string;
  type: MovieType;

  styles?: {
    movieCard?: string;
  };
}

function MoviesList({ label, type, styles }: MoviesListProps) {
  const { t } = useTranslation();
  const { data, loading } = useMoviesHook(type);

  return (
    <section>
      <Typography
        variant="h3"
        color="textSecondary"
        className="w-[500px] px-12 mb-4"
        data-testid={label}
        arial-aria-label={t(label)}
      >
        {t(label)}
      </Typography>
      {loading && (
        <div className="flex gap-4 px-12">
          <div className={styles?.movieCard || "w-[230px] h-[350px]"}>
            <Skeleton />
          </div>
          <div className={styles?.movieCard || "w-[230px] h-[350px]"}>
            <Skeleton />
          </div>
        </div>
      )}
      {!loading && (
        <ScrollMenu>
          {(data! as Movie[])?.map((movie: Movie) => (
            <Link to={`${APP_URLS.Movies}/${movie.id}`}>
              <MovieCard
                key={movie.id}
                movie={movie}
                className={styles?.movieCard}
              />
            </Link>
          ))}
        </ScrollMenu>
      )}
    </section>
  );
}

export default MoviesList;
