import AboutCards from "./AboutCards";

const AboutCard = () => {
  return (
    <section className=" bg-gradient-to-b from-[#e9eaea40] font-['Roboto'] to-[#e9eaea] flex justify-center items-center py-[150px] ">
      <section className="w-[88%] z-10 flex flex-col pt-12 mb-[57.8px]">
        <article>
          <p className="text-sm font-semibold text-[#ac4832]">
            WHY USE Skillhub ?
          </p>
          <p className="text-black text-[28.8px] font-semibold w-[540px]">
            A seamless experience for both you and your development journey
          </p>
        </article>
        <section className="pt-6 flex justify-between">
          {details.map((detail, index) => (
            <AboutCards
              key={index}
              title={detail.title}
              text={detail.text}
              icon={detail.icon}
            />
          ))}
        </section>
      </section>
    </section>
  );
};

const details = [
  {
    title: "Efficiency ",
    text: "Streamline your academic tasks and processes, saving time and effort with our intuitive and user-friendly platform.",
    icon: "/Icons/Landingpage/Frame 68.png",
  },
  {
    title: "Accuracy",
    text: "Ensure precision and reliability in every aspect of your academic journey.",
    icon: "/Icons/Landingpage/Frame 66.png",
  },
  {
    title: "Comprehensive Solutions",
    text: "Access a wide range of tools and resources tailored specifically for students",
    icon: "/Icons/Landingpage/Frame 67.png",
  },
  {
    title: "Empowerment",
    text: "Feel empowered to take control of your academic success with skillhub, empowering you with the tools and resources you need to excel in your studies.",
    icon: "/Icons/Landingpage/Frame 69.png",
  },
];

export default AboutCard;
