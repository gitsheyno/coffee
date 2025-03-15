"use client";

import React, { useState, useEffect } from "react";

const Spinner = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setRotation((prev) => (prev + 2) % 360);
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative w-16 h-16">
        {/* Outer spinner */}
        <div
          className="absolute w-16 h-16 border-4 border-t-blue-500 border-r-indigo-500 border-b-purple-500 border-l-pink-500 rounded-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            animation: "spin 1s linear infinite",
          }}
        />

        {/* Inner spinner */}
        <div
          className="absolute w-10 h-10 m-3 border-4 border-t-purple-500 border-r-pink-500 border-b-blue-500 border-l-indigo-500 rounded-full"
          style={{
            transform: `rotate(${-rotation * 1.5}deg)`,
            animation: "spin-reverse 0.8s linear infinite",
          }}
        />

        {/* Center dot */}
        <div className="absolute w-4 h-4 rounded-full bg-white top-6 left-6" />
      </div>
    </div>
  );
};

export default Spinner;
