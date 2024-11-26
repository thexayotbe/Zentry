import React from "react";

export const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs upeprcase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};
