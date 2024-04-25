import React from "react";
import "./Article.scss";

export default class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      inputValue: "",
      results: [],
    };
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
}
  fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  };

  componentDidMount() {
    this.fetchPosts().then((posts) => {
      this.setState({ posts: posts });
      this.handler();
    });
  }

  handler = () => {
    const { inputValue, posts } = this.state;
    let filteredPosts = posts;

    if (inputValue) {
      filteredPosts = posts.filter((obj) =>
        JSON.stringify(obj.title).includes(inputValue)
      );
    }

    this.setState({ results: filteredPosts });
};

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="article-container">
        <div className="searchBar">
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              placeholder="Wyszukaj..."
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handler}>Submit!</button>
          </form>
        </div>

        <div id="posts">
          {this.state.results.map((post, index) => (
            <div className="singlePost" key={index}>
              <h3>Tytuł: {post.title}</h3>
              <p>Treść: {post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
