import { useState } from "react";
import Slider from "./Slider";
import Selector from "./Selector";
import Pros from "./Pros";

export default function Content() {
  const [amount, setAmount] = useState(16);
  const [views, setViews] = useState(100);
  const [duration, setDuration] = useState(false);

  return (
    <div className="bg-white grid gap-[3em] p-[2em] rounded-[1em] shadow-xl laptop:grid-cols-2">
      <p className="text-main-text tracking-[0.2em] text-center laptop:self-center laptop:text-left">
        {views}K PAGEVIEWS
      </p>
      <Slider setAmount={setAmount} setViews={setViews} duration={duration} />
      <div className="flex gap-[0.2em] justify-self-center items-center laptop:justify-self-end laptop:col-start-2 laptop:col-end-3 laptop:row-start-1 laptop:row-end-2">
        <h1 className="text-[200%] font-extrabold text-text-cta-background laptop:text-[250%]">
          ${amount}
        </h1>
        <p className="text-main-text">/ {duration ? "year" : "month"}</p>
      </div>
      <Selector setDuration={setDuration} />
      <div className="w-full h-[0.01em] bg-main-text laptop:col-start-1 laptop:col-end-3"></div>
      <Pros />
      <button className="bg-text-cta-background w-4/6 m-auto text-cta-text hover:text-white rounded-full p-[1em] laptop:w-5/6">
        Start my trial
      </button>
    </div>
  );
}
