import classes from './EventSummary.module.css';

const { summary } = classes;

function EventSummary({title}) {

  return (
    <section className={summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;