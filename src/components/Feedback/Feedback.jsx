import style from "../Feedback/Feedback.module.css";

const Feedback = ({feedback, feedbackTotal, feedbackPositive}) => {
  return (
    <>
    <div className={style.divContainer}>
        <p className={style.feedbackParagraf}>❤️ Good: {feedback.good}</p>
        <p className={style.feedbackParagraf}>😒 Neutral: {feedback.neutral}</p>
        <p className={style.feedbackParagraf}>😢 Bad: {feedback.bad}</p>
      </div>
      <div className={style.divContainer}>
        <p className={style.feedbackParagraf}>🤩 Total: {feedbackTotal}</p>
        <p className={style.feedbackParagraf}>💕 Positive: {feedbackPositive}%</p>
      </div>
    </>
  );
};

export default Feedback;

