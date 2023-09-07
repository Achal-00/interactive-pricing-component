import React from "react";
import Main from "./Main/Main";

export default function App() {
  return (
    <section className="font-manrope min-h-[100dvh] grid bg-main-background text-mobile-font laptop:text-desktop-font">
      <img
        src="bg-pattern.svg"
        alt=""
        className="h-[50dvh] w-full col-start-1 col-end-2 row-start-1 row-end-2"
      />
      <Main />
    </section>
  );
}
