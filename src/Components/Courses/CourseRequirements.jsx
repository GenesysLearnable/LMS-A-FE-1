import IndividualRequirements from './IndividualRequirements';
import Style from './CourseRequirements.module.css';

const CourseRequirements = function () {
  return (
    <div className="w-[715px] flex flex-col gap-4 ml-[100px] mb-[50px] w-max">
      <h2 className="font-bold text-2xl leading-9 font-['Poppins']">
        Requirements
      </h2>
      <div>
        <IndividualRequirements theRequirement="This course is specifically designed for absolute beginners to UI/UX design." />

        <IndividualRequirements theRequirement="Basic computer skills" />

        <IndividualRequirements theRequirement="No IT prerequisites are required" />

        <IndividualRequirements theRequirement="No prior experience is necessary in any way" />
      </div>
    </div>
  );
};

export default CourseRequirements;
