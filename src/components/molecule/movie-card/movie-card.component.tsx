import { Movie } from "@hello/models/movie.model";
import clsx from "clsx";
import React from "react";

interface MovieCardProps extends React.HTMLAttributes<HTMLElement> {
  movie: Movie;
}

function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <div
      className={clsx(
        "mx-2 flex items-end w-[230px] h-[350px] relative h-full px-12 py-20 rounded-lg overflow-hidden hover:cursor-pointer",
        className
      )}
    >
      <img
        className="w-full h-full absolute top-0 left-0"
        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
      />
    </div>
  );
}

export default MovieCard;
