import "react-horizontal-scrolling-menu/dist/styles.css";
import MoviesList from "./movies-list.component";
import { MovieType } from "./movies.constant";

function Movies() {
  return (
    <div className="mt-8 flex flex-col gap-12">
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
  );
}

export default Movies;
