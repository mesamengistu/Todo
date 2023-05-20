import { FcTodoList } from "react-icons/fc";
import { sideBarData } from "../Data/task";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsLamp } from "react-icons/bs";
const Header = ({ id }) => {
  return (
    <div className="row mb-3">
      <div className="col-lg-4 col-6 mt-2">
        <span className=" ms-2 me-3  fs-3 "> {sideBarData[id].iconName}</span>
        <label className="fs-3 ">{sideBarData[id].title}</label>
      </div>
      <div className="offset-lg-5 col-lg-3 mt-3 offset-2 col-4 ">
        <HiOutlineArrowTopRightOnSquare className="fs-3" />
        <BsLamp className="fs-3 ms-3" />
        <HiOutlineDotsHorizontal className=" ms-3 fs-3" />
      </div>
    </div>
  );
};
export default Header;
