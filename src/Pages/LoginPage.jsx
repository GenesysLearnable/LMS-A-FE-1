import { useState } from "react"
import CASPageLayout from "../Components/Signup and Login/CASPageLayout"
import FormCard from "../Components/Signup and Login/FormCard"
import Input from "../Components/Signup and Login/Input"
import ButtonFeature from "../Components/Signup and Login/ButtonFeature"
import useFetch from "../utlis/useFetch"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { UpdateLoginStatus } from "../LoginContext"
import Spinners from "../Components/Signup and Login/Spinners"

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const fetchData = useFetch()
  const navigate = useNavigate()
  const toggleLogin = UpdateLoginStatus()

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setLoading(false)
    try {
      let res = await fetchData.post("login", formValues)
      console.log(res)
      setLoading(false)
      if (res.success == true) {
        toast.success(res.message)
        navigate("/")
        toggleLogin()
      } else {
        toast.error(res.message)
      }
      return
    } catch (error) {
      setLoading(false)
      toast.error(`${error}`)
      throw new Error(error)
    }
  }

  return (
    <CASPageLayout loading={loading}>
      <FormCard text={"Login"}>
        <div className="flex flex-col gap-3">
          <Input
            name="email"
            type="email"
            placeholder={"Email address"}
            value={formValues.email}
            onChange={handleChange}
          />
          <Input
            name="password"
            type={"password"}
            placeholder={"Password"}
            value={formValues.password}
            onChange={handleChange}
          />
          <ButtonFeature
            text={"Don't have an account?"}
            buttonText={"Login"}
            spanText={" Create account"}
            path={"/signup"}
            onClick={handleSubmit}
          />
        </div>
      </FormCard>
    </CASPageLayout>
  )
}

export default LoginPage
