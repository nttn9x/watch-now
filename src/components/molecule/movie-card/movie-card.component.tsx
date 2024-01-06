import clsx from "clsx";
import React from "react";
import { Movie } from "@hello/models/movie.model";
import { Image } from "@hello/components/atoms";

interface MovieCardProps extends React.HTMLAttributes<HTMLElement> {
  movie: Movie;
}

const styles = {
  container:
    "mx-2 flex items-end w-[230px] h-[350px] relative px-12 py-20 rounded-lg overflow-hidden hover:cursor-pointer",
  image: "w-full h-full absolute top-0 left-0",
};

function MovieCard({ movie, className, ...rest }: MovieCardProps) {
  return (
    <div
      data-testid="card"
      className={clsx(styles.container, className)}
      {...rest}
    >
      <Image
        className={styles.image}
        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
        alt={movie.title}
        aria-label={movie.title}
      />
    </div>
  );
}

export default MovieCard;
