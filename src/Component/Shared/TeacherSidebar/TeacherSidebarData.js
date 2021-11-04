import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const TeacherSidebarData = [
  {
    title: "Your Profile",
    path: "/teacherProfile",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Your Courses",
    path: "/teacher/teacherCourse",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Enrolled Students",
    path: "/enrolledStudent",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Exam List",
    path: "/sidebar/ExamList",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Content Upload Form",
    path: "/teacherForm",
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: "Fees",
    path: "/sidebar/admin/fees",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
