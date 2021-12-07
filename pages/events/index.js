import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../src/components/EventsSearch/EventsSearch';
import EventsLists from '../../src/components/EventsList/EventsList';

const AllEventsPage = (props) => {
    const events = getAllEvents();

    return (
        <>
            <EventsSearch />
            <EventsLists items={events} />
        </>
    );
};

export default AllEventsPage;