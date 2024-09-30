import React from 'react';
import '../App.js';

interface SectionCardProps {
  section: string[];
}

const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const [title, score, status] = section; // Example: section = ['IT Environment', '89', 'Good']

  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded">
      <div className="flex items-center">
        <div className="mr-4 bg-blue-600 text-white text-display p-2 rounded-full">
          <span role="img" aria-label="icon">💻</span>
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{title}</h4>
          <p className="text-gray-500">{status}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="font-bold text-slate-800">{score}%</span>
      </div>
    </div>
  );
};

export default SectionCard;
