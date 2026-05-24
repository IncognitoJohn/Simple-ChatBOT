import Skeleton from "./Skeleton.jsx";

const BotMessageSkeleton = () => {
  return (
    <div className="flex w-full items-end gap-3">
      <Skeleton className="h-10 w-10 rounded-lg ring-1 ring-slate-200" />

      <div
        className="max-w-[80%] rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm sm:max-w-2xl"
        role="status"
        aria-label="Loading response"
      >
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-40 rounded-full" />
          <Skeleton className="h-4 w-72 max-w-full rounded-full" />
          <Skeleton className="h-4 w-56 max-w-full rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default BotMessageSkeleton;

