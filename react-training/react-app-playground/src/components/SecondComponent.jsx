import { useState } from "react";

function SecondComponent() {
    const [users, setUsers] = useState([
        { id: 1, name: "Alice", active: true },
        { id: 2, name: "Bob", active: false },
        { id: 3, name: "Charlie", active: true },
    ]);

    const toggleUserStatus = (id) => {
        setUsers(prevUsers =>
            prevUsers.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id} data-is-active={user.active ? 'true' : 'false'}>
                        {user.name} - {user.active ? "Active" : "Inactive"}
                        <button onClick={() => toggleUserStatus(user.id)}>
                            Toggle
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SecondComponent;
