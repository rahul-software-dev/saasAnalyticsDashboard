import React from 'react';

const mockData = [
  { user: 'Alice', action: 'Logged in', time: '2 mins ago' },
  { user: 'Bob', action: 'Viewed Analytics', time: '5 mins ago' },
  { user: 'Charlie', action: 'Edited Settings', time: '10 mins ago' }
];

const UserActivityTable = () => {
  return (
    <div className="table-container">
      <h3>Recent User Activity</h3>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Action</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.user}</td>
              <td>{entry.action}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserActivityTable;