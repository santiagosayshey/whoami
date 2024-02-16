import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Navbar = () => {
    return (
        <div className='container'>
            <nav className='navbar navbar-expand-lg'>
                <a className="navbar-brand" href="/">
                    whoami
                </a>
                <div className="ms-auto">
                    <a className="navbar-brand" href="/">
                        right-side-content
                    </a>
                </div>
            </nav>
        </div>
    );
};


export default Navbar;
