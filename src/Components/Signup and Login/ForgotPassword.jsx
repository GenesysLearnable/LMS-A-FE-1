import { useState } from "react"
import CASPageLayout from "./CASPageLayout"
import FormCard from "./FormCard"
import Input from "./Input"
import ButtonFeature from "./ButtonFeature"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import useFetch from "../../utlis/useFetch"

const ForgotPassword = () => {
  const [loading, setLoading] = useState("")
  const [email, setEmail] = useState({
    email: "",
  })

  const navigate = useNavigate()
  const fetchData = useFetch()

  const handleChange = ({ target: { name, value } }) => {
    setEmail((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      let res = await fetchData.put("forgot-password", email)
      setLoading(false)
      if (res.success == true) {
        toast.success(`${res.message}`)
        navigate("")
      } else {
        toast.error(`${res.message}`)
      }
      return
    } catch (error) {
      setLoading(false)
      navigate("")
      toast.error(`${error}`)
      throw new Error(error)
    }
  }

  return (
    <CASPageLayout loading={loading}>
      <FormCard
        text={"Forgot your password?"}
        subtext={"Please enter your email to reset password"}
      >
        <div className="flex flex-col gap-3">
          <Input
            name="email"
            type="email"
            placeholder={"Email address"}
            value={email.email}
            onChange={handleChange}
          />

          <ButtonFeature
            buttonText={"Continue"}
            onClick={handleSubmit}
            text={
              <p
                onClick={() => navigate(`/login`)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <FaArrowLeftLong className="size-4 " /> Return to login page
              </p>
            }
          />
        </div>
      </FormCard>
    </CASPageLayout>
  )
}

export default ForgotPassword
