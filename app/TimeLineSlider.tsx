"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TimelineSlider = () => {
  const timelineEvents = [
    {
      id: 1,
      year: "2015",
      title: "Our Beginning",
      description:
        "Aromatic Blends started as a small roastery in a garage with a single 5kg roaster and a passion for great coffee.",
    },
    {
      id: 2,
      year: "2017",
      title: "First Café Opens",
      description:
        "We opened our flagship café, creating a space for the community to experience our coffee and learn about the art of brewing.",
    },
    {
      id: 3,
      year: "2019",
      title: "Direct Trade Program",
      description:
        "We established our direct trade program, working directly with farmers in Ethiopia, Colombia, and Guatemala.",
    },
    {
      id: 4,
      year: "2021",
      title: "Sustainability Certification",
      description:
        "Our commitment to environmental practices earned us B Corp certification and carbon-neutral status.",
    },
    {
      id: 5,
      year: "2023",
      title: "National Recognition",
      description:
        "Aromatic Blends was named 'Roaster of the Year' and expanded distribution to specialty stores nationwide.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === timelineEvents.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) =>
      prev === 0 ? timelineEvents.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Journey</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            How we&apos;ve grown while staying true to our values.
          </p>
        </div>

        {/* Slider container */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Timeline progress */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="h-2 bg-amber-200 rounded-full">
              <div
                className="h-full bg-amber-600 rounded-full transition-all duration-500 ease-in-out"
                style={{
                  width: `${
                    (currentSlide / (timelineEvents.length - 1)) * 100
                  }%`,
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-2">
              {timelineEvents.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => goToSlide(index)}
                  className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    index <= currentSlide
                      ? "bg-amber-600 text-white"
                      : "bg-amber-200 text-amber-800"
                  }`}
                >
                  {event.year.substring(2)}
                </button>
              ))}
            </div>
          </div>

          {/* Slides */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {timelineEvents.map((event) => (
                  <div key={event.id} className="min-w-full p-8">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                        {event.year.substring(2)}
                      </div>
                      <div className="ml-4">
                        <span className="text-amber-700 font-semibold block">
                          {event.year}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {event.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6 text-amber-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center focus:outline-none"
            >
              <ChevronRight className="h-6 w-6 text-amber-600" />
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-6">
            {timelineEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 mx-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-amber-600" : "bg-amber-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSlider;
