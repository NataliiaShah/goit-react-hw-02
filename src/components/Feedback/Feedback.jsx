

const Feedback = ({feedback, feedbackTotal}) => {
  return (
    <>
        <p>❤️ Good: {feedback.good}</p>
        <p>😒 Neutral: {feedback.neutral}</p>
        <p>😢 Bad: {feedback.bad}</p>
        <p>🤩 Total: {feedbackTotal}</p>
      
    </>
  );
};

export default Feedback;

