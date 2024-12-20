import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import style from "./App.module.css";

const App = () => {

  const getFeedbackFromLocalStorage = () => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      return JSON.parse(savedFeedback); 
    }
    return { good: 0, neutral: 0, bad: 0 }; 
  };

  const [feedback, setFeedback] = useState(getFeedbackFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  
  const handleFeedbackChange = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback
    ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
    : 0;

  return (
    <div className={style.container}>
      <Description />
      <Options
        onFeedbackChange={handleFeedbackChange}
        totalFeedback={totalFeedback}
        onReset={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          feedbackTotal={totalFeedback}
          feedbackPositive={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet 😿" />
      )}
    </div>
  );
};

export default App;