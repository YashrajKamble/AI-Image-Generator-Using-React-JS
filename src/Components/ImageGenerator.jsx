import "./ImageGenerator.css";
import default_image from "../assets/default_image.svg";
import { useState } from "react";
import { useRef } from "react";

function ImageGenerator() {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer sk-None-H6oanCAddvQxgBBwHs7TT3BlbkFJyYqw060G5dfa8sFS4fsC",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "512x512",
        }),
      }
    );
    let data = await response.json();
    console.log(data);
  };

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
        <div
          className="generate-btn"
          onClick={() => {
            imageGenerator();
          }}
        >
          Generate
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;
