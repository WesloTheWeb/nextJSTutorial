import React from 'react';
import EventItem from '../EventItem/EventItem';
import classes from './EventsList.module.css';

const { list } = classes;

const EventList = ({ items }) => {
    return (
        <ul className={list}>
            {items.map((e) => (
                <EventItem
                    key={e.id}
                    id={e.id}
                    title={e.title}
                    location={e.location}
                    date={e.date}
                    image={e.image}
                />
            ))}
        </ul>
    );
};

export default EventList;