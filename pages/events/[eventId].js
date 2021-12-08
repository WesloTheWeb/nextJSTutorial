import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../src/components/EventDetails/EventSummary';
import EventLogistics from '../../src/components/EventDetails/EventLogistics';
import EventContent from '../../src/components/EventDetails/EventContent';
import ErrorAlert from '../../src/components/ErrorAlert/ErrorAlert';

function EventDetailPage() {
    const router = useRouter();

    const eventId = router.query.eventId;
    const evnt = getEventById(eventId);

    if (!evnt) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        )
    };

    return (
        <>
            <EventSummary title={evnt.title} />
            <EventLogistics
                date={evnt.date}
                address={evnt.location}
                image={evnt.image}
                imageAlt={evnt.title}
            />
            <EventContent>
                <p>{evnt.description}</p>
            </EventContent>
        </>
    )
}

export default EventDetailPage;