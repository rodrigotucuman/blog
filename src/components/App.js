import React , {Component} from 'react'
import PostListContainer from '../containers/PostListContainer'
import PostFormContainer from '../containers/PostFormContainer'
import '../App.css';
class App extends Component {
    render(){
        return (
            <div>
                 <PostListContainer />
            </div>
        )
    }
}

export default App
