import { FaRegBell } from "react-icons/fa";

const Account = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return (
    <div className="w-full px-10 text-[14px]">
      <section className="flex items-center justify-end">
        <div className="flex items-center justify-center w-5 h-5 cursor-pointer relative">
          <FaRegBell className="text-black text-[32px]" />
          <div className="notification-dot absolute top-1 right-[1px] w-[6px] h-[6px] bg-red-500 rounded-full"></div>
        </div>
        <img
          className="w-5 h-5 rounded-full ml-2"
          src="/public/Icons/accounts/ellipse 1037.png"
          alt="user dp"
        />
      </section>

      <h1 className="font-bold text-[20px]">Account Settings</h1>
      <p className="font-bold mt-5">Personal information</p>

      <section className="mt-3 py-4 px-8 border rounded-md border-[#BBBCBD]">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center">
            <img
              className="w-14 h-14 rounded-full mr-3"
              src="/public/Icons/accounts/ellipse 1037.png"
              alt="user dp"
            />
            <div className>
              <h1 className="font-bold">Oghenemarho Collins</h1>
              <p className="pt-1 text-[#9B9C9D]">Student</p>
            </div>
          </div>
          <button className="px-4 py-2 border-none text-[#FF9053] bg-orange-50">
            {" "}
            Edit{" "}
          </button>
        </div>

        <div className="mt-5 text-[12px] flex justify-between">
          <div className="w-20">
            <div className="mb-2">First Name</div>
            <div className="text-[#6D6F71] mb-2">Oghenemarho</div>
            <div className="mb-2">Email Address</div>
            <div className="text-[#6D6F71] mb-2">Oghenemarho45@gmail.com</div>
            <div className="mb-2">Password</div>
            <div className="text-[#6D6F71]">********</div>
          </div>
          <div className="w-20">
            <div className="mb-2">Last Name</div>
            <div className="text-[#6D6F71] mb-2">Collins</div>
            <div className="mb-2">Phone</div>
            <div className="text-[#6D6F71] mb-2">08145533192</div>
          </div>
          <div className="w-20"></div>
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
  );
};

export default Account;
