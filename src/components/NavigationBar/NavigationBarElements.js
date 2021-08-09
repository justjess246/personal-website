import styled from 'styled-components';
import { AiOutlineAliwangwang } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyles';

export const NavBar = styled.nav`
    background: #101522;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavBarContainer = styled(Container)`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${ Container }
`

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
`

export const NavIcon = styled(AiOutlineAliwangwang)`
    margin-right: 0.5rem;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #4b59f7;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
`
