HEAD
import React, { useState } from 'react';
import data from './data';
import './styles.css';

const App = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  const tracks = data.tracks;

  const playTrack = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseTrack = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const previousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Music Player</h1>
      <img src={tracks[currentTrackIndex].cover} alt={tracks[currentTrackIndex].title} className="w-48 h-48 mb-4" />
      <h2 className="text-xl">{tracks[currentTrackIndex].title}</h2>
      <h3 className="text-lg text-gray-600">{tracks[currentTrackIndex].artist}</h3>
      <audio ref={audioRef} src={tracks[currentTrackIndex].audio} />
      <div className="flex space-x-4 mt-4">
        <button onClick={previousTrack} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
        {isPlaying ? (
          <button onClick={pauseTrack} className="bg-red-500 text-white px-4 py-2 rounded">Pause</button>
        ) : (
          <button onClick={playTrack} className="bg-green-500 text-white px-4 py-2 rounded">Play</button>
        )}
        <button onClick={nextTrack} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
     );
};
export default App;
