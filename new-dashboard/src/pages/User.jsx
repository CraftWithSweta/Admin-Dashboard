import React from 'react';

const Users = () => {
  const users = [
    { id: 1, name: 'Alice Johnson', role: 'Admin', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', role: 'Editor', email: 'bob@example.com' },
    { id: 3, name: 'Carol White', role: 'Viewer', email: 'carol@example.com' },
  ];

  return (
    <div className="ml-64 p-6">
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <div className="bg-white shadow rounded p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
