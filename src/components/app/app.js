import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImagesList from "../images-list/images-list";
import CategoryList from "../category-list/category-list";
import NatureList from "../nature-list/nature-list";
import ArtList from "../art-list/art-list";
import CodingList from "../coding-list/coding-list";
import Main from "../main/main";
import "./app.scss";

//TODO: De optimizat codul

const App = () => {

  const types = {
    artType: "art",
    natureType: "nature",
    codingType: "coding",
    peopleType: "people",
  };

  return (
    <div className="app">
      <div className="container">
        <Router>
          <CategoryList />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/people"
              element={<ImagesList type={types.peopleType} />}
            />
            <Route
              path="/nature"
              element={<NatureList type={types.natureType} />}
            />
            <Route path="/art" element={<ArtList type={types.artType} />} />
            <Route
              path="/coding"
              element={<CodingList type={types.codingType} />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
};
export default App;
