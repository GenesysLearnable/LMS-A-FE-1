import Course from "./Course";

const Courses = () => {
  return (
    <section className="bg-slate-100 z-10 flex justify-center pt-[120px] pb-[225px]">
      <section className="w-[88%] z-10 flex flex-col">
        <article className="mb-6 ">
          <p className="text-black text-[28.88px] font-semibold font-['Poppins'] leading-[49.10px]">
            Available Courses
          </p>

          <p className="text-neutral-500 text-base font-normal font-['Poppins'] leading-7">
            SkillHub provides a comprehensive range of tech courses suitable for
            beginners and seasoned professionals alike.
          </p>
        </article>
        <div className="grid grid-cols-4 gap-6 justify-around">
          {details.map((detail, index) => (
            <Course
              key={index}
              img={detail.img}
              title={detail.title}
              text={detail.text}
              price={detail.price}
              path={detail.path}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

const details = [
  {
    img: "/public/Images/LandingPage/How Web 3_0 will Impact Businesses_ 2.png",
    title: "Product design",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
    path: "/course/product-design",
  },
  {
    img: "/Images/LandingPage/html-css-collage-concept-with-person 1.png",
    title: "Frontend",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
    path: "/course/frontend",
  },
  {
    img: "/Images/LandingPage/How Web 3_0 will Impact Businesses_ 2 (1).png",

    title: "Backend",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
    path: "/course/backend",
  },

  {
    img: "/Images/LandingPage/How Web 3_0 will Impact Businesses_ 1.png",
    title: "Web3",
    text: "Designing User Interface (UI), Crafting User Experience (UX), branding products.....",
    price: "$4,400",
    path: "/course/web3",
  },
];

export default Courses;
