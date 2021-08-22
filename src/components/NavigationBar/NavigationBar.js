import React, { useState } from 'react'
import { 
    NavBar, 
    NavBarContainer, 
    NavLogo, 
    NavIcon,
    NavMenu,
    NavItem,
    NavLink
 } from './NavigationBarElements';

const NavigationBar = () => {
    const [click, setCLick] = useState(false)

    const handleClick = () => setCLick(!click)

    return (
        <div>
            <NavBar>
                <NavBarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        JB
                    </NavLogo>
                    <NavMenu onCLick={handleClick}>
                        <NavItem>
                            <NavLink to='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to={'/page#projects'}>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to={'/page#art'}>Art</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to={'/page#contact'}>Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </NavBar>
        </div>
    )
}

export default NavigationBar



