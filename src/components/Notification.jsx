import React from "react";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img src={notification1} width={44} height={64} />
      <div>
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
      </div>
    </div>
  );
};

export default Notification;
