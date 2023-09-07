import Header from "./Header";
import Content from "./Content";

export default function Main() {
  return (
    <section className="col-start-1 col-end-1 row-start-1 row-end-3 pt-[1em] pb-[1em] m-auto w-11/12 grid gap-[2em] tablet:w-3/6 xl:w-2/5">
      <Header />
      <Content />
    </section>
  );
}
