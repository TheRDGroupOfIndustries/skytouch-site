import React, { useRef } from "react";

const reviews = [
  {
    name: "karthik venkatesh",
    time: "1 year ago",
    text: "Great marketing agency. Do check it out!",
  },
  {
    name: "Ashok A",
    time: "2 years ago",
    text: "Genuine business and payments.",
  },
  {
    name: "Madhav Saha",
    time: "2 years ago",
    text: "I was working with a lot of developers in the past and was never getting my...",
  },
  {
    name: "Aarif Pathan",
    time: "2 years ago",
    text: "One of the best digital marketing company in city.",
  },
  {
    name: "Aila Dileep",
    time: "3 years ago",
    text: "Great environment and positive receiving. Their hospitality is so good as...",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-blue-900 px-4 sm:px-6 lg:px-20 py-16">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center text-white mb-12">
        
        <p className="text-sm sm:text-base text-blue-100 mt-4 leading-relaxed">
          Don't just take our word for it. Here's what our successful graduates have to say
          <span className="hidden md:inline"><br /></span>
          about their transformative journey with SkyTouch Academy.
        </p>
      </div>

      {/* White Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative">

        {/* Google Reviews Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-medium text-gray-800">Google Reviews</p>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">4.8</span>
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-xs text-gray-500">(39)</span>
            </div>
          </div>

          <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full hover:bg-blue-700 transition w-fit">
            Review us on Google
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center shadow hover:bg-gray-500 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center shadow hover:bg-gray-500 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Reviews */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:overflow-visible"
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="min-w-[220px] bg-gray-50 border rounded-lg p-4 flex-shrink-0 flex flex-col justify-between h-[220px]"
              >
                {/* User */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-semibold">
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800">{r.name}</p>
                    <p className="text-[10px] text-gray-500">{r.time}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="text-yellow-400 text-xs mt-2">★★★★★</div>

                {/* Review */}
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  {r.text}
                </p>

                <span className="text-xs text-blue-600 cursor-pointer mt-2">
                  Read more
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;