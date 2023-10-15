import { A } from "./components/a";

export default function PostLayout({children}) {
  return (
    <article>
      {children}
      <A href="/">cd ..</A>
    </article>
  );
}