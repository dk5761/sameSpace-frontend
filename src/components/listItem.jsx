import React from "react";
import { secondsToMinutes } from "../lib/utils";

const ListItem = ({ details }) => {
  return (
    <div className="w-full flex justify-between p-4">
      <div className="flex justify-start flex-[2] max-w-[80%]">
        <img src={details.photo} className="w-12 h-12 rounded-[50%]" />
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
