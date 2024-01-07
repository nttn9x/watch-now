import "react-horizontal-scrolling-menu/dist/styles.css";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import ArrowIcon from "@hello/assets/arrow.png";

function Arrow({
  children,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick: VoidFunction;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export function LeftArrow() {
  const {
    getPrevElement,
    isFirstItemVisible,
    scrollToItem,
    visibleElements,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  // NOTE: for scroll 1 item
  const clickHandler = () => scrollToItem(getPrevElement(), "smooth", "start");
  return (
    <Arrow disabled={disabled} onClick={clickHandler}>
      <img
        alt="Arrow Left"
        className="opacity-70"
        aria-label="back"
        src={ArrowIcon}
      />
    </Arrow>
  );
}

export function RightArrow() {
  const { getNextElement, isLastItemVisible, scrollToItem, visibleElements } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  const clickHandler = () => scrollToItem(getNextElement(), "smooth", "end");

  return (
    <Arrow disabled={disabled} onClick={clickHandler}>
      <img
        alt="Arrow Right"
        className="rotate-180 opacity-70"
        aria-label="next"
        src={ArrowIcon}
      />
    </Arrow>
  );
}

interface MoviesTopRated {
  children: React.ReactNode;
}

function MoviesTopRated({ children }: any) {
  return (
    <ScrollMenu
      data-testid="scroll-menu"
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      options={{
        ratio: 0.9,
        rootMargin: "5px",
        threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
      }}
    >
      {children}
    </ScrollMenu>
  );
}

export default MoviesTopRated;
