import clsx from "clsx";
import { useMemo, useRef, useState } from "react";
import "./header.css";

import { Link } from "react-router-dom";
import { APP_URLS } from "@hello/constants/navigation.constant";
import { MovieCard } from "@hello/components/molecule";
import { search as searchMovie } from "@hello/services/movie.service";
import { Movie } from "@hello/models/movie.model";
import GithubIcon from "@hello/assets/github.svg";
import LogoIcon from "@hello/assets/logo.svg";

import HeaderNav from "./header-nav.component";
import HeaderSearch from "./header-search.component";

const styles = {
  container: clsx(
    "bg-white dark:bg-black flex flex-col gap-10 py-4 px-8 sticky top-0 h-[64px] z-50 relative"
  ),
  header: clsx("flex gap-4 w-full"),
  logo: "h-[32px]",
};

function Header() {
  const navRef = useRef<HTMLDivElement>(null);
  const [enableSearch, setEnableSearch] = useState<boolean>(false);
  const [filter, setFilter] = useState<{
    loading: boolean;
    data?: Movie[] | null | undefined;
  }>({
    loading: false,
    data: null,
  });

  const toggleSearch = () => {
    setEnableSearch((preState) => !preState);
  };

  const search = async (query: string) => {
    if (!query) {
      setFilter({ data: [], loading: false });
      return;
    }

    setFilter({ data: [], loading: true });

    const res = await searchMovie({ query });

    setFilter({ data: res?.result?.data?.results, loading: false });
  };

  const posSearch = useMemo(() => {
    if (!navRef.current) {
      return {};
    }

    return {
      left: navRef.current.offsetLeft,
      width: navRef.current.offsetWidth,
      height: 60,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navRef?.current]);

  return (
    <div
      className={clsx(styles.container, {
        ["bottom-0 h-screen w-full bg-white !fixed items-baseline"]:
          enableSearch,
      })}
    >
      <header className={styles.header} data-testid="header">
        <img data-testid="logo" className={styles.logo} src={LogoIcon} />

        {enableSearch && (
          <HeaderSearch
            loading={filter.loading}
            onSearch={search}
            posSearch={posSearch}
            toggleSearch={toggleSearch}
          />
        )}
        <HeaderNav ref={navRef} toggleSearch={toggleSearch} />

        <a
          data-testid="github"
          aria-label="Github Link"
          href="https://github.com/nttn9x/watch-now"
          target="_blank"
        >
          <img className={styles.logo} src={GithubIcon} />
        </a>
      </header>
      <div className="flex-1 overflow-auto flex gap-4 justify-center flex-wrap">
        {filter.data?.map((movie: Movie) => (
          <Link
            data-testid={`link-${movie.id}`}
            key={movie.id}
            to={`${APP_URLS.Movies}/${movie.id}`}
          >
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
