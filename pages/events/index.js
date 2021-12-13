import React from 'react';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../src/components/EventsSearch/EventsSearch';
import EventsLists from '../../src/components/EventsList/EventsList';

const AllEventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventsLists items={events} />
        </>
    );
};

export default AllEventsPage;