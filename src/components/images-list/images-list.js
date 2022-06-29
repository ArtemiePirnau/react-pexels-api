import React, { Component, Fragment } from "react";
import Spinner from "../spinner/spinner";
import ImagesItem from "../images-item/images-item";
import "./images-list.scss";

export default class ImagesList extends Component {
  _key = "563492ad6f917000010000014b1d202de4474f0785c79d6f263b7a45";
  _maxId = 0;

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.pexels.com/v1/search?query=${this.props.type}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this._key,
      },
    })
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.photos,
        });
      })
      .catch((err) => console.log(`Error is ${err}`));
  }

  render() {
    
    const { isLoaded, items } = this.state;

    const content = (
      <Fragment>
        <ul className="images__list">
          {items.map((item) => {
            return <ImagesItem item={item} key={this._maxId++} />;
          })}
        </ul>
      </Fragment>
    );
    if (!isLoaded) {
      return <Spinner />;
    } else {
      return content;
    }
  }
}
