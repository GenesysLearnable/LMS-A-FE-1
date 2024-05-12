import React, { useContext, useState } from "react"

const LoginContext = React.createContext()
const UpdateLoginContext = React.createContext()

export const LoginStatus = () => {
  return useContext(LoginContext)
}

export const UpdateLoginStatus = () => {
  return useContext(UpdateLoginContext)
}

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogIn = () => {
    setIsLoggedIn((prevStatus) => !prevStatus)
  }

  return (
    <LoginContext.Provider value={isLoggedIn}>
      <UpdateLoginContext.Provider value={toggleLogIn}>
        {children}
      </UpdateLoginContext.Provider>
    </LoginContext.Provider>
  )
}

export default LoginProvider
