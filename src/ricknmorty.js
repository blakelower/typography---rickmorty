import React, { Component } from "react";
import axios from "axios";

class Ricknmorty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log(response.data.results);
        this.setState({ posts: response.data.results });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {posts.length
          ? posts.map(post => <div key={post.id}>{post.name}</div>)
          : null}
      </div>
    );
  }
}

export default Ricknmorty;
