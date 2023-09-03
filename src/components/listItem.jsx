import React from "react";
import { cn, secondsToMinutes } from "../lib/utils";

const ListItem = ({ details, selectedId, onClick }) => {
  return (
    <div
      className={cn(
        "w-full flex justify-between p-4 py-3 cursor-pointer hover:bg-white hover:bg-opacity-5 hover:rounded-lg mb-1",
        details._id == selectedId ? "bg-white bg-opacity-10 rounded-lg" : ""
      )}
      onClick={() => onClick(details)}
    >
      <div className="flex justify-start flex-[2] max-w-[80%]">
        <img
          src={details.photo}
          className="w-14 h-14 rounded-[50%] object-cover"
        />
        <div className="w-3/4 flex flex-col justify-start ml-4">
          <h3 className="text-white font-light text-lg  truncate overflow-hidden">
            {details.title}
          </h3>
          <h3 className="text-white font-light text-sm opacity-50">
            {details.artist}
          </h3>
        </div>
      </div>

      <h3 className="text-white font-light text-sm opacity-50 self-center flex-1 text-right">
        {secondsToMinutes(details.duration)}
      </h3>
    </div>
  );
};

export default ListItem;
