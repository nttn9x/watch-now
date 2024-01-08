import { NavLink } from "react-router-dom";
import clsx from "clsx";

import GithubIcon from "@hello/assets/github.svg";
import LogoIcon from "@hello/assets/logo.svg";
import { APP_URLS } from "@hello/constants/navigation.constant";

const styles = {
  header: clsx(
    "bg-white dark:bg-black flex py-4 px-8 items-center sticky top-0 h-[64px] z-50"
  ),
  logo: "h-[32px]",
  nav: "flex-1 text-white ml-10 flex items-center",
  link: "text-white-500 font-medium",
  linkSelected: "text-primary-500 font-medium",
};

function Header() {
  return (
    <header data-testid="header" className={styles.header}>
      <img data-testid="logo" className={styles.logo} src={LogoIcon} />

      <nav data-testid="nav" className={styles.nav} aria-label="Menu">
        <NavLink
          className={({ isActive }) =>
            clsx(styles.link, {
              [styles.linkSelected]: isActive,
            })
          }
          data-testid="movies"
          to={APP_URLS.Movies}
          aria-label="Movies Link"
        >
          Movies
        </NavLink>
        <div className="mx-2"></div>
        <NavLink
          className={({ isActive }) =>
            clsx(styles.link, {
              [styles.linkSelected]: isActive,
            })
          }
          data-testid="series"
          to={APP_URLS.Series}
          aria-label="Series Link"
        >
          Series
        </NavLink>
      </nav>

      <a
        data-testid="github"
        aria-label="Github Link"
        href="https://github.com/nttn9x/watch-now"
        target="_blank"
      >
        <img className={styles.logo} src={GithubIcon} />
      </a>
    </header>
  );
}

export default Header;
