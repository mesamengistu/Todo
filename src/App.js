import { useState, createContext } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { AiOutlineMenu } from "react-icons/ai";

import TaskList from "./components/TaskList";
const clientId =
  "589723816804-1uj5qgn673fha0jhfti1f4us51as8s7h.apps.googleusercontent.com";
export const UserContext = createContext();
function App() {
  const [activeTask, setActiveTask] = useState(1);
  const [toggleBar, setToggleBar] = useState(true);
  const barToggleClass = toggleBar ? "" : "hide-bar";
  const barBorder = toggleBar ? "" : "";
  const handleShowTaskBody = (e, id) => {
    setActiveTask(id);
  };
  return (
    <div className="row App " style={{ marginTop: "10px" }}>
      <div
        className={
          " sidebar-width  pe-1 whole-bar-container border-end " + barBorder
        }
      >
        <label
          className="toggle-bar-conatiner  ms-3 mb-2"
          onClick={() => setToggleBar(!toggleBar)}
        >
          <AiOutlineMenu className="toggle-icon-bar" />
        </label>
        <div className={barToggleClass}>
          <UserContext.Provider value={{ handleShowTaskBody }}>
            <SideBar />
          </UserContext.Provider>
        </div>
      </div>
      <div className="body-container">
        <div className="row">
          <Header id={activeTask} />
          <TaskList id={activeTask} />
        
        </div>
      </div>
    </div>
  );
}
export default App;
