import React, { useEffect, useState } from "react";

export default function Currency() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY")
      .then(res => res.json())
      .then(data => {
        console.log("Frankfurter response:", data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-20">🔄 Loading currency data...</div>;
  }

  if (!data || !data.rates) {
    return <div className="text-center text-red-500 mt-20">❌ Failed to load currency data.</div>;
  }

  return (
    <div className="min-h-screen bg-[#fdf6f3] px-6 py-12">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4"> Currency Exchange</h1>
        <p className="text-center text-gray-600 mb-4">
          Base: {data.base} | Date: {data.date}
        </p>
        <ul className="space-y-2">
          {Object.entries(data.rates).map(([currency, value]) => (
            <li
              key={currency}
              className="flex justify-between px-3 py-2 bg-gray-50 rounded-md"
            >
              <span>{currency}</span>
              <span>{value.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
