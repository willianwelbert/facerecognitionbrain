import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f2 white ">
        {"This Magic Brain will detect faces in your pictures, give it a try!"}
      </p>
      <div className="center ">
        <div className="form center pa4 br3 ">
          <input
            className="f4 bn pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ba b--white ph3 pv2 dib white"
            style={{ background: "#f08080" }}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
