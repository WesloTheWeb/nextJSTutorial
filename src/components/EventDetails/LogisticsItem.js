import classes from './LogisticsItem.module.css';

const {item, icon, content } = classes;

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={item}>
      <span className={icon}>
        <Icon />
      </span>
      <span className={content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
