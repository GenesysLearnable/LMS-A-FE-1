import { useEffect, useState } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 4000,
}) => {
  const [current, setCurrent] = useState(0)

  const next = () =>
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform relative ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute z-20 top-[65%] right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-1 bg-[#ff9053] rounded-full ${
                current === i ? "p-1" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
