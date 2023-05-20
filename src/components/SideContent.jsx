import { useContext } from "react";
import { sideBarData } from "../Data/task";
import { UserContext } from "../App";
const SideBar = () => {
  const BarParentId = sideBarData[0].childIds;

  return (
    <div className="row">
      <ul className="  sidebar-list gs-0 ">
        {BarParentId.map((parentId) => {
          return <DisplayBar key={parentId} id={parentId} />;
        })}
      </ul>
    </div>
  );
};
export default SideBar;
const DisplayBar = ({ id }) => {
  const { handleShowTaskBody } = useContext(UserContext);

  return (
    <>
      <li
        className=" ps-1 col-12  d-flex align-items-center"
        onClick={(e) => handleShowTaskBody(e, id)}
      >
        {sideBarData[id].iconName !== "" && (
          <label className=" col-1  icon-container  border rounded-circle  ">
            <label className="icon rounded-circle">
              {sideBarData[id].iconName}
            </label>
          </label>
        )}
        <label>{sideBarData[id].title}</label>
      </li>
    </>
  );
};
