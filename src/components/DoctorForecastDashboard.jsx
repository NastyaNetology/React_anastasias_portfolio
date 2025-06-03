import React from 'react';

const DoctorForecastDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🩺 Doctor Visit Forecast</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow-xl rounded-xl p-6">
          <p className="text-lg">📅 Select Month & Weekday</p>
          {/* Later: dropdowns or input controls */}
        </div>
        <div className="bg-white shadow-xl rounded-xl p-6">
          <p className="text-lg">🔢 Forecasted Visits:</p>
          <p className="text-3xl font-semibold text-blue-600">--</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorForecastDashboard;
