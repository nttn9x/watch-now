import clsx from "clsx";

interface SkeletonProps extends React.HTMLAttributes<HTMLElement> {}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div data-testid="skeleton" className="animate-pulse h-full w-full">
      <div
        className={clsx("rounded-lg bg-slate-700 h-full w-full", className)}
      ></div>
    </div>
  );
}

export default Skeleton;
