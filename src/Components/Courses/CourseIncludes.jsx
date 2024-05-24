import Style from './CourseIncludes.module.css';
import VideoSymbol from './VideoSymbol';

const CourseIncludes = function ({ duration }) {
  return (
    <main className="w-[360px] text-[#041d3126] shadow-[0px_2px_12px_0px_#041d3126] rounded-lg">
      <div className="pl-6 pr-10 pt-12 pb-[485px]">
        <h1 className="text-base leading-6 text-[black] font-bold mb-4 font-['Poppins']">
          This course includes:
        </h1>

        <div>
          <div className="flex gap-4 items-center mb-4">
            <VideoSymbol />
            <h2 className="text-base leading-6 text-[black] font-normal font-['Poppins']">
              {duration} on-demand video.
            </h2>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <VideoSymbol />
            <h2 className="text-base leading-6 text-[black] font-normal font-['Poppins']">
              Quizzes.
            </h2>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <VideoSymbol />
            <h2 className="text-base leading-6 text-[black] font-normal font-['Poppins']">
              Rewards.
            </h2>
          </div>

          <div className="flex gap-4 items-center">
            <VideoSymbol />
            <h2 className="text-base leading-6 text-[black] font-normal font-['Poppins']">
              Certification of completion.
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseIncludes;
