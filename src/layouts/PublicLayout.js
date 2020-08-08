import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const PublicLayout = ({children}) => {
    return (
        <div className="public-layout">
            <Header />

            <div className="content-holder">
                <aside className="sidebar">
                    <ul>
                        <li><Link to="/">User List</Link> </li>
                    </ul>
                </aside>

                <aside className="content">
                    {children}
                </aside>
            </div>
        </div>
    );
}

export default PublicLayout;