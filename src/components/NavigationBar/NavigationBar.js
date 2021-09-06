import React, { useState, useEffect } from 'react'
import { 
    NavBar, 
    NavBarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtnLink
 } from './NavigationBarElements';
 import { IconContext } from 'react-icons/lib';
 import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);

    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <NavBar>
                    <NavBarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon />
                            JB
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onCLick={handleClick} click={click}>
                            <NavItem>
                                <NavLink to='/'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to={'/page#projects'} onClick={closeMobileMenu}>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to={'/page#art'} onClick={closeMobileMenu}>Art</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to={'/page#contact'} onClick={closeMobileMenu}>Contact</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </NavBar>
            </IconContext.Provider>
        </div>
    )
}

export default NavigationBar



