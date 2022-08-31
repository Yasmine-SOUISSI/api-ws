import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function UserList() {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        fetch(`https://jsonplaceholder.typicode.com/user}`)
            .then((res) => {
                console.log("after fetch ", res);
                return res.json();
            })
            .then((res) => {
                console.log("ress", res);
                setUsers(res);
            });
    };
    console.log("users", users);
    useEffect(() => getUsers(), []);

    return (
        <div>
            <h1>User List</h1>
            {users.map((user) => (
                <>
                    <h2 key={user.id}>{user.name}</h2>
                    <Link to={`/${user.id}`}>
                        <button>View More</button>
                    </Link>
                </>
            ))}
        </div>
    );
}
