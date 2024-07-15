import "./ImageGenerator.css";
import default_image from "../assets/default_image.svg";
import { useState } from "react";
import { useRef } from "react";

function ImageGenerator() {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") return 0;
  };
  const response = await fetch();

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
        <div className="img-loading">
          <div className="image">
            <img
              style={{ width: "400px", height: "400px" }}
              src={image_url === "/" ? default_image : image_url}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="search-input"
          ref={inputRef}
          placeholder="Describe what you want to see"
        />
        <div className="generate-btn">Generate</div>
      </div>
    </div>
  );
}

export default ImageGenerator;
