import style from "../Description/Description.module.css"

const Description = () => {
  return (
    <>
      <h1 className={style.mainTitle}>Sip Happens Café ☕</h1>
      <p className={style.mainParagraf}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;