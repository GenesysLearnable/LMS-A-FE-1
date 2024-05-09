const Faqs = () => {
  return (
    <section className="bg-[#f5f6fa] relative pt-[88px] pb-[165px] flex items-center justify-center">
        <img className="absolute top-[148px] h-[694px]" src="/src/Images/LandingPage/Vector 12.png" alt="vector" />
      <article className="">
        <p className="text-black text-[28.88px] font-semibold font-['Poppins'] leading-[49.10px] text-center">
          Frequently asked questions
        </p>
        {questions.map((faq, index) => (
          <Article key={index} question={faq.question} />
        ))}
      </article>
    </section>
  )
}

const Article = ({ question }) => {
  return (
    <article>
      <div className="mt-12 pb-4 border-b border-neutral-400 flex justify-between items-center w-[749px]">
        <p className="text-black  text-xl font-semibold font-['Poppins'] leading-[34px]">
          {question}
        </p>
        <img
          className="h-7 w-7 cursor-pointer"
          src={"/src/Icons/Landingpage/arrow-down.png"}
          alt="arrow-down icon"
        />
      </div>
    </article>
  )
}

const questions = [
  {
    question: "Who can benefit from SkillHub?",
  },
  {
    question: "What types of courses are available on SkillHub?",
  },
  {
    question: "Are the courses on SkillHub taught by experts?",
  },
  {
    question: "Can I track my progress on SkillHub?",
  },
  {
    question: "Is SkillHub suitable for both individuals and businesses?",
  },
]

export default Faqs
