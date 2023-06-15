import React from "react";

interface CardProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}

export default function Card({ title, content, children }: CardProps) {
  return (
    <>
      <div className="flex-col break-words w-full shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="">
              <h2 className=" text-xl font-semibold">{title}</h2>
            </div>
          </div>
        </div>
        <div className="p-4">{content ? content : children}</div>
      </div>
    </>
  );
}
