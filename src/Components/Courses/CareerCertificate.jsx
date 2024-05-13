import Style from './CareerCertificate.module.css';

const CareerCertificate = function () {
  return (
    <div className={Style.certificate}>
      <div className={Style.certificate__info}>
        <h2>Earn a career certificate</h2>

        <h3>
          Add this credential to your LinkedIn profile, resume, or CV Share it
          on social media and in your performance review
        </h3>
      </div>

      <img src="/Images/Courses/Certificate.svg" alt="Certificate" />
    </div>
  );
};

export default CareerCertificate;
