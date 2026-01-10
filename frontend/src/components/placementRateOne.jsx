import { useEffect, useRef, useState } from "react";
import CountUp from "../utils/CountUp";

export default function StatsCard() {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center font-inter px-6 py-12"
    >
      <div className="max-w-6xl w-full bg-white border border-gray-300 rounded-2xl shadow-md px-12 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center gap-10">

          <div>
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={95} suffix="%" start={startCount} />
            </h3>
            <p className="text-sm text-gray-600 mt-2">Placement success</p>
            <p className="text-sm text-gray-600 mt-2">
              Helping learners land roles that match their potential
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={75} prefix="₹" suffix="K" start={startCount} />
            </h3>
            <p className="text-sm text-gray-600 mt-2">Average salary boost</p>
            <p className="text-sm text-gray-600 mt-2">
              Real growth backed by real results
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={500} suffix="+" start={startCount} />
            </h3>
            <p className="text-sm text-gray-600 mt-2">Hiring Partners</p>
            <p className="text-sm text-gray-600 mt-2">
              Top companies actively recruiting our graduates
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={50} suffix="K+" start={startCount} />
            </h3>
            <p className="text-sm text-gray-600 mt-2">Successful Alumni</p>
            <p className="text-sm text-gray-600 mt-2">
              A growing network of career-ready professionals
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
