
const Options = ({ onFeedbackChange }) => {
  return (
    <div>
      <button onClick={() => onFeedbackChange('good')}>Good</button>
      <button onClick={() => onFeedbackChange('neutral')}>Neutral</button>
      <button onClick={() => onFeedbackChange('bad')}>Bad</button>
    </div>
  );
};



export default Options;