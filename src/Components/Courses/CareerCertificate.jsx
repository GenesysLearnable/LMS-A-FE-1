import Style from './CareerCertificate.module.css';

const CareerCertificate = function () {
  return (
    <div className="w-[1029px] relative flex items-center ml-[101px] mb-14">
      <div className="w-[1029px] border my-3.5 rounded-xl border-solid border-[#bbbcbd]">
        <h2 className="ml-[17px] font-bold text-2xl leading-9 mt-3.5 mb-2.5 font-['Poppins']">
          Earn a career certificate
        </h2>

        <h3 className="ml-[17px] font-medium text-base leading-6 w-[459px] mb-[43px] font-['Poppins']">
          Add this credential to your LinkedIn profile, resume, or CV Share it
          on social media and in your performance review
        </h3>
      </div>

      <img
        className="w-[263px] absolute left-[714px] top-0"
        src="/Images/Courses/Certificate.svg"
        alt="Certificate"
      />
    </div>
  );
};

export default CareerCertificate;
