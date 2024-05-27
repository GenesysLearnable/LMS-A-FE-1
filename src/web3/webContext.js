import React, { createContext, useState, useEffect, useContext } from "react"
import { ERC_CONTRACT_ADDRESS, ERC_CONTRACT_ABI } from "../constants/index"
import { Contract, formatEther, parseEther, getAddress, ethers } from "ethers"

const Web3Context = createContext()

export const useWeb3Context = () => {
  return useContext(Web3Context)
}

const Web3Provider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("")
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [memos, setMemos] = useState([])
  const [loading, setLoading] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)
  const [owner, setOwner] = useState(false)
  const [newOwner, setNewOwner] = useState("")
  const [balance, setBalance] = useState(0)
  const [accountAddress, setAccountAddress] = useState("")

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onPriceChange = (event) => {
    setAmount(event.target.value)
  }

  const onOwnerChange = (event) => {
    setNewOwner(event.target.value)
  }

  const isWalletConnected = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        console.log("Make sure you have metamask!")
        return
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      })

      if (accounts.length > 0) {
        const account = accounts[0]
        console.log("Found an authorized account:", account)
        setCurrentAccount(accounts[0])
        setWalletConnected(true)
        alert("wallet connection successful")
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        alert("Get Metamask!")
        return
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      const account = getAddress(accounts[0])
      console.log("Connected", accounts[0])
      setCurrentAccount(accounts[0])
      setWalletConnected(true)
      setAccountAddress(account)
    } catch (error) {
      console.log(error)
    }
  }

  const depositTokens = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(
          ERC_CONTRACT_ADDRESS,
          ERC_CONTRACT_ABI,
          signer
        )

        let depositAmount = parseEther(amount)
        console.log("Depositing", depositAmount)

        const tx = await contract.depositToken(name, { value: depositAmount })
        setLoading(true)
        await tx.wait()
        console.log("Deposited", depositAmount)
        setLoading(false)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const isOwner = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(
          ERC_CONTRACT_ADDRESS,
          ERC_CONTRACT_ABI,
          signer
        )

        const owner = await contract.getOwner()
        if (owner === currentAccount) {
          setOwner(true)
        }
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const withdrawToken = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(
          ERC_CONTRACT_ADDRESS,
          ERC_CONTRACT_ABI,
          signer
        )

        console.log("Withdrawing")

        const tx = await contract.withdraw()
        setLoading(true)
        await tx.wait()
        console.log("Withdrew")
        setLoading(false)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getMemos = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(
          ERC_CONTRACT_ADDRESS,
          ERC_CONTRACT_ABI,
          signer
        )

        const memos = await contract.getLogs()
        setMemos(memos)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const claimReward = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(
          ERC_CONTRACT_ADDRESS,
          ERC_CONTRACT_ABI,
          signer
        )

        console.log("Claiming reward")

        const tx = await contract.claimReward()
        setLoading(true)
        await tx.wait()
        console.log("Claimed reward")
        setLoading(false)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const transferOwnership = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(
          ERC_CONTRACT_ADDRESS,
          ERC_CONTRACT_ABI,
          signer
        )

        console.log("Transferring ownership")

        const tx = await contract.transferOwnership(newOwner)
        setLoading(true)
        await tx.wait()
        console.log("Transferred ownership")
        setLoading(false)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const contractBalance = async () => {
    try {
      const { ethereum } = window
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(
          ERC_CONTRACT_ADDRESS,
          ERC_CONTRACT_ABI,
          provider
        )

        const balance = await contract.getContractBalance()
        setBalance(formatEther(balance))
        console.log("Contract balance", formatEther(balance))
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isWalletConnected()
  }, [])

  return (
    <Web3Context.Provider
      value={{
        currentAccount,
        walletConnected,
        owner,
        newOwner,
        balance,
        name,
        amount,
        memos,
        loading,
        accountAddress,
        connectWallet,
        onNameChange,
        onPriceChange,
        onOwnerChange,
        depositTokens,
        isOwner,
        withdrawToken,
        getMemos,
        claimReward,
        transferOwnership,
        contractBalance,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Provider
