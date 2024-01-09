import ReactStars from "react-stars";

interface StarProps {
  /** The number of star. */
  count?: number;
  /** The value of the component. */
  value?: number;
  /** The size of star. */
  size?: number;
  /** Deny/ Allow to interact with the component. */
  edit?: boolean;
  /** Will be invoked any time the rating is changed. */
  onChange?: ((new_rating: number) => void) | undefined;
}

function Stars(props: StarProps) {
  return <ReactStars data-testid="stars" color2={"#ffd700"} {...props} />;
}

Stars.defaultProps = {
  value: 0,
  count: 5,
  size: 14,
  edit: false,
};

export default Stars;
