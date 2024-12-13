const Options = ({ onFeedbackChange, totalFeedback, onReset }) => {
    return (
        <div>
            <ul>
                <li>
                    <button onClick={() => onFeedbackChange("good")}>Good</button>
                </li>
                <li>
                    <button onClick={() => onFeedbackChange("neutral")}>Neutral</button>
                </li>
                <li>
                    <button onClick={() => onFeedbackChange("bad")}>Bad</button>
                </li>
                <li>
                    
                    {totalFeedback > 0 && (
                        <button onClick={onReset}>Reset</button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Options;