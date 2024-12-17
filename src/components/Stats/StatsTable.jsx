import React from 'react';

const StatsTable = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-white">
        <thead className="bg-[#202225] text-gray-300">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-6 py-3">{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-[#2f3136]' : 'bg-[#36393f]'}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;