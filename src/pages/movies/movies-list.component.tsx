import { Typography } from "@hello/components/atoms";
import { Movie } from "@hello/models/movie.model";

import { MovieCard, ScrollMenu } from "@hello/components/molecule";
import { useTranslation } from "react-i18next";
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
  const { data } = useMoviesHook(type);

  return (
    <div>
      <Typography
        variant="h3"
        color="textSecondary"
        className="w-[500px] px-12 mb-4"
        data-testid={label}
        arial-aria-label={t(label)}
      >
        {t(label)}
      </Typography>
      <ScrollMenu>
        {(data! as Movie[])?.map((movie: Movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            className={styles?.movieCard}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

export default MoviesList;
