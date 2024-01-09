import { useTranslation } from "react-i18next";

import { Movie, ProductionCountry } from "@hello/models/movie.model";
import { Button, Image, Stars, Typography } from "@hello/components/atoms";
import Skeleton from "@hello/components/atoms/skeleton";
import LogoIcon from "@hello/assets/logo.svg";

const styles = {
  logo: "absolute top-6 left-6 z-20 h-6",
  skeleton: "h-[700px] w-full",
  container: "h-[700px] relative w-full z-10 flex flex-col justify-end gap-4",
  backdrop: "absolute h-full w-full top-0 left-0 z-0 object-cover",
  info: "h-full w-full z-10 bg-gradient-to-b from-transparent to-gray-100/50 dark:to-gray-950 flex flex-col p-8 justify-end gap-2",
  row: "flex gap-2",
};

interface MovieBannerProps {
  loading: boolean;
  data?: Movie | null;
}

function MovieBanner({ loading, data: movie }: MovieBannerProps) {
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className={styles.skeleton} data-testid="loading">
        <Skeleton className="rounded-b-none" />
      </div>
    );
  }

  // TODO: Create an 404 page for empty case
  const stars = !movie?.vote_average ? 0 : movie?.vote_average / 2;

  return (
    <div className={styles.container} data-testid="container">
      <img className={styles.logo} src={LogoIcon} />

      <Image
        data-testid="banner"
        className={styles.backdrop}
        src={import.meta.env.VITE_IMAGE_URL + movie?.backdrop_path}
        alt={movie?.title}
        aria-label={movie?.title}
      />
      <div
        data-testid="info"
        className={styles.info}
        aria-label="Movie Overview"
      >
        <Typography data-testid="info-title-label" variant="h2">
          {movie?.title}
        </Typography>
        <Typography
          data-testid="info-title-value"
          variant="body"
          color="textPrimary"
        >
          {movie?.overview}
        </Typography>
        <div className={styles.row}>
          <Typography
            data-testid="info-country-label"
            variant="body2"
            color="textSecondary"
          >
            {`${t("country")}:`}
          </Typography>
          <Typography
            data-testid="info-country-value"
            variant="body2"
            color="textSecondary"
          >
            {movie?.production_countries?.map(
              (country: ProductionCountry, index: number) => (
                <span key={index}>{country.name}</span>
              )
            )}
          </Typography>
        </div>
        <div className={styles.row}>
          <Typography
            data-testid="info-lng-label"
            variant="body2"
            color="textSecondary"
          >
            {`${t("original_language")}:`}
          </Typography>
          <Typography
            data-testid="info-lng-value"
            variant="body2"
            color="textSecondary"
          >
            {movie?.original_language}
          </Typography>
        </div>
        <Stars data-testid="info-stars" value={stars} />
        <Button
          className="w-48 mt-8"
          onClick={() => {
            alert("Have a nice day!!!");
          }}
        >
          {t("lets_enjoy")}
        </Button>
      </div>
    </div>
  );
}

export default MovieBanner;
