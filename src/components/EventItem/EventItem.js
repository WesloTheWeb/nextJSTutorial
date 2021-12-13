import React from 'react';
import classes from './EventItem.module.css';
import Button from '../Button/Button';
import ArrowRightIcon from '../icons/arrow-right-icon';

const { item, content, summary, address, actions, icon } = classes;

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
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={icon}><ArrowRightIcon /></span>    
                    </Button>
                </div>
            </section>
        </li>
    );
};

export default EventItem;