

const Feedback = ({feedback}) => {
  return (
    <>
        <p>❤️ Good feedback: {feedback.good}</p>
        <p>😒 Neutral: {feedback.neutral}</p>
        <p>😢 Bad: {feedback.bad}</p>
      
    </>
  );
};

export default Feedback;

