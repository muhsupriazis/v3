async function getData() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/posts`)
  return res.json()
}

export default async function Home() {
  const posts = await getData();
  
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
