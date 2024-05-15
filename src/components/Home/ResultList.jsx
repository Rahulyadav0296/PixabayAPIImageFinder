import React from "react";
import "./ResultList.css";
function ResultList({ images }) {
  return (
    <div className="resultList-container">
      {images.map((image) => (
        <img key={image.id} src={image.largeImageURL} alt="Image of Pixabay" />
      ))}
    </div>
  );
}

export default ResultList;
