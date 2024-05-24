import StarRating from './StarRatings';
import Style from './CourseKeyInfo.module.css';
import Button from '../Landingpage/Button';

const CourseKeyPoints = function ({ id, img, title, text, students, price }) {
  const enrollCourse = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/v1/courses/${id}/enroll`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ enrolled: true }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    } catch (error) {
      console.log('Error enrolling in course', error);
    }
  };

  return (
    <div className="bg-[#041d31] flex justify-between gap-[116px] pl-[100px] pr-[97px] pt-[71px] pb-[72px]">
      <div className="w-[451px] h-auto">
        <img
          className="max-w-[451px] h-auto rounded-xl"
          src={img}
          alt="UI/UX Design"
        />
      </div>
      <div className="pt-[9px] pb-[3px]">
        <h1 className="text-white font-extrabold text-[40px] leading-[60px] font-['Poppins']">
          {title}
        </h1>

        <div className="pt-2">
          <div className="pb-6">
            <h3 className="text-white font-medium text-base leading-6 max-w-[678px] pb-2 font-['Poppins']">
              {text}
            </h3>
            <div className="h-auto flex gap-1 items-center">
              <h4 className="text-white font-normal text-base leading-[27.2px] font-['Poppins']">
                4.6
              </h4>

              <div className="flex">
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
                <StarRating />
              </div>

              <h5 className="text-[#ff9053] font-semibold text-sm leading-[23.8px] font-['Poppins']">
                &#10088;69 rating&#10089;
              </h5>

              <h5 className="text-[#ff9053] pl-1 font-normal text-base leading-[27.2px] font-['Poppins']">
                {students} students
              </h5>
            </div>
          </div>
          <div className="w-[175px]">
            <Button
              className="leading-5 text-white font-semibold text-base px-[67px] py-3.5 rounded-lg"
              title={'Enroll'}
              bg={'bg-[#ff9053]'}
              path={'/students/courses'}
              onClick={() => enrollCourse(id)}
            />
            <h2 className="leading-5 text-white font-extrabold text-[32px] pt-6 font-['Roboto']">
              &#8358;{price}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseKeyPoints;
