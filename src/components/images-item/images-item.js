import React from "react";
const ImagesItem = ({ item, id }) => {
  return (
    <li className="images__list-item" key={id}>
      <img
        className="images__list-img"
        src={item.src.landscape}
        alt={item.alt}
      />
      <h3 className="images__list-author">{item.photographer}</h3>
      <div className="images__list-views">
        <a
          className="images__list-view"
          target="_blank"
          href={item.src.original}
        >
          Large
        </a>
        <a className="images__list-view" target="_blank" href={item.src.large}>
          Original
        </a>
      </div>
    </li>
  );
};
export default ImagesItem;
