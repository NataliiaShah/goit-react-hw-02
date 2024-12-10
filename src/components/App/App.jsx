
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

    return (
        <>
            <Description />
            <Feedback feedback={feedback} />
            <Options />
        </>
    );
};


export default App;



