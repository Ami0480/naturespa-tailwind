import "./App.css";

import backgroundVideo from "./images/background-video.mp4";

function App() {
  return (
    <div>
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playInline
        className="background-video"
      />
    </div>
  );
}

export default App;
