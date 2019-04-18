import { default as post1 } from './posts/1'
import { default as post10 } from './posts/10'
import { default as post2 } from './posts/2'
import { default as post3 } from './posts/3'
import { default as post4 } from './posts/4'
import { default as post5 } from './posts/5'
import { default as post6 } from './posts/6'
import { default as post7 } from './posts/7'
import { default as post8 } from './posts/8'
import { default as post9 } from './posts/9'

const posts: Array<Post> = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10
]

posts.forEach((post, i) => {
  post.id = i + 1
  post.writer = 'Lime Society'
})

const featuredPosts = posts.slice(-2).reverse()

export { posts, featuredPosts }
