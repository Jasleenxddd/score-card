import React from 'react';
import './App.css'

const ScoreCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-700">Your Score Card</h1>
        <button className="text-gray-400">✕</button>
      </div>

      {/* Score Section */}
      <div className="text-center">
        <h2 className="text-xl font-bold text-indigo-600">Hi Jhon,</h2>
        <p className="text-gray-500 mt-1">Your assessment is complete. Your score is:</p>
        <div className="my-4">
          <div className="text-5xl font-extrabold text-indigo-600">89%</div>
          <p className="text-lg font-semibold text-purple-700">Excellent but Not Market Leader</p>
        </div>
        <p className="text-sm text-gray-500">
          Your IT infrastructure is robust and well-optimized, but there is always room for improvement. 
          Remaining at this level requires constant innovation and vigilant maintenance.
        </p>
      </div>

      {/* Insights Section */}
      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-gray-700">Insights and Opinions on Each Section</h3>
        <div className="mt-4">
          {/* IT Environment */}
          <InsightItem label="IT Environment" score={89} color="yellow" icon="🙂" />
          {/* Device Management */}
          <InsightItem label="Device Management" score={95} color="green" icon="😊" />
          {/* Email Configuration */}
          <InsightItem label="Email Configuration" score={40} color="red" icon="😔" />
          {/* Security & Compliance */}
          <InsightItem label="Security & Compliance" score={92} color="green" icon="😊" />
          {/* Backup & Cloud Services */}
          <InsightItem label="Backup & Cloud Services" score={30} color="red" icon="😔" />
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6">
        <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md">
          Download Score Card Report
        </button>
      </div>
    </div>
  );
};

const InsightItem = ({ label, score, color, icon }) => {
  const progressBarColor = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-400',
    red: 'bg-red-500',
  }[color];

  return (
    <div className="flex justify-between items-center my-3">
      <div className="flex items-center gap-2">
        <div className="text-lg">{icon}</div>
        <span className="font-medium text-gray-700">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-40 bg-gray-200 rounded-full h-3.5">
          <div className={`h-3.5 rounded-full ${progressBarColor}`} style={{ width: `${score}%` }}></div>
        </div>
        <span className="text-gray-700 font-semibold">{score}%</span>
      </div>
    </div>
  );
};

export default ScoreCard;
