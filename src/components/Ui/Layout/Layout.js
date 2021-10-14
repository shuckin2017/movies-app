import React from "react";
import Footer from "../Footer";
import Header from "../Header";

export const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col w-full flex-1 pt-10 pb-16">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
