import React from 'react';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../src/components/EventsList/Events-List';

const HomePage = (props) => {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    );
};


export default HomePage;