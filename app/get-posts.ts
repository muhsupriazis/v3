import postJson from './posts.json';

export async function getPosts() {
  const data = postJson.sort((firstYear, secendYear) => parseInt(secendYear.year) - parseInt(firstYear.year))
  .map((postsPerYear) => {
    const posts = postsPerYear.posts.sort((firstPost, secendPost) => new Date(secendPost.date).valueOf() - new Date(firstPost.date).valueOf());
    return {
      year: postsPerYear.year,
      posts
    }
  })
  return data;
}
