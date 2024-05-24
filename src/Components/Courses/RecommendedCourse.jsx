import StarRating from './StarRatings';
import Style from './RecommendedCourse.module.css';

const RecommendedCourse = function (props) {
  const size = 11.7;

  const { courseName, courseDescription, video, videoAlt, stars, cost } = props;

  return (
    <div className="w-[291px] shadow-[0px_3.35px_8px_0px_#041d3133] rounded-xl">
      <div className="h-[197.91px] mb-[15.1px] rounded-t-[11.74px]">
        <img
          className="rounded-[11.74px_11.74px_0_0]"
          src={video}
          alt={videoAlt}
        />
      </div>

      <div className="w-[255.38px] ml-[13.42px] mb-[17.09px]">
        <img
          className="w-[43.62px]"
          src="/Images/Courses/Genesys-Logo.svg"
          alt="Genesys Logo"
        />
        <div className={Style.course__details}>
          <h1 className="font-extrabold text-[19.03px] leading-[28.55px] mb-[3.35px] font-['Poppins']">
            {courseName}
          </h1>

          <div>
            <h3 className="font-medium text-[11.1px] leading-[18.88px] mb-[6.71px] font-['Poppins']">
              {courseDescription}
            </h3>

            <section className="w-[75.83px]">
              <div className="flex w-[75.83px] items-center gap-[1.96px] mb-[1.96px]">
                <h4 className="font-normal text-[10.06px] leading-[17.11px] font-['Poppins'] text-[#041d31]">
                  4.6
                </h4>

                <div className="w-[58.87px] h-[11.77px] flex">
                  {[0, 1, 2, 3, 4, 5].map((index) => {
                    if (index < stars)
                      return <StarRating key={index} size={size} />;
                  })}
                </div>
              </div>

              <div className="w-[71.87px] h-[24.53px] flex items-center gap-0.5">
                <img
                  className="w-[11px]"
                  src="/Images/Courses/Naira-Icon.svg"
                  alt="Naira Sign"
                />
                <h2 className="font-bold text-[15.86px] leading-[23.79px font-['Poppins'] text-[#041d31]">
                  {cost}
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCourse;
