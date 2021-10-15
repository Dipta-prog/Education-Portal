import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TeacherSidebarData } from './TeacherSidebarData';
import TeacherSubMenu from './TeacherSubMenu';

const TeacherSidebarNav = styled.nav`
background: #15171c;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`;

const TeacherSidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#BC3C3C' }}>
                <div className="nav">
                    <Link to="#">
                        <div className="navIcon">
                            <FaIcons.FaBars onClick={showSidebar} />
                        </div>
                    </Link>
                </div>
                <TeacherSidebarNav sidebar={sidebar}>
                    {/* <div className="navIcon">
                        <AiIcons.AiOutlineClose onClick={showSidebar} />
                    </div> */}
                    <div className="sidebarWrap">
                        <Link to='#'>
                            <div className="navIcon">
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </div>
                        </Link>
                        {TeacherSidebarData.map((item, index) => {
                            return <TeacherSubMenu item={item} key={index} />;
                        })}
                    </div>
                </TeacherSidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default TeacherSidebar;