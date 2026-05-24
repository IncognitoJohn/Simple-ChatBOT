const cx = (...classes) => classes.filter(Boolean).join(" ");

const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      aria-hidden="true"
      className={cx("animate-pulse rounded-md bg-slate-300/70", className)}
      {...props}
    />
  );
};

export default Skeleton;

