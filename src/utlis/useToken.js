import { useEffect, useState } from "react"

export default function useToken() {
  const [token, setToken] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    const tokenString = sessionStorage.getItem("token")
    const emailString = sessionStorage.getItem("email")

    if (tokenString) {
      try {
        const userToken = JSON.parse(tokenString)
        const userEmail = JSON.parse(emailString)
        setToken(userToken?.token)
        setEmail(userEmail?.email)
      } catch (e) {
        console.error("Failed to parse token from sessionStorage:", e)
      }
    }
  }, [setToken])

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken))
    setToken(userToken.token)
  }

  const saveEmail = (userEmail) => {
    sessionStorage.setItem("email", JSON.stringify(userEmail))
    setEmail(userEmail.email)
  }

  const clearToken = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("email")
  }

  return {
    setToken: saveToken,
    setEmail: saveEmail,
    clearToken,
    token,
    email,
  }
}
