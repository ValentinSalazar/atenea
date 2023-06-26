import React, { useEffect, useRef, useState } from 'react';
import videoBkg from './assets/videobkg.mp4';

export const VideoBackground = () => {
  const [videoStatus, setVideoStatus] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  const handleVideoEnded = () => {
    videoRef.current.play();
  };

  const handleStopButtonClick = () => {
    videoRef.current.pause();
    setVideoStatus(false);
  };

  const handlePlayButtonClick = () => {
    videoRef.current.play();
    setVideoStatus(true);
  };

  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover blur-sm"
      >
        <source src={videoBkg} type="video/mp4" />
      </video>
      <div className="fixed z-10 flex items-center justify-center">
        {videoStatus ? (
          <button
            onClick={handleStopButtonClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths */}
            </svg>
          </button>
        ) : (
          <button
            onClick={handlePlayButtonClick}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* SVG paths */}
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
