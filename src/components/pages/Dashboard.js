import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Dashboard = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-3 left-content'>
                    <h1> left column</h1>
                </div>
                <div className='col-sm-6 middle-content'>
                    <h1> middle column</h1>
                </div>
                <div className='col-sm-3 right-content'>
                    <h1> right column</h1>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;
