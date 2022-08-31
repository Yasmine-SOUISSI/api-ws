import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/:id" element={<UserDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
