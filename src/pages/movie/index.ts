import { lazy } from "react";

const Movie = lazy(() => import("./movie.container"));

export default Movie;
