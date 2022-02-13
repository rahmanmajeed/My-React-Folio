import Icon from "../../icons/Icon";
import ImageOval from "../../common/ImageOval";
import logo from "../../../assets/github-logo.png";
import BoxTriangleCard from "../../cards/BoxTriangleCard";
import EventOutside from "../../common/EventOutside";
import { useEffect, useRef, useState } from "react";
function Header() {
  const [card, setCard] = useState(false);
  const profile = useRef(null);
  const handleDropdown = () => {
    const list = profile.current.classList
    setCard((p)=> !p)
    if(Object.values(list).includes('opacity-0')){
      list.remove('opacity-0')
      list.add('opacity-1')
    }else{
      list.add('opacity-0')
    }
  }
  
  return (
    <>
      <div className="bg-[#E2E2E2] box-border w-auto h-14 flex items-center justify-between">
        <div className="py-5 px-5">
          <Icon icon="open-right" size={18} />
        </div>
        <div className="py-5 px-8 cursor-pointer relative">
          <button type="button" onClick={() => handleDropdown(card)}>
            <ImageOval src={logo} alt="img" />
          </button>
          {/* <Icon icon="user" size={28} /> */}
          <EventOutside initialIsVisible={false} curRef={profile}>
          <div ref={profile} className="absolute -mx-36 mt-2 transition transform translate-y-2 duration-500 opacity-0">
              <BoxTriangleCard cardStyle="w-48 h-auto bg-white text-black px-5 py-3">
                <div className="font-bold my-2">Majeed</div>
                <br />
                <div className="font-light text-slate-300 my-2 ">
                  majed@exampale.com
                </div>
                <div className="font-light text-slate-300 my-2 ">Male</div>
                <div className="font-light text-slate-300 my-2 ">Sign Out</div>
              </BoxTriangleCard>
            </div>
          </EventOutside>
            {/* <div ref={profile} className="absolute -mx-36 mt-2 transition transform translate-y-2 duration-500 opacity-0">
              <BoxTriangleCard cardStyle="w-48 h-auto bg-white text-black px-5 py-3">
                <div className="font-bold my-2">Majeed</div>
                <br />
                <div className="font-light text-slate-300 my-2 ">
                  majed@exampale.com
                </div>
                <div className="font-light text-slate-300 my-2 ">Male</div>
                <div className="font-light text-slate-300 my-2 ">Sign Out</div>
              </BoxTriangleCard>
            </div> */}
        </div>
      </div>
    </>
  );
}
export default Header;
