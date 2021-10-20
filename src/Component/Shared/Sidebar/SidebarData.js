import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Admin Dashboard',
    path: '/adminDashboard',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Students',
    path: '/studentsList',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Student List',
        path: '/studentsList',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'StudentView',
        path: 'viewStudent',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add Student',
        path: '/addStudent',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Teachers',
    path: '/teachersList',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Teacher List',
        path: '/teachersList',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher View',
        path: '/teacherView',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Teacher Add',
        path: '/addTeacher',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Manage Department',
    path: '/addDepartment',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Department List',
        path: '/allDepartment',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Department Add',
        path: '/addDepartment',
        icon: <IoIcons.IoIosPaper />
      }
    ]
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
    title: 'Make New Admin',
    path: '/makeNewAdmin',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Add Events',
    path: '/addAnEvent',
    icon: <IoIcons.IoMdHelpCircle />
  }
];