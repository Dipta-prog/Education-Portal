import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'students',
    path: '/admin/students',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Student List',
        path: '/admin/students/studentList',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'StudentView',
        path: '/admin/students/studentView',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/admin/students/studentAdd',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Teachers',
    path: '/admin/teachers',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Teacher List',
        path: '/admin/teachers/teacherList',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher View',
        path: '/admin/teachers/teacherView',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher Add',
        path: '/admin/teachers/teacherAdd',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Exam List',
    path: '/admin/ExamList',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Messages',
    path: '/admin/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Message 1',
        path: 'admin/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: 'admin/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Fees',
    path: '/admin/fees',
    icon: <IoIcons.IoMdHelpCircle />
  }
];