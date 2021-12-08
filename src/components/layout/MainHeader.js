import React from 'react';
import Link from 'next/link';

import classes from './MainHeader.module.css';

const { header, navigation, logo } = classes;

const MainHeader = (props) => {
    return (
        <header className={header}>
            <div className={logo}>
                <Link href="/">NextEvents</Link>
            </div>
            <nav className={navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


export default MainHeader;