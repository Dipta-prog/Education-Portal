import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/student/dashboard',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'students',
    path: '/student/students',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Student List',
        path: '/student/students/studentList',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'StudentView',
        path: '/student/students/studentView',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/student/students/studentAdd',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Teachers',
    path: '/student/teachers',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Teacher List',
        path: '/student/teachers/teacherList',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher View',
        path: '/student/teachers/teacherView',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher Add',
        path: '/student/teachers/teacherAdd',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Exam List',
    path: '/student/ExamList',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/student/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: 'student/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: 'student/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Fees',
    path: '/student/fees',
    icon: <IoIcons.IoMdHelpCircle />
  }
];