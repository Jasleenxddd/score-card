import React, { useEffect, useState } from 'react';
import SectionCard from '../components/SectionCard';
import '../App.css';

const ScoreCard = () => {
  const [sections, setSections] = useState([]);
  const [score, setScore] = useState('');

  // Fetch data from Google Sheets
  useEffect(() => {
    const fetchData = async () => {
      const sheetID = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTygDz_0Pbyd2TDHAB3avguKJJvSsxDb9MbAGXxQGy4xV4JWZKvGu5BFBTXDattmnNrapu-uYbwQCMe/pubhtml';
      const apiKey = 'AIzaSyDVjd-l3C_Iwf8CoZ9UVTyjH4pYrnb4QTk';
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${"https://docs.google.com/spreadsheets/d/e/2PACX-1vTygDz_0Pbyd2TDHAB3avguKJJvSsxDb9MbAGXxQGy4xV4JWZKvGu5BFBTXDattmnNrapu-uYbwQCMe/pubhtml"}/values/Sheet1?key=${"AIzaSyDVjd-l3C_Iwf8CoZ9UVTyjH4pYrnb4QTk"}`;

      const response = await fetch(url);
      const data = await response.json();

      // Parse the Google Sheets data
      const scoreData = data.values;
      const sectionsData = scoreData.slice(1); // Assume row 1 is headers
      setScore(scoreData[0][1]); // Example: Score from row 0, column 1
      setSections(sectionsData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="text-center text-display">
        <h2 className="text-lg font-bold text-slate-800">Your Score Card</h2>
        <p className="mt-2 text-blue-600 text-3xl font-extrabold">{score}%</p>
        <p className="text-gray-500">Excellent but Not Market Leader</p>
        <p className="mt-4 text-sm text-gray-500">
          Your IT infrastructure is robust and well-optimized, but there's always room for improvement.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-slate-800 font-semibold">Insights and Opinions on Each Section</h3>
        <div className="space-y-4">
          {sections.map((section, index) => (
            <SectionCard key={index} section={section} />
          ))}
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 mt-6 rounded">
        Download Score Card Report
      </button>
    </div>
  );
};

export default ScoreCard;
