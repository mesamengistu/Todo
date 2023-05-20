import { ImRadioUnchecked } from "react-icons/im";
import { GrAdd } from "react-icons/gr";
import { AiOutlineFilePdf } from "react-icons/ai";
import { taskList } from "../Data/task";
import {
  BsSun,
  BsClock,
  BsArrowRepeat,
  BsFillCalendar2DateFill,
} from "react-icons/bs";
const DetailBar = ({ taskDeatil }) => {
  return (
    <div className="task-detail-container col-12">
      <ul className=" ps-3 list-group pe-3">
        <li className=" list-group-item">
          <span>
            <ImRadioUnchecked className="me-2 " />
            {taskList[taskDeatil.id].title}
          </span>
          <span className="mt-3 d-block">
            <GrAdd className="me-2" />
            Add Step
          </span>
        </li>
        <li className=" list-group-item">
          <span>
            <BsSun className="me-2" />
          </span>
          Add to My Day
        </li>
        <div className="mt-3 mb-3">
          <li className=" list-group-item">
            <span>
              <BsClock className="me-2" />
            </span>
            Remind me
          </li>
          <li className=" list-group-item">
            <span>
              <BsFillCalendar2DateFill className="me-2" />
            </span>
            Add to My due date
          </li>
          <li className=" list-group-item">
            <span>
              <BsArrowRepeat className="me-2" />
              Repeat
            </span>
          </li>
        </div>
        <li className=" list-group-item">
          <span>
            <AiOutlineFilePdf className="me-2" />
          </span>
          Add file
        </li>
        <li className=" list-group-item">Add note</li>
      </ul>
    </div>
  );
};
export default DetailBar;
