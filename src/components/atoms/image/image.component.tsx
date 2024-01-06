import clsx from "clsx";
import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const styles = {
  image: "bg-slate-900",
};

function Image({ className, ...rest }: ImageProps) {
  return (
    <img
      data-testid="image"
      loading="lazy"
      className={clsx(styles.image, className)}
      {...rest}
    />
  );
}

export default Image;
