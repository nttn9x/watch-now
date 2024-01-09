import clsx from "clsx";
import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

import { APP_URLS } from "@hello/constants/navigation.constant";

import SearchIcon from "@hello/assets/search.svg";

const styles = {
  content: "flex-1 flex justify-between",
  contentNav: "text-white flex items-center",

  link: "text-white-500 font-medium",
  linkSelected: "text-primary-500 font-medium",
};

interface HeaderNavProps {
  toggleSearch: () => void;
}

const HeaderNav = forwardRef<HTMLDivElement, HeaderNavProps>(function HeaderNav(
  { toggleSearch },
  ref
) {
  return (
    <div
      ref={ref}
      data-testid="nav"
      className={styles.content}
      aria-label="Menu"
    >
      <nav className={styles.contentNav}>
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

      <button onClick={toggleSearch} type="button" aria-label="Search">
        <img className="h-6 w-6" alt="Search" src={SearchIcon} />
      </button>
    </div>
  );
});

export default HeaderNav;
