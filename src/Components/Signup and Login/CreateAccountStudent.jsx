import { useState } from "react"
import CASPageLayout from "./CASPageLayout"
import useFetch from "../../utlis/useFetch"
import { useNavigate } from "react-router-dom"
import { UpdateLoginStatus } from "../../LoginContext"
import { toast } from "react-toastify"
import FormCard from "./FormCard"
import Input from "./Input"
import ButtonFeature from "./ButtonFeature"

const CreateAccountStudent = () => {
  const [isEmail, setIsEmail] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const fetchData = useFetch()

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const navigate = useNavigate()
  const toggleLogin = UpdateLoginStatus()

  const isValidated = () => {
    let isProceed = true
    let errorMessage = "Please enter  "
    let unmatchedPassword = false

    if (formValues.email === null || formValues.email === "") {
      isProceed = false
      errorMessage += "email address, "
    } else {
      setIsEmail(false)
    }
    if (formValues.password === null || formValues.password === "") {
      isProceed = false
      errorMessage += "password"
    }
    if (
      formValues.confirmPassword === null ||
      formValues.confirmPassword === ""
    ) {
      isProceed = false
    }
    if (formValues.password !== formValues.confirmPassword) {
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

  const handleSubmit = async () => {
    if (isValidated()) {
      const formData = {
        email: formValues.email,
        password: formValues.password,
      }

      setIsLoading(true)
      try {
        let res = await fetchData.post("", formData)
        setIsLoading(false)
        if (res.success == true) {
          toast.success(res.message)
          navigate("/")
          toggleLogin()
        } else {
          toast.error(res.message) || toast.error(res.error)
        }
      } catch (error) {
        setIsLoading(false)
        toast.error(`${error}`)
        throw new Error(error)
      }
    }
  }

  return (
    <CASPageLayout loading={isLoading}>
      {isEmail ? (
        <FormCard text={"Create account"}>
          <Input
            name="email"
            type="email"
            placeholder={"Email address"}
            value={formValues.email}
            onChange={handleChange}
          />

          <ButtonFeature
            text={"Already have an account?"}
            buttonText={"Continue"}
            spanText={" Login"}
            path={"/login"}
            onClick={handleSubmit}
          />
        </FormCard>
      ) : (
        <FormCard text={"Create account"}>
          <div className="flex flex-col gap-5">
            <Input
              name="password"
              type={"text"}
              placeholder={"Password"}
              value={formValues.password}
              onChange={handleChange}
            />
            <Input
              name="confirmPassword"
              type={"text"}
              placeholder={"Confirm password"}
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            <ButtonFeature
              text={"Already have an account?"}
              buttonText={"Signup"}
              spanText={" Login"}
              path={"/login"}
              onClick={handleSubmit}
            />
          </div>
        </FormCard>
      )}
    </CASPageLayout>
  )
}

export default CreateAccountStudent
