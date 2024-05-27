import { FaRegBell } from "react-icons/fa"
import { UserEmail } from "../../LoginContext"
import useCourseStore from "../../utlis/loader"
import { FaUserAstronaut } from "react-icons/fa6"
import Button from "../../Components/Landingpage/Button"

const Account = () => {
  const { email } = UserEmail()
  const { course } = useCourseStore()
  let user = email.split("@")[0]
  user = user.slice(0, 1).toUpperCase() + user.slice(1, user.length)

  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()
  const formattedDate = `${day}/${month}/${year}`
  return (
    <div className="w-full px-10 pt-3 text-[14px]">
      <section className="flex gap-2 items-center justify-end">
        <div className="flex items-center justify-center w-5 h-5 cursor-pointer relative">
          <FaRegBell className="text-black text-[32px]" />
          <div className="notification-dot absolute top-1 right-[1px] w-[6px] h-[6px] bg-red-500 rounded-full"></div>
        </div>
        {/* <img 
        className="w-5 h-5 rounded-full ml-2"
        src="/public/Icons/accounts/ellipse 1037.png" alt="user dp"
        /> */}
        <div className="bg-[#ff9053] p-2 rounded-full ">
          <FaUserAstronaut className="text-white size-4" />
        </div>
      </section>

      <h1 className="font-bold text-black text-[35px]">Account Settings</h1>
      <p className="font-bold mt-2 text-black text-[20px]">
        Personal information
      </p>

      <section className="mt-5 w-2/3 py-4 px-8 border rounded-md border-[#BBBCBD]">
        <div className="flex justify-between items-center">
          <div className="flex flex-row gap-2 items-center">
            {/* <img 
            className="w-14 h-14 rounded-full mr-3"
            src="/public/Icons/accounts/ellipse 1037.png" alt="user dp"
            /> */}
            <div className="bg-[#ff9053] p-3 rounded-full ">
              <FaUserAstronaut className="text-white size-8" />
            </div>
            <div className>
              <h1 className="font-bold text-[20px]">{user}</h1>
              <p className="pt-1 text-[#9B9C9D] text-[16px]">Student</p>
            </div>
          </div>
          <Button
            title={"Edit"}
            bg={"bg-[#ff9053] hover:bg-[#ff5722]"}
            w={"w-[150px]"}
            h={"h-9"}
          />
        </div>

        <div className="mt-5 pl-2 pr-3 text-[16px] flex justify-between">
          <div>
            <div>
              <div className="mb-1">Student Name</div>
              <div className="text-[#6D6F71] mb-3">{user}</div>
            </div>
            <div>
              <div className="mb-1">Email Address</div>
              <div className="text-[#6D6F71] mb-3">{email}</div>
            </div>
          </div>
          <div>
            <div className="mb-1">Password</div>
            <div className="text-[#6D6F71]">********</div>
          </div>
        </div>
      </section>

      <p className="font-bold mt-8 text-[16px]">Purchase History</p>
      <section className="mt-3 pt-7 pb-10 px-10 border rounded-md border-[#BBBCBD] flex flex-row justify-between">
        <div className="flex flex-col justify-center">
          <div className="font-bold">Description</div>
          <div className="mt-2">Product Design Course.</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold">Amount</div>
          <div className="mt-2">&#8358;4,400.00</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold">Date</div>
          <div className="mt-2">{formattedDate}</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-bold">Status</div>
          <div className="flex flex-row items-center mt-2">
            <div className="h-4 w-4 rounded-full bg-green-300 mr-2"></div>
            <div>Successful</div>
          </div>
        </div>
        <div>
          <img
            src="/public/Icons/accounts/genesys logo.png"
            alt="Logo"
            className="w-20"
          />
        </div>
      </section>
    </div>
  )
}

export default Account
