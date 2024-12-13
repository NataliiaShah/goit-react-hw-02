import { useState } from "react";
import Description from "../components/Description/Description";
import Feedback from "../components/Feedback/Feedback";
import Options from "../components/Options/Options";
import Notification from "../components/Notification/Notification";

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const handleFeedbackChange = (feedbackType) => {
        setFeedback((prevState) => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1,
        }));
    };

    const resetFeedback = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    return (
        <>
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
        />
      ) : (
        <Notification message="No feedback yet 😿" />
      )}
    </>
  );
};

export default App;