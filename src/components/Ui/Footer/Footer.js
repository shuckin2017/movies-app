import React from "react";

export const Footer = () => {
  return (
    <footer className="shadow">
      <div className="container mx-auto flex justify-between items-center pt-8 pb-8 ">
        <h5 className="text-white font-sans text-md font-normal">
          create{" "}
          <a
            href="https://github.com/shuckin2017"
            className="underline"
            target="_blank"
          >
            shuckin.io
          </a>
        </h5>
      </div>
    </footer>
  );
};
