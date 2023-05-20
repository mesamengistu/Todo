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
    title: "root",
    childIds: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  1: {
    title: "My Day",
    childIds: [0, 1, 2, 3, 4, 5],
    iconName: <BsSun />,
  },
  2: {
    title: "Important",
    childIds: [],
    iconName: <AiOutlineStar />,
  },
  3: {
    title: "Planned",
    childIds: [],
    iconName: <FcPlanner />,
  },
  4: {
    title: "All",
    childIds: [0, 1, 2, 3, 4, 5],
    iconName: <BsInfinity />,
  },
  5: {
    title: "Completed",
    childIds: [],
    iconName: <AiOutlineCheckCircle />,
  },
  6: {
    title: "Assigned to me",
    childIds: [],
    iconName: <BsFillPersonFill />,
  },
  7: {
    title: "Tasks",
    childIds: [],
    iconName: <AiOutlineHome />,
  },
  8: {
    title: "Custom",
    childIds: [],
    iconName: <AiOutlineMenu />,
  },
};
export const taskList = {
  0: {
    title:
      "we will have to achive this project for implementing software  ",
    childIds: [],
    iconName: <AiOutlineMenu />,
  },
  1: {
    title: "Some time it is better to change for better look ",
    childIds: [],
    iconName: <AiOutlineMenu />,
  },
  2: {
    title: "why not me change ",
    childIds: [],
    iconName: <AiOutlineMenu />,
  },
  3: {
    title:
      "we will have to achive this project for implementing software  ",
    childIds: [],
    iconName: <AiOutlineMenu />,
  },
  4: {
    title: "Some time it is better to change for better look ",
    childIds: [],
    iconName: <AiOutlineMenu />,
  },
  5: {
    title: "why not me change ",
    childIds: [],
    iconName: <AiOutlineMenu />,
  },
};
