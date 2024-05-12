import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { UpdateLoginStatus } from "../../LoginContext"
import FormCard from "./FormCard"
import Input from "./Input"
import ButtonFeature from "./ButtonFeature"

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

    const signUpApi = import.meta.env.VITE_SIGNUP_ENDPOINT
    // const localServer = import.meta.env.VITE_LOCALSERVER_URL
    const user = { email, password }

    if (isValidated()) {
      fetch(signUpApi, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          if (res.status !== 200) {
            toast.error("Error : " + res.status + " Failed to signup:")
          } else {
            toast.success("Registered Successfully")
            navigate("/")
            toggleLogin()
            console.log(res)
            console.log(res.status)
          }
        })
        .catch((err) => {
          toast.error("Failed: " + err.message)
        })
    }
  }

  return (
    <>
      {isEmail ? (
        <FormCard text={"Create account"} action={handleSubmit}>
          <Input
            type={"email"}
            placeholder={"Email address"}
            value={email}
            setValue={setEmail}
          />

          <ButtonFeature
            text={"Already have an account?"}
            buttonText={"Continue"}
            spanText={" Login"}
            path={"/login"}
          />
        </FormCard>
      ) : (
        <FormCard text={"Create account"} action={handleSubmit}>
          <div className="flex flex-col gap-5">
            <Input
              type={"text"}
              placeholder={"Password"}
              value={password}
              setValue={setPassword}
            />
            <Input
              type={"text"}
              placeholder={"Confirm password"}
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
            <ButtonFeature
              text={"Already have an account?"}
              buttonText={"Signup"}
              spanText={" Login"}
              path={"/login"}
            />
          </div>
        </FormCard>
      )}
    </>
  )
}

export default SubmitForm
