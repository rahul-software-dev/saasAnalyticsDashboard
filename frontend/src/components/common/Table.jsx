import React from 'react';

const Table = ({ headers = [], rows = [] }) => (
  <table className="table">
    <thead>
      <tr>
        {headers.map((header, i) => <th key={i}>{header}</th>)}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, idx) => (
        <tr key={idx}>
          {row.map((cell, j) => <td key={j}>{cell}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;