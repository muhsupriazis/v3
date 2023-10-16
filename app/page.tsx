import { A } from "./(post)/components/a";
import Posts from "./posts";

interface PostsType {
  year: string
  posts: {
    slug: string,
    title: string,
    date: string,
    category: string,
  }[]
}

async function getData() {
  const res = await fetch('https://v3-supri.vercel.app/api/posts', {
    cache: "no-cache"
  })
  return res.json()
}

export default async function Home() {
  const data : PostsType[] = await getData();

  function toLongDate(date : string) {
    const stringDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    return stringDate;
  }

  return (
    <>
      {data.map(posts => (
        <Posts key={posts.year} year={posts.year}>
          {posts.posts.map(post => (
            <div className="my-3" key={post.slug}>
              <A href={`/${posts.year}/${post.slug}`}>{post.title}</A>
              <p className="text-zinc-300 font-light text-sm">{toLongDate(post.date)} ~ {post.category}</p>
            </div>
          ))}
        </Posts>
      ))}
    </>
  );
}
