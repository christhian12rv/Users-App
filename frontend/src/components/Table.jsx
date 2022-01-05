import React from 'react';

import './Table.css';

const Table = ({ users }) => {
    return (
        <table className='users-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;