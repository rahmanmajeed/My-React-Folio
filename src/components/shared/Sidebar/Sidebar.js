import Divider from "../Divider";
import SideBarIcon from "./SidebarIcon";
function Sidebar() {
  return (
    <>
      {/** flex container */}
      <div className="hidden md:flex lg:hidden">
        {/** sidebar */}
        <div className="fixed top-0 left-0 flex flex-col h-screen w-1/12  m-0 bg-gray-800 text-white shadow-lg ">
          {/** sidebar icon */}
          <SideBarIcon icon={"A"} />
          <SideBarIcon icon={"B"} />
          <Divider />
          <SideBarIcon icon={"C"} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
