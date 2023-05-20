import Profile from "./Profile";
import SideContent from "./SideContent";
import Search from "./Search";
import { useContext } from "react";
const SideBar = () => {
  return (
    <div className=" ">
      <Profile />
      <Search />
      <SideContent />
    </div>
  );
};

export default SideBar;
