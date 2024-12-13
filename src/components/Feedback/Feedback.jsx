

const Feedback = ({feedback, feedbackTotal, feedbackPositive}) => {
  return (
    <>
        <p>❤️ Good: {feedback.good}</p>
        <p>😒 Neutral: {feedback.neutral}</p>
        <p>😢 Bad: {feedback.bad}</p>
        <p>🤩 Total: {feedbackTotal}</p>
        <p>💕 Positive: {feedbackPositive}%</p>
      
    </>
  );
};

export default Feedback;

