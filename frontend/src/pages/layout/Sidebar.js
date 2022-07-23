import React, { useState } from 'react'
import {Nav} from 'react-bootstrap'



const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? "0": "-100%")};
    transition: 350ms;
    z-index: 10;
`;


const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
        <Nav>        
            <NavIcon to="#">
                <FaIcons.FaBars onClick={showSidebar}></FaIcons.FaBars>
            </NavIcon>
            <h1 style={{textAlign: "center", marginLeft: "200px", color: "green"}}>TCF Libarary</h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {SidebarData.map((item, index) => {return <Submenu item={item} key={index} /> })}
            </SidebarWrap>

        </SidebarNav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar
