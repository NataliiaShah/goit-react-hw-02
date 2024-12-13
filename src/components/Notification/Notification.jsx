import style from "../Notification/Notification.module.css"

const Notification = ({ message }) => {
  return <p className={style.paragraf}>{message}</p>;
};

export default Notification;
