import { useEffect } from "react";

export default function Slider(props) {
  useEffect(() => {
    progressHandler();
  }, [props.duration]);

  function progressHandler() {
    const sliderValue = document.querySelector(".slider").value;
    document.querySelector(
      ".slider"
    ).style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${sliderValue}%, hsl(224, 65%, 95%) ${sliderValue}%)`;
    if (props.duration) {
      switch (sliderValue) {
        case "0":
          props.setAmount(50);
          props.setViews(25);
          break;
        case "25":
          props.setAmount(122);
          props.setViews(50);
          break;
        case "50":
          props.setAmount(182);
          props.setViews(100);
          break;
        case "75":
          props.setAmount(352);
          props.setViews(150);
          break;
        case "100":
          props.setAmount(501);
          props.setViews(200);
          break;
        default:
          break;
      }
    } else {
      switch (sliderValue) {
        case "0":
          props.setAmount(5);
          props.setViews(25);
          break;
        case "25":
          props.setAmount(11);
          props.setViews(50);
          break;
        case "50":
          props.setAmount(16);
          props.setViews(100);
          break;
        case "75":
          props.setAmount(31);
          props.setViews(150);
          break;
        case "100":
          props.setAmount(51);
          props.setViews(200);
          break;
        default:
          break;
      }
    }
  }

  return (
    <div className="laptop:col-start-1 laptop:col-end-3">
      <input
        type="range"
        min="0"
        max="100"
        step="25"
        className="w-full appearance-none cursor-pointer h-[1em] bg-empty-slider-bar rounded-full slider"
        onInput={progressHandler}
      />
    </div>
  );
}
