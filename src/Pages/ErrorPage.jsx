import Button from "../Components/Landingpage/Button"

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <figure className="flex flex-col items-center justify-center">
        <img
          className="size-80 md:size-96 object-fill"
          src={"/src/Images/error.png"}
          alt="error"
        />
        <figcaption>
          <p className="text-xl md:text-4xl text-center text-neutral-800 font-extrabold pt-6 pb-3 font-['Roboto'] leading-normal">
            404 page not found
          </p>
          <p className="text-center text-base font-bold text-neutral-800 font-['Roboto'] leading-normal">or something like that</p>
        </figcaption>
      </figure>

      <div className="py-4 px-5 mt-4 rounded-lg">
        <Button title={"Back to Home"} bg={"bg-[#ff9053]"} path={"/"} />
      </div>
    </section>
  )
}

export default ErrorPage
