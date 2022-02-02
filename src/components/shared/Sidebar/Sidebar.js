import Divider from "../Divider";
import SideBarIcon from "./SidebarIcon";
import logo from "./../../../assets/logo.svg";
import Icon from "../../icons/Icon";
function Sidebar() {
  return (
    <>
      <div className="flex flex-col">
        {/** logo & text part */}
        <div className="box-border w-auto h-14">
          <div className="flex items-center justify-between py-4 px-5">
            <div className="flex items-center ml-15px">
              <Icon icon="site-logo" color="#AAA" size={30} />
              <h1 className="text-white text-md mx-2 ml-3 font-medium">
                Majeed
              </h1>
            </div>

            <button
              className="cursor-pointer focus:outline-none"
              onClick={() => {}}
              type="button"
            >
              <Icon icon="close-left" color="#AAA" size={18} />
            </button>
          </div>
        </div>
      </div>

      {/** flex container */}
      {/** small sidebar */}
      <div className="hidden md:flex lg:hidden">
        {/** sidebar */}
        <div className="fixed top-0 left-0 flex flex-col h-screen w-1/12  m-0 bg-[#242424] text-white shadow-lg ">
          <div className="mx-auto py-2">
            <Icon icon="site-logo" color="#AAA" size={30} />
          </div>
          <Divider />
          {/** sidebar icon */}
          <SideBarIcon icon={"A"} />
          <SideBarIcon icon={"B"} />
          <SideBarIcon icon={"C"} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
