import Typography from "@hello/components/atoms/typography/typography.component";

function NoMatch() {
  return (
    <div className="p-12">
      <Typography data-testid="content">NOT FOUND</Typography>
    </div>
  );
}

export default NoMatch;
