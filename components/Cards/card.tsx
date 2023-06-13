import React from "react";

interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <>
      <div className="relative flex flex-col break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className=" text-xl font-semibold">{title}</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">{content}</div>
      </div>
    </>
  );
}
