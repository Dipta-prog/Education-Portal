import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const TeacherSidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'students',
    path: '/sidebar/students',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Student List',
        path: '/sidebar/students/studentList',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'StudentView',
        path: '/sidebar/students/studentView',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/sidebar/students/studentAdd',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Teachers',
    path: '/sidebar/teachers',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Teacher List',
        path: '/sidebar/teachers/teacherList',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher View',
        path: '/sidebar/teachers/teacherView',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher Add',
        path: '/sidebar/teachers/teacherAdd',
        icon: <IoIcons.IoIosPaper />
      }
    ]
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

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: '/sidebar/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/sidebar/admin/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Fees',
    path: '/sidebar/admin/fees',
    icon: <IoIcons.IoMdHelpCircle />
  }
];