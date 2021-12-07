import React from 'react';
import { getAllEvents } from '../../dummy-data';
import EventsLists from '../../src/components/EventsList/EventsList';

const AllEventsPage = (props) => {
    const events = getAllEvents();

    return (
        <div>
            <EventsLists items={events} />
        </div>
    );
};

export default AllEventsPage;