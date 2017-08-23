import React, {Component} from 'react'

class PostForm extends Component {



    render() {
        // const { post, loading, error } = this.props.newPost

        let title;
        let categories;
        let content;

        const handleSubmit = (e) => {
            e.preventDefault()
            let categories_x = categories.value.split(',')
            this.props.createx(title.value, categories_x, content.value)
        }




        // if(loading) {
        //   return <div className="container"><h3>creating...</h3></div>
        // } else if(error) {
        //   return <div className="alert alert-danger">Error: {error.message}</div>
        // } else if(post) {
        //    return <div>post created successfully</div>
        // }

        return (
            <div>
            <form onSubmit={handleSubmit}>
                <strong>title </strong>
                <br />
                <input ref={node => title=node} type="text" placeholder="title" />
                <br />
                <strong>categories</strong>
                <br />
                <input ref={node => categories=node} type="text" placeholder="categories (reac, redux)" />
                <br />
                <strong>Content</strong>
                <br />
                <textarea ref={node => content=node} placeholder="content" id="" cols="30" rows="10"></textarea>
                <button type="submit"> Create Post</button>
            </form>
            </div>
        )
    }
}

export default PostForm
