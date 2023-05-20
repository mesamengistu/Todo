import { useEffect, useState } from "react";
import { taskList } from "../Data/task";
import { sideBarData } from "../Data/task";
import { ImRadioUnchecked } from "react-icons/im";
import { AiOutlineStar } from "react-icons/ai";
import AddTask from "./AddTask";
import DetailBar from "./DetailBar";
const TaskList = ({ id }) => {
  useEffect(() => {
    setTaskDetail({ id: 1, isDisplay: false });
  }, [id]);
  const [taskDeatil, setTaskDetail] = useState({ id: 0, isDisplay: false });
  const taskIds = sideBarData[id].childIds;
  let dummyArr = [];
  for (let i = taskIds.length; i < 13; i++) {
    dummyArr[i] = i;
  }
  const taskWidth = taskDeatil.isDisplay ? "col-lg-7" : "col-lg-12";
  return (
    <div className=" offset-1 col-11">
      <div className="row">
        <div className={" task-list-container " + taskWidth}>
          <table className="table">
            <tbody>
              {taskIds.map((value, index) => {
                return (
                  <tr
                    className="task "
                    key={value}
                    onClick={() => {
                      const prevId = taskDeatil.id;
                      if (prevId === value) {
                        setTaskDetail({
                          id: value,
                          isDisplay: !taskDeatil.isDisplay,
                        });
                      } else {
                        setTaskDetail({
                          id: value,
                          isDisplay: true,
                        });
                      }
                    }}
                  >
                    <th scope="row" className="task-description row">
                      <span className="col-11">
                        <ImRadioUnchecked className="me-2" />
                        {taskList[value].title}
                      </span>
                      <span className=" d-flex align-items-center col-1 ">
                        <AiOutlineStar />
                      </span>
                    </th>
                  </tr>
                );
              })}
              {dummyArr.map((value) => {
                return (
                  <tr className="task" key={value}>
                    <th scope="row" className="task-description"></th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {taskDeatil.isDisplay && (
          <div className="col-lg-5">
            <DetailBar taskDeatil={taskDeatil} />
          </div>
        )}
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  );
};
export default TaskList;
