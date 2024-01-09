import React, { useRef } from "react";

import CloseIcon from "@hello/assets/close.svg";

interface DialogProps extends React.HTMLAttributes<HTMLElement> {
  /** The state of dialog. */
  visible?: boolean;
  /** The OnClose event occurs when the dialog is closed */
  onClose: (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => void;
}

const styles = {
  root: "w-screen h-screen absolute top-0 left-0 z-50 bg-black/70 pt-4",
  body: "w-9/12 h-full bg-white dark:bg-stone-950 m-auto rounded-t-lg overflow-hidden relative",
  closeButton: "absolute top-4 right-4 z-20 rounded-full bg-gray-950/60 p-2",
};

function Dialog({ visible, onClose, children }: DialogProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const onClickSomewhere = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
  ) => {
    if (modalRef?.current?.contains(e.target as Node)) {
      return;
    }
    onClose(e);
  };

  return (
    <>
      {visible ? (
        <div
          data-testid="dialog"
          aria-label="Dialog"
          className={styles.root}
          onClick={onClickSomewhere}
        >
          <div className={styles.body} ref={modalRef}>
            <button
              data-testid="close-button"
              className={styles.closeButton}
              aria-label="Close Button"
              onClick={onClose}
            >
              <img className="w-4 h-4" src={CloseIcon} />
            </button>
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Dialog;
