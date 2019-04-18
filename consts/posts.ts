const posts: Array<Post> = []
for (let postId = 1; ; postId++) {
  try {
    const post = require(`./posts/${postId}`).default

    post.id = postId

    posts.push(post)
  } catch (err) {
    break
  }
}

const featuredPosts = posts.slice(-2).reverse()

export { posts, featuredPosts }
