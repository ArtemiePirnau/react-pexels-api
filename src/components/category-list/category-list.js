import React from "react";
import { Link } from "react-router-dom";
import "./category-list.scss";

const CategoryList = () => {
  return (
    <ul className="category__list">
      <Link to="/" className="category__item">
        Main
      </Link>
      <Link to="/people" className="category__item">
        People
      </Link>
      <Link to="/nature" className="category__item">
        Nature
      </Link>
      <Link to="/art" className="category__item">
        Art
      </Link>
      <Link to="/coding" className="category__item">
        Coding
      </Link>
    </ul>
  );
};

export default CategoryList;
