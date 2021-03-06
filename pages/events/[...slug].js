import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../src/components/EventsList/EventsList';
import ResultsTitle from '../../src/components/ResultsTitle/ResultsTitle';
import Button from '../../src/components/Button/Button';
import ErrorAlert from '../../src/components/ErrorAlert/ErrorAlert';

const FilteredEventsPage = (props) => {
    const router = useRouter();

    const filterData = router.query.slug;

    if (!filterData) {
        return <p className='center'>Loading...</p>
    }

    //Convert to number
    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    // Safe checks if whatever filtered event
    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021
    ) {
        return (
            <>
                <ErrorAlert>
                    <p>Invalid filter. Please adjust your values!</p>
                </ErrorAlert>
                <div className='center'>
                    <Button link='/events'>Show All Events</Button>
                </div>
            </>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p>No events found for the chosen filter!</p>
                    <div className='center'>
                        <Button link='/events'>Show All Events</Button>
                    </div>
                </ErrorAlert>
            </>

        )
    };

    const date = new Date(numYear, numMonth - 1);

    return (
        <>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    );
};

export default FilteredEventsPage;