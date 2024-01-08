import { Movie } from "@hello/models/movie.model";

export function movieFixture(props?: Movie) {
  const defaults: Movie = {
    id: new Date().getTime(),
    adult: false,
    backdrop_path: "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    genre_ids: [18],
    original_language: "en",
    original_title: "12 Angry Men",
    overview:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    popularity: 47.739,
    poster_path: "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    release_date: "1957-04-10",
    title: "12 Angry Men",
    video: false,
    vote_average: 8.546,
    vote_count: 7920,
  };

  return { ...defaults, ...(props || {}) };
}
