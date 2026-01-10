import { useEffect, useRef, useState } from "react";
import CountUp from "../utils/CountUp";

export default function StatsBanner() {
  const bannerRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 font-inter"
    >
      <div
        className="w-full max-w-6xl rounded-xl shadow-lg"
        style={{
          background: "linear-gradient(90deg, #0064E7 0%, #02287B 100%)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center text-white">

          {/* Placement Success */}
          <div className="px-4 py-10 sm:py-12 lg:py-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <CountUp end={95} suffix="+" start={startCount} />
            </h2>
            <p className="text-sm sm:text-base font-semibold">
              Placement Success
            </p>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              Our graduates land roles with top companies worldwide
            </p>
          </div>

          {/* Average Salary */}
          <div className="px-4 py-10 sm:py-12 lg:py-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              ₹<CountUp end={75} suffix="K+" start={startCount} />
            </h2>
            <p className="text-sm sm:text-base font-semibold">
              Average Salary in 6 Months
            </p>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              Fast-track your career with industry-relevant skills
            </p>
          </div>

          {/* Hiring Partners */}
          <div className="px-4 py-10 sm:py-12 lg:py-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <CountUp end={50000} suffix="+" start={startCount} />
            </h2>
            <p className="text-sm sm:text-base font-semibold">
              Hiring Partners
            </p>
            <p className="text-xs sm:text-sm opacity-90 mt-1">
              Actively recruiting talent trained by us
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}