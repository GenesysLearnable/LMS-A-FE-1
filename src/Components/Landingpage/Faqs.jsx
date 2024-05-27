import { useState } from "react"

const Faqs = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <section className="bg-[#f5f6fa] relative pt-[40px] pb-[80px] xl:pt-[88px] xl:pb-[165px] flex items-center justify-center">
      <img
        className="absolute top-[148px] h-[694px]"
        src="/Images/LandingPage/Vector 12.png"
        alt="vector"
      />
      <article className="z-10">
        <p className="text-black text-[22px] xl:text-[28.88px] font-semibold font-['Poppins'] leading-[49.10px] text-center">
          Frequently asked questions
        </p>
        {questions.map((faq, index) => (
          <article key={index}>
            <div
              onClick={() => toggle(index)}
              className="mt-12 pb-4 border-b border-neutral-400 w-[400px] xl:w-[749px] cursor-pointer "
            >
              <div className="flex justify-between items-center w-[400px] xl:w-[749px]">
                <div>
                  <p className="text-black pr-2 text-base xl:text-xl font-semibold font-['Poppins'] leading-6 xl:leading-[34px]">
                    {faq.question}
                  </p>
                </div>

                <div>
                  <img
                    className={
                      selected == index
                        ? "xl:h-7 xl:w-7 h-5 w-5 duration-300 rotate-180"
                        : "xl:h-7 xl:w-7 h-5 w-5 duration-300"
                    }
                    src={"/Icons/Landingpage/arrow-down.png"}
                    alt="arrow-down icon"
                  />
                </div>
              </div>
              <p
                className={
                  selected == index
                    ? "pt-1 text-neutral-700 overflow-hidden max-h-full"
                    : "pt-1 text-neutral-700 overflow-hidden max-h-0"
                }
              >
                {faq.answer}
              </p>
            </div>
          </article>
        ))}
      </article>
    </section>
  )
}


const questions = [
  {
    question: "Who can benefit from SkillHub?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos voluptates recusandae nostrum dolore ",
  },
  {
    question: "What types of courses are available on SkillHub?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos voluptates recusandae nostrum dolore ",
  },
  {
    question: "Are the courses on SkillHub taught by experts?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos voluptates recusandae nostrum dolore ",
  },
  {
    question: "Can I track my progress on SkillHub?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos voluptates recusandae nostrum dolore ",
  },
  {
    question: "Is SkillHub suitable for both individuals and businesses?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos voluptates recusandae nostrum dolore ",
  },
]

export default Faqs
