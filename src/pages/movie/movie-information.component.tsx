import { useTranslation } from "react-i18next";
import { Image, Typography } from "@hello/components/atoms";
import {
  Genre,
  Movie,
  ProductionCompany,
  SpokenLanguage,
} from "@hello/models/movie.model";
import { Credit } from "@hello/models/credit.model";
import clsx from "clsx";

const styles = {
  container: "flex flex-col gap-12 p-8",
  section: "flex flex-col gap-4",
  row: "flex gap-2 flex-wrap",
  chip: "bg-gray-700 py-1 px-4 rounded-sm relative",
  cast: "overflow-x-scroll flex-nowrap",
  castItem: "bg-gray-700 rounded-lg relative",
  castItemImage: "max-w-none w-44 h-60 rounded-lg",
  castItemName:
    "absolute bottom-0 left-0 w-full px-2 py-2 text-center bg-black/70",
};

interface MovieInformationProps {
  movie: { loading: boolean; data?: Movie | null };
  credits: { loading: boolean; data?: { cast: Credit[] } | null };
}

function MovieInformation({ movie, credits }: MovieInformationProps) {
  const { t } = useTranslation();

  if (movie.loading || !movie) {
    return null;
  }

  return (
    <div
      data-testid="information"
      className={styles.container}
      aria-label="Movie Information"
    >
      <section className={styles.section}>
        <Typography variant="h4" color="textPrimary">
          {t("series_cast")}
        </Typography>
        <div className={clsx(styles.row, styles.cast)}>
          {credits.data?.cast?.map((credit: Credit, index: number) => (
            <div
              data-testid="cast-item"
              key={index}
              className={styles.castItem}
            >
              <Image
                className={styles.castItemImage}
                src={import.meta.env.VITE_IMAGE_URL + credit.profile_path}
                alt={credit.original_name}
                aria-label={credit.original_name}
              />
              <div className={styles.castItemName}>
                <Typography variant="body2">{credit.name}</Typography>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" color="textPrimary">
          {t("companies")}
        </Typography>
        <div className={styles.row}>
          {movie.data?.production_companies?.map(
            (company: ProductionCompany, index: number) => (
              <div
                key={index}
                data-testid="company-name"
                className={styles.chip}
              >
                <Typography className="display-inline" variant="body">
                  {company.name}
                </Typography>
              </div>
            )
          )}
        </div>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" color="textPrimary">
          {t("languages")}
        </Typography>
        <div className={styles.row}>
          {movie.data?.spoken_languages?.map((genre: Genre, index: number) => (
            <div key={index} className={styles.chip}>
              <Typography data-testid="country-name" variant="body">
                {genre.name}
              </Typography>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <Typography variant="h4" color="textPrimary">
          {t("keywords")}
        </Typography>
        <div className="flex gap-2">
          {movie.data?.genres?.map(
            (language: SpokenLanguage, index: number) => (
              <div key={index} className={styles.chip}>
                <Typography data-testid="genre-name" variant="body">
                  {language.name}
                </Typography>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default MovieInformation;
