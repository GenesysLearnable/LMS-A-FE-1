import { createContext, useContext, useState, useEffect } from "react"
import useToken from "./utlis/useToken"
import { toast } from "react-toastify"

const LoginContext = createContext()
const UpdateLoginContext = createContext()
const EmailContext = createContext()

export const LoginStatus = () => {
  return useContext(LoginContext)
}

export const UpdateLoginStatus = () => {
  return useContext(UpdateLoginContext)
}

export const UserEmail = () => {
  return useContext(EmailContext)
}

const LoginProvider = ({ children }) => {
  const { setToken, setEmail, clearToken, token, email } = useToken()
  const [isLoggedIn, setIsLoggedIn] = useState(!!token)

  useEffect(() => {
    setIsLoggedIn(!!token)
  }, [token])

  const logIn = (userToken) => {
    setToken(userToken)
    setIsLoggedIn(true)
  }

  const usersEmail = (userEmail) => {
    setEmail(userEmail)
  }

  const logOut = () => {
    clearToken()
    setIsLoggedIn(false)
    toast.success("Logged Out")
  }

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <UpdateLoginContext.Provider value={{ logIn, logOut }}>
        <EmailContext.Provider value={{ email, usersEmail }}>
          {children}
        </EmailContext.Provider>
      </UpdateLoginContext.Provider>
    </LoginContext.Provider>
  )
}

export default LoginProvider
