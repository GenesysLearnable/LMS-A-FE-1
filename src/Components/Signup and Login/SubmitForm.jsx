import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { UpdateLoginStatus } from "../../LoginContext"

const SubmitForm = () => {
  const [email, setEmail] = useState("")
  const [isEmail, setIsEmail] = useState(true)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const toggleLogin = UpdateLoginStatus()

  const isValidated = () => {
    let isProceed = true
    let errorMessage = "Please enter  "
    let unmatchedPassword = false

    if (email === null || email === "") {
      isProceed = false
      errorMessage += "email address, "
    } else {
      setIsEmail(false)
    }
    if (password === null || password === "") {
      isProceed = false
      errorMessage += "password"
    }
    if (confirmPassword === null || confirmPassword === "") {
      isProceed = false
    }
    if (password !== confirmPassword) {
      isProceed = false
      unmatchedPassword = true
    }
    if (!isProceed) {
      if (unmatchedPassword) {
        toast.warn("Password does not match")
      } else {
        toast.warning(errorMessage)
      }
    }

    return isProceed
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = { email, password }

    if (isValidated()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          toast.success("Registered Successfully")
          navigate("/")
          toggleLogin()
        })
        .catch((err) => {
          toast.error("Failed: " + err.message)
        })
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
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <button className="px-4 h-12 outline-none border rounded-lg  w-[416px] bg-[#ff9053] text-white">
                <p className="text-center text-white text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                  Signup
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
        )}
      </form>
    </div>
  )
}

export default SubmitForm
