import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(3000);
  const [intervalId, setIntervalId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    fetch("/api/images")
      .then((res) => res.json())
      .then(setImages);
  }, []);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    if (!isPaused) {
      const id = setInterval(() => {
        nextImage();
      }, intervalDuration);
      setIntervalId(id);

      return () => clearInterval(id);
    }
  }, [intervalDuration, images, isPaused]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const togglePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div className="slider-container">
        <label htmlFor="intervalDuration">Display time: </label>
        <input
          type="range"
          id="intervalDuration"
          min="1000"
          max="10000"
          step="500"
          value={intervalDuration}
          onChange={(e) => setIntervalDuration(e.target.value)}
        />
        <div className="control-buttons">
          <button className="control-button" onClick={previousImage}>
            &lt;
          </button>
          <button className="control-button" onClick={nextImage}>
            &gt;
          </button>
          <button className="pause-button" onClick={togglePause}>
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>
      </div>
      {images.length > 0 && (
        <img
          src={images[currentIndex]}
          alt="slideshow"
          className="slideshow-image"
        />
      )}
    </div>
  );
}

export default App;
