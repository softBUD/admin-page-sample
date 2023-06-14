import React from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function admin() {
  return (
    <>
      <div className="flex flex-row h-screen">
        <Navbar />
        <Header />
      </div>
    </>
  );
}
