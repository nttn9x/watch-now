import "./header.css";
import { useTranslation } from "react-i18next";

import CloseIcon from "@hello/assets/close.svg";
import SearchIcon from "@hello/assets/search.svg";
import { useState } from "react";

const styles = {
  container: "absolute top-0 py-2 z-[100]",
  body: "rounded-lg bg-black border border-gray-500 flex h-full py-1 px-2 items-center",
  input: "outline-0 bg-transparent text-white h-full py-2 px-4",
  closeButton: "rounded-full bg-gray-500/60 p-2",
};

interface HeaderSearchProps {
  loading: boolean;
  posSearch?: {
    left?: number;
    width?: number;
    height?: number;
  };
  toggleSearch: () => void;
  onSearch: (query: string) => void;
}

let timeoutId: ReturnType<typeof setTimeout>;

function HeaderSearch({
  loading,
  onSearch,
  posSearch,
  toggleSearch,
}: HeaderSearchProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timeoutId);

    const newValue = e.target.value;
    setValue(newValue);

    timeoutId = setTimeout(() => {
      onSearch(newValue);
    }, 1000);
  };

  return (
    <div id="search" style={{ ...posSearch }} className={styles.container}>
      <div className={styles.body}>
        <button data-testid="search-icon" aria-label="Search Icon">
          <img className="h-6 w-6" alt="Search" src={SearchIcon} />
        </button>
        <div className="flex-1">
          <input
            disabled={loading}
            value={value}
            autoFocus
            className={styles.input}
            placeholder={t("whats_on_your_mind")}
            onChange={onValueChange}
          />
        </div>
        <button
          data-testid="close-button"
          className={styles.closeButton}
          aria-label="Close Search"
          onClick={toggleSearch}
        >
          <img className="h-3 w-3" alt="Search" src={CloseIcon} />
        </button>
      </div>
    </div>
  );
}

export default HeaderSearch;
