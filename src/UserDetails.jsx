import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function UserDetails() {
    const [user, setUser] = useState({});
    const { id } = useParams();
    // const getUsersByID = () => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    //         .then((res) => {
    //             console.log("ress", res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    useEffect(
        () =>
            async function getUserByID() {
                try {
                    const res = await axios.get(
                        `https://jsonplaceholder.typicode.com/users/${88888}`
                    );
                    setUser(res.data);
                } catch (err) {
                    console.log(err);
                }
            },
        [id]
    );
    console.log("user", user);
    return (
        <div>
            <h1>User Details</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    );
}
