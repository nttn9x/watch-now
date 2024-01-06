import React, { useRef } from "react";

interface DialogProps extends React.HTMLAttributes<HTMLElement> {
  visible?: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const styles = {
  root: "w-screen h-screen absolute top-0 left-0 z-50 bg-black/70 pt-4",
  body: "w-9/12 h-full bg-stone-950 m-auto rounded-t-lg overflow-hidden",
};

function Dialog({ visible, onClose, children }: DialogProps) {
  const modalRef = useRef<any>(null);

  return (
    <>
      {visible ? (
        <div
          data-testid="modal"
          aria-label="dialog"
          className={styles.root}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (modalRef?.current?.contains(e.target)) {
              return;
            }
            onClose(e);
          }}
        >
          <div className={styles.body} ref={modalRef}>
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
