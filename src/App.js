import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'rgb(213, 185, 185)',
      textColor: 'black',
      posts: [],
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 4);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({
          users: data
        })
      })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(posts => posts.json())
      .then(posts => {
        const newPosts = posts.filter(post => post.id < 3 )
        this.setState ({
          posts : newPosts
        })
        
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient
          }
        ]
      }
    });
  }

  changeColorText(event){
    const newTextColor = event.target.value;
    this.setState({
        textColor:newTextColor
    })
  }

  displayAllUsers(event){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(users => users.json())
      .then(data => {
        this.setState({
          users:data
        })
      })
  }

  displayAllPosts(event){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(posts => posts.json())
    .then(data => {
      this.setState({
        posts:data
      })
    })

  }
  render() {
    return(
      <div className="app" style={{background: this.state.background,
                                    color: this.state.textColor
                                    }}>
        <div >
          <h1>Proiect React</h1>
          <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
          <UserList users={this.state.users}/>
          <div className='useri'>
            <input type="color" onChange={(event) => this.changeColor(event)}/>
            <button onClick={(event) => this.displayAllUsers(event)}>Afiseaza useri</button>
          </div>
        </div>                             
        <div >
          <PostList posts = {this.state.posts}/>
          <div className='postari'>
            <input type = "color" onChange = {(event) => this.changeColorText(event)}/>
            <button onClick={(event => this.displayAllPosts(event))}>Afiseaza postari</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
