import Style from './IndividualRequirements.module.css';

const IndividualRequirements = function ({ theRequirement }) {
  return (
    <div className={Style.outline}>
      <img src="/Images/Courses/Ellipse.svg" alt="Ellipse" />
      <h4>{theRequirement}</h4>
    </div>
  );
};

export default IndividualRequirements;
