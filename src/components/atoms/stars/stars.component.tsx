import ReactStars from "react-stars";

interface StarProps extends React.HTMLAttributes<HTMLElement> {
  count?: number;
  value?: number;
  size?: number;
  edit?: boolean;
  onChange?: () => void;
}

function Star(props: StarProps) {
  return <ReactStars {...props} color2={"#ffd700"} />;
}

Star.defaultProps = {
  count: 5,
  size: 14,
  edit: false,
};

export default Star;
