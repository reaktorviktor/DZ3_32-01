import React, { useState, useEffect } from 'react';
import axios from 'axios';
function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>Email: {user.email}</p>
        </div>
    )
}
function App() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('https://reqres.in/api/users?page=2')
                setUsers(response.data.data)
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }
        fetchUsers()
    }, [])
    return (
        <div className="app">
            <h1>Users Cards</h1>
            <div className="users-cards">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    )
}
export default App;
