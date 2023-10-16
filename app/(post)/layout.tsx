import { A } from "./components/a";

export default async function PostLayout({children}) {
  return (
    <article>
      {children}
      <A href="/">cd ..</A>
    </article>
  );
}