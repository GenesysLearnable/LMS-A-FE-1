import { useState } from "react"
import { Link } from "react-router-dom"

const SubmitForm = () => {
    const [value, setValue] = useState("")
    const [isEmail, setIsEmail] = useState(true)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      if (isEmail) {
        setIsEmail(false)
      }
    }
  
    return (
      <div className="flex flex-col ">
        <p className="text-zinc-800  pb-8 text-[30px] font-medium font-['Roboto']">
          Create account
        </p>
  
        <form onSubmit={handleSubmit} action="submit">
          {isEmail ? (
            <>
              <input
                className="px-4 h-12 border-[1px] border-[#79747e] rounded-md w-[416px] focus:outline-[#ff9053]"
                type="text"
                placeholder="Email address"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <div className="pt-[20px] flex flex-col justify-center items-center gap-3">
                <button className="px-4 h-12 outline-none border rounded-lg  w-[416px] bg-[#ff9053] text-white">
                  <p className="text-center text-white text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                    Continue
                  </p>
                </button>
  
                <p className="opacity-60 text-neutral-400 text-base font-medium font-['Roboto']">
                  Already have an account?{" "}
                  <Link to={"/other"}>
                    <span className="text-orange-400">Login</span>
                  </Link>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-5">
                <input
                  className="px-4 h-12 border-[1px] border-[#79747e] rounded-md w-[416px] focus:outline-[#ff9053] hover:placeholder:"
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="px-4 h-12 border-[1px] border-[#79747e] rounded-md w-[416px] focus:outline-[#ff9053] hover:placeholder:"
                  type="text"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className="text-center py-1 text-neutral-400 text-sm font-normal font-['Roboto']">
                  By signing up, you agree with our{" "}
                  <span className="text-orange-400"> terms and conditions </span>
                </p>
              </div>
              <div className="pt-[20px] flex flex-col justify-center items-center gap-3">
                <Link to={"/other"}>
                  <button className="px-4 h-12 outline-none border rounded-lg  w-[416px] bg-[#ff9053] text-white">
                    <p className="text-center text-white text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                      Signup
                    </p>
                  </button>
                </Link>
                <p className="opacity-60 text-neutral-400 text-base font-medium font-['Roboto']">
                  Already have an account?{" "}
                  <Link to={"/"}>
                    <span className="text-orange-400">Login</span>
                  </Link>
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    )
  }

  export default SubmitForm