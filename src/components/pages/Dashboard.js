import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calendar.css';

const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [dataForSelectedDate, setDataForSelectedDate] = useState(null);

    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good Morning, ';
    } else {
        greeting = 'Good Evening, ';
    }

    // Get the current date
    const now = new Date();

    // Options for formatting the date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };

    // Format the date to a human-readable string
    const dateString = now.toLocaleDateString('en-US', options).toUpperCase();

    const formatShortWeekday = (locale, date) => {
        const weekdayShortNames = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
        return weekdayShortNames[date.getDay()];
    };

    const handleDateClick = (value) => {
        setSelectedDate(value);
        // Add logic to fetch data from the database for `value` (the selected date)
        // setDataForSelectedDate(fetchedData);
    };

    // Use an effect to fetch data when the selected date changes
    useEffect(() => {
        // Fetch data for `selectedDate` and call setDataForSelectedDate with the result
        const fetchDataForDate = async () => {
            // Your fetch logic here
            // setDataForSelectedDate(result);
        };

        fetchDataForDate();
    }, [selectedDate]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-3'>
                    <h2 className='card-header'>Insights</h2>
                    <div className='side-content'>
                        <p>test</p>
                    </div>
                    <div className='side-content'>
                        <p>test</p>
                    </div>
                    <div className='side-content'>
                        <p>test</p>
                    </div>
                </div>
                <div className='col-sm-6 middle-content'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-7 greeting'>
                                <h1>
                                    {greeting} Sam!
                                </h1>
                            </div>
                            <div className='col-5 date'>
                                <div className='d-flex justify-content-end'>
                                    {dateString}
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 '>
                                <div className='main-card'>
                                    <h6 className='grati-question'>Card 1</h6>
                                </div>
                            </div>
                            <div className='col-6 '>
                                <div className='main-card'>
                                    <h6 className='grati-question'>Card 2</h6>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6 '>
                                <div className='main-card'>
                                    <h6 className='grati-question'>Card 3</h6>
                                </div>
                            </div>
                            <div className='col-6 '>
                                <div className='main-card'>
                                    <h6 className='grati-question'>Card 4</h6>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='main-card'>
                                    <h6 className='grati-question'>Daily Entry:</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-3'>
                    <h2 className='card-header text-end'>Calendar</h2>
                    <Calendar className={'mt-3 ms-2'} formatShortWeekday={formatShortWeekday} onClickDay={handleDateClick}
                        value={selectedDate} />
                    <div className='side-content'>

                    </div>
                    <h2 className='card-header text-end'>My Skills</h2>
                    <div className='side-content'>
                        <p>test</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;
