
import React from "react";

const AnimatedMascot = () => (
  <div className="flex flex-col items-center">
    {/* Ilustrasi maskot sederhana, bisa gambar SVG animasi */}
    <div className="w-32 h-32 rounded-full bg-softblue flex items-center justify-center animate-[wave_2s_infinite_alternate] border-4 border-softblue shadow-md">
      <span className="text-6xl select-none animate-bounce">🩺</span>
    </div>
    <span className="font-nunito font-bold text-lg mt-2 text-siswa">Ayo Jaga Kesehatan!</span>
    <style>
      {`@keyframes wave {
        0% { transform: rotate(-8deg);}
        100% { transform: rotate(8deg);}
      }`}
    </style>
  </div>
);

export default AnimatedMascot;
