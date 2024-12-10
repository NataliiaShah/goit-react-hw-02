import { useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
 
const App = () => {

    const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
    });
    
    const handleFeedbackChange = (feedbackType) => {
        setFeedback(prevState => ({
        ...prevState, [feedbackType]
        : prevState[feedbackType] + 1,
    }));
  };

    return (
        <>
            <Description />
            <Options onFeedbackChange={handleFeedbackChange} />
            <Feedback feedback={feedback} />
        </>
    );
};

export default App;



	