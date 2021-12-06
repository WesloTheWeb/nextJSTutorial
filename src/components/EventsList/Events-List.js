import React from 'react';
import EventItem from '../EventItem/Event-Item';

const EventList = ({items}) => {
    return (
        <ul>
            {items.map((e) => (
                <EventItem 
                    key={e.id}
                    id={e.id} 
                    title={e.title} 
                    location={e.location}
                    date={e.date}
                    image={e.image}
                />

            ) )}
        </ul>
    );
};


export default EventList;