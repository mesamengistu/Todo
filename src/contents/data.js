import { BsSun, BsInfinity, BsFillPersonFill } from "react-icons/bs";
import { FcPlanner } from "react-icons/fc";
import {
  AiOutlineStar,
  AiOutlineCheckCircle,
  AiOutlineHome,
  AiOutlineMenu,
} from "react-icons/ai";
export const sideBarData = {
  0: {
    id: 0,
    title: "Root",
    childIds: [1, 2, 3, 4, 5, 6, 7, 8],
    iconName: "",
  },
  1: {
    id: 1,
    title: "My Day",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <BsSun />
      </label>
    ),
  },
  2: {
    id: 2,
    title: "Important",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <AiOutlineStar />
      </label>
    ),
  },
  3: {
    id: 3,
    title: "Planned",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <FcPlanner />
      </label>
    ),
  },
  4: {
    id: 4,
    title: "All",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <BsInfinity />
      </label>
    ),
  },
  5: {
    id: 5,
    title: "Completed",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <AiOutlineCheckCircle />
      </label>
    ),
  },
  6: {
    id: 6,
    title: "Assigned to me",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <BsFillPersonFill />
      </label>
    ),
  },
  7: {
    id: 7,
    title: "Tasks",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <AiOutlineHome />
      </label>
    ),
  },
  8: {
    id: 7,
    title: "Custom",
    childIds: [],
    iconName: (
      <label className="icon rounded-circle">
        <AiOutlineMenu />
      </label>
    ),
  },
};
