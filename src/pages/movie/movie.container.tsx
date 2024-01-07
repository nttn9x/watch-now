import useMovieHook from "./movie.hook";
import { Dialog } from "@hello/components/atoms";
import MovieBanner from "./movie-banner.component";
import MovieInformation from "./movie-information.component";

const styles = {
  skeleton: "h-[600px] w-full",
  container: "w-full h-full overflow-scroll",
  backdrop: "absolute h-full w-full top-0 left-0 z-0",
};

function Container() {
  const { movieId, movie, credits, handleClose } = useMovieHook();

  return (
    <Dialog visible={!!movieId} onClose={handleClose}>
      <div className={styles.container} aria-label="body-dialog">
        <MovieBanner {...movie} />
        <MovieInformation movie={movie} credits={credits} />
      </div>
    </Dialog>
  );
}

export default Container;
