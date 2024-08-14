import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [progress, setProgress] = useState({});

    useEffect(() => {
        axios.get('/api/progress')
            .then(response => setProgress(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="dashboard">
            <h1>Your Progress</h1>
            <p>Completed Modules: {progress.completed}</p>
            <p>Current Module: {progress.current}</p>
            <p>Next Suggested Module: {progress.next}</p>
        </div>
    );
};

export default Dashboard;
