import React from "react";
import { Skeleton } from "./ui/skeleton";

const ListItemSkeleton = () => {
  return (
    <div className={"w-full flex justify-between p-4 cursor-pointer mb-3"}>
      <div className="flex justify-start flex-[2] max-w-[80%] ">
        <Skeleton className="w-14 h-14 rounded-[50%] bg-slate-800" />
        <div className="w-3/4 flex flex-col justify-center ml-4">
          <Skeleton className="w-3/4 h-4 mb-2 bg-slate-800" />
          <Skeleton className="w-3/5 h-4 mb-2  bg-slate-800" />
        </div>
      </div>

      <Skeleton className="w-10 h-4 mb-2  bg-slate-800 self-center" />
    </div>
  );
};

export default ListItemSkeleton;
