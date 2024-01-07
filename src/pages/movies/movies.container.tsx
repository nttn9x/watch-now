import MoviesList from "./movies-list.component";
import { MovieType } from "./movies.constant";
import Movie from "../movie/movie.container";

const styles = {
  root: "mt-8 flex flex-col gap-12",
};

function Movies() {
  return (
    <>
      <div className={styles.root}>
        <MoviesList
          label="top_rated"
          type={MovieType.TopRated}
          styles={{
            movieCard: "w-[350px] h-[500px]",
          }}
        />
        <MoviesList label="now_playing" type={MovieType.NowPlaying} />
        <MoviesList label="popular" type={MovieType.Popular} />
        <MoviesList label="upcoming" type={MovieType.UpComing} />
      </div>
      <Movie />
    </>
  );
}

export default Movies;
