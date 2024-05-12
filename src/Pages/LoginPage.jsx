import { useState } from "react"
import CASPageLayout from "../Components/Signup and Login/CASPageLayout"
import FormCard from "../Components/Signup and Login/FormCard"
import Input from "../Components/Signup and Login/Input"
import ButtonFeature from "../Components/Signup and Login/ButtonFeature"

const LoginPage = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = () => {}

  return (
    <CASPageLayout>
      <FormCard text={"Login"} action={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input
            type={"text"}
            placeholder={"Email address"}
            value={email}
            setValue={setEmail}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            value={password}
            setValue={setPassword}
          />
          <ButtonFeature
            text={"Don't have an account?"}
            buttonText={"Login"}
            spanText={" Create account"}
            path={"/signup"}
          />
        </div>
      </FormCard>
    </CASPageLayout>
  )
}

export default LoginPage
