import ReactStars from "react-stars";

interface StarProps extends React.HTMLAttributes<HTMLElement> {
  count?: number;
  value?: number;
  size?: number;
  edit?: boolean;
  onChange?: () => void;
}

function Stars(props: StarProps) {
  return <ReactStars data-testid="stars" color2={"#ffd700"} {...props} />;
}

Stars.defaultProps = {
  count: 5,
  size: 14,
  edit: false,
};

export default Stars;
