import React, { useState } from 'react';

const TableSwitcher = ({data}) => {
  const [isGridView, setIsGridView] = useState(false); // state to toggle view

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Data Table</h2>
        <button
          onClick={() => setIsGridView(!isGridView)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Toggle to {isGridView ? 'Table View' : 'Grid View'}
        </button>
      </div>

      {/* Table or Grid View */}
      {isGridView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 border rounded-lg shadow-md flex flex-col space-y-2"
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p><strong>Age:</strong> {item.age}</p>
              <p><strong>Occupation:</strong> {item.occupation}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Occupation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.age}</td>
                <td className="px-4 py-2">{item.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableSwitcher;
