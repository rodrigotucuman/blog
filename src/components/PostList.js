import React,  {Component} from 'react'
import Post from './Post'
class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts, loading, error } = this.props.posts;

    if(loading) {
      return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

     return (
         <div>
            <h1>
            Posts
            </h1>
             <ul>
                 {
                    posts.map(post => <Post key={post.id} {...post} />)
                 }
             </ul>
         </div>

     )
  }
}

export default PostList
