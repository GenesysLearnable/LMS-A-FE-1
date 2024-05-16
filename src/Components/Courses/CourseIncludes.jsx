import Style from './CourseIncludes.module.css';
import VideoSymbol from './VideoSymbol';

const CourseIncludes = function ({ duration }) {
  return (
    <main className={Style.container}>
      <div>
        <h1>This course includes:</h1>

        <div className={Style.the__inclusion}>
          <div>
            <VideoSymbol />
            <h2>{duration} on-demand video.</h2>
          </div>

          <div>
            <VideoSymbol />
            <h2>Quizzes.</h2>
          </div>

          <div>
            <VideoSymbol />
            <h2>Rewards.</h2>
          </div>

          <div>
            <VideoSymbol />
            <h2>Certification of completion.</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseIncludes;
