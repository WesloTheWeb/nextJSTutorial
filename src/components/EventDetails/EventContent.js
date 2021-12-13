import classes from './EventContent.module.css';

const { content } = classes;

function EventContent(props) {
  return (
    <section className={content}>
      {props.children}
    </section>
  );
}

export default EventContent;