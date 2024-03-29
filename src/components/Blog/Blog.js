import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from "../../containers/ShowBlog/ShowBlog";
import Spinner from "../Spinner/Spinner";
import { Container, Row } from "react-bootstrap";



export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
      },
      items: [],
      isloading: true,
      error: null
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alopezcontador";
    //"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@meriokids";

  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        // console.log(data.data)
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0);

        const title = data.data.feed.title;

        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avtar: avatar,

            },
            item: posts,
            isloading: false
          }),
          () => {
            console.log(this.state);
          }
        );
        // console.log(data, res);
      })
      .catch((e) => {
        this.setState({ error: e.toJSON() })
        console.log(e);
      });
  }
  render() {
   
    let post

    if (this.state.item) {
      post = this.state.item.map((post, index) => (
        <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
      ))
    }
    if (this.state.isloading) {
      post = <Spinner />
    }
    if (this.state.error) {
      let error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    return (
      <Container className="my-5 py-5">
        <Row>
          {/* {this.state.item.map((post, index) => (
          <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
        ))} */}

          {post}
          </Row>
      </Container>
    );
  }
}

export default Blog;