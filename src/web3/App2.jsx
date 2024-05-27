import React, { useEffect, useState } from "react"
import { ERC_CONTRACT_ADDRESS, ERC_CONTRACT_ABI } from "../constants/index"
//import Web3Modal from "web3modal";
import { Contract, formatEther, parseEther, getAddress, ethers } from "ethers"

export default function App2() {
  const [currentAccount, setCurrentAccount] = useState("")
  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [memos, setMemos] = useState([])
  const [loading, setLoading] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)
  const [owner, setOwner] = useState(false)
  const [newOwner, setNewOwner] = useState("")
  const [balanace, setBalance] = useState(0)
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

  //Wallet Connection Logic
  const isWalletConnected = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        console.log("Make sure you have metamask!")
        return
      } else {
        console.log("We have the ethereum object", ethereum)
      }

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      })

      if (accounts.length > 0) {
        const account = accounts[0]
        console.log("Found an authorized account:", account)
        setCurrentAccount(accounts)
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
        const contract = Contract(
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
        console.log("Withdrew", withdrawAmount)
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

  const transferOwer = async () => {
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

        console.log("Transfering ownership")

        const tx = await contract.transferOwnership(newOwner)
        setLoading(true)
        await tx.wait()
        console.log("Transfered ownership")
        setLoading(false)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  //Only the owner should be able to see the balance. restrict it using owner bool.
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

  const renderButton = () => {
    if (walletConnected) {
      return (
        <button type="button">
          {accountAddress.slice(0, 6) + "..." + accountAddress.slice(38, 42)}
        </button>
      )
    } else {
      return (
        <button
          className="bg-[#ff9053] px-3.5 py-3 rounded-lg gap-1 text-white shadow hover:text-[#ffffffe3] duration-200 flex justify-center items-center hover:bg-[#ff5722] h-9 w-[150px]"
          type="button"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )
    }
  }

  return (
    <section className="flex flex-col items-center w-full h-screen bg-slate-200 ">
      <section className="rounded-xl py-6 shadow-xl mt-[200px] bg-white flex flex-col items-center justify-center w-1/3">
        <div className="flex flex-col items-center py-3 text-lg">
          {owner ? (
            <div>
              <h1 className="text-2xl font-bold">Owner</h1>
              <button onClick={connectWallet}>Connect Wallet</button>
            </div>
          ) : (
            <h1 className="text-2xl font-bold">Not an Owner</h1>
          )}
          {/* {owner ? (
            <div>
              <h1>Owner</h1>
            </div>
          ) : (
            <button onClick={withdrawToken}>withdrawBalance</button>
          )} */}
        </div>
        {renderButton()}
      </section>
    </section>
  )
}
