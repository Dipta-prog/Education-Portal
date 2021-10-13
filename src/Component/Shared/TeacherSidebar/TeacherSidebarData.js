import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const TeacherSidebarData = [
  {
    title: 'Your Profile',
    path: '/teacher/courses',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Your Courses',
    path: '/teacher/uploadContents',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Enrolled Students',
    path: '/teacher/enrolled ',
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: 'Exam List',
    path: '/sidebar/ExamList',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/sidebar/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: 'Fees',
    path: '/sidebar/admin/fees',
    icon: <IoIcons.IoMdHelpCircle />
  }
];