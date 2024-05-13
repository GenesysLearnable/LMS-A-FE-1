import Style from './PrimeFeatures.module.css';

const CheckMarks = function ({ coreIdeas }) {
  return (
    <section className={Style.key__info}>
      <img src="/Images/Courses/Check-Mark.svg" alt="A check mark" />
      <h4>{coreIdeas}</h4>
    </section>
  );
};

export default CheckMarks;
