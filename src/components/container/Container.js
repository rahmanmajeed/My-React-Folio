import MobileSidebar from "../shared/Sidebar/MobileSidebar";
import Header from "../shared/Header/Header";
import Wrapper from "./Wrapper";
import Footer from "../shared/Footer/Footer";

function Container() {
  return (
    <>
      <div className="grid mx-auto">
        <MobileSidebar />
        <Header />
        <Wrapper />
        <Footer />
      </div>
    </>
  );
}

export default Container;
