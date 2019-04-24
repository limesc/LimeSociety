const posts: Array<IPost> = []
for (let postId = 1; ; postId++) {
  try {
    const post = require(`./posts/${postId}`).default

    post.id = postId

    posts.push(post)
  } catch (err) {
    break
  }
}
posts.reverse()

export { posts }
