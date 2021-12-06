import React from 'react';
import Link from 'next/link';
import classes from './EventItem.module.css';

const { item, content, summary, address, actions } = classes;

const EventItem = ({ title, image, date, location, id }) => {

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedAddress = location.replace(', ', '\n');

    const exploreLink = `/events/${id}`;

    return (
        <li className={item}>
            <img src={`/${image}`} alt={title} />
            <section className={content}>
                <div className={summary}>
                    <h2>{title}</h2>
                    <div className={date}>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={address}>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={actions}>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </section>
        </li>
    );
};


export default EventItem;