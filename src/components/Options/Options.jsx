import style from "../Options/Options.module.css"

const Options = ({ onFeedbackChange, totalFeedback, onReset }) => {
    return (
        <div>
            <ul className={style.buttonList}>
                <li>
                    <button className={style.mainButton} onClick={() => onFeedbackChange("good")}>Good</button>
                </li>
                <li>
                    <button className={style.mainButton} onClick={() => onFeedbackChange("neutral")}>Neutral</button>
                </li>
                <li>
                    <button className={style.mainButton} onClick={() => onFeedbackChange("bad")}>Bad</button>
                </li>
                <li>
                    
                    {totalFeedback > 0 && (
                        <button className={style.mainButton} onClick={onReset}>Reset</button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Options;