import { Link } from "react-router-dom"

const Course = ({ img, title, text, price, path }) => {
  const starArray = []
  for (let i = 0; i < 5; i++) {
    starArray.push("/Icons/Landingpage/Star 1.png")
  }

  return (
    <Link to={path}>
      <section className="bg-[#f5f6f9] pb-[17.9px] shadow-md border rounded-xl">
        <img
          className="h-[196.2px] w-[312px] rounded-t-xl "
          src={img}
          alt="ui image"
        />

        <article className="flex px-[13.42px] flex-col pt-4 ">
          <img
            className="h-3 w-11"
            src={"/Logos/Landingpage/download (1) 1 (1).png"}
            alt="genesys logo"
          />
          <p className="text-[#041d31] w-[253px] text-[19.03px] font-black font-['Poppins']">
            {title.toUpperCase()}
          </p>

          <p className="text-[#041d31c2] w-[255.38px]  text-[11.10px] font-semibold font-['Poppins'] leading-[18.88px]">
            {text}
          </p>

          <p className="text-[#041d31] pt-[6.71px] gap-1 pb-[4.58px] flex items-center text-[10.06px] font-normal font-['Poppins'] leading-[17.11px]">
            4.6{" "}
            <span className="flex items-center">
              {starArray.map((star, index) => (
                <img key={index} src={star} alt="star icon" />
              ))}
            </span>
          </p>

          <p className="text-[#041d31] text-base font-bold font-['Poppins']">
            {price}
          </p>
        </article>
      </section>
    </Link>
  )
}

export default Course
