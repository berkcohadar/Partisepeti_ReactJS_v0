import styled from 'styled-components'
import {FaMagento} from 'react-icons/fa';

import { Dropdown } from 'antd';

// import {primaryColor,primaryHover} from "../../globalColors";
import {Link} from 'react-router-dom';

import {Container} from '../../globalStyles'

export const Nav = styled.nav`
height: 80px;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2rem;
position:sticky;
top:1;
z-index:999;
padding-top:10px;
@media screen and (max-width:960px){
    padding-top:0px;
    background-color:#12104d;
    
}
`;

export const NavbarContainer= styled(Container)`
    display: block;
    justify-content:center;
    height:80px;
    ${Container}
`;

export const NavLogo = styled(Link)`
color:black;
justify-self: flex-start;
cursor:pointer;
text-decoration: none;
display:flex;
width:100%;
max-width:200px;
@media screen and (max-width:960px){
    max-width:180px;
    margin-right:auto;
    margin-left:auto;
}
`


export const NavIcon = styled(FaMagento)`
margin-right:0.5rem;
`

export const NavLogoPsepeti = styled.img`
margin-right:0.5rem;
display:block;
    @media screen and (max-width:960px){
       display:none;
        /* transition: all 2 ease;
        position: relative;
        top:0;
        margin-left:auto;
        margin-right:auto;
        width:80%;
        cursor:pointer; */
    }
`
export const SearchBox = styled.div`
width:100%;
max-width:200px;
justify-self: center;
display:block;
margin-left:auto;
margin-right:auto;
top:0;

@media screen and (max-width:960px){
       display:none;
    }

`

export const NavMobileLogoPsepeti = styled.img`
    margin-right:0.5rem;
    display:none;
    margin-right:auto;
    margin-left:auto;
    @media screen and (max-width:960px){
       display:block;
       width:180px;
       margin-top:10px;
        /* transition: all 2 ease;
        position: relative;
        top:0;
        margin-left:auto;
        margin-right:auto;
        width:80%;
        cursor:pointer; */
    }
`
export const MobileIcon = styled.div`
    display:none;
    margin-right:auto;
    margin-left:auto;
    @media screen and (max-width:960px){
    display:block;
    position:absolute;
    top:0;
    left:1;
    transform:translate(-100%,60%);
    font-size:1.8rem;
    cursor:pointer;
    }
`
export const MobileIcons = styled.div`
    display:none;
    margin-left:auto;
    align-items:center;
    
    @media screen and (max-width:960px){
        display:block;
        position:absolute;
        top:0;
        left:${ ( {click} ) => (click ? '-100%' : '' )};
        right:${ ( {click} ) => (click ? '' : 0 )};
        transform: translate(-100%,60%);
        font-size:1.8rem;
        cursor:pointer;
    }
`


export const NavMenu = styled.ul`
    display:none;
    align-items:center;
    list-style:none;
    text-align:center;
    justify-content: center;

    @media screen and (max-width:960px){
        display:flex;
        flex-direction:column;
        background:#0D0C1D;
        transform: ${({ click }) => click ? 'translateX(0)' : 'translateX(-100%)'};
        width:90%;
        height:100vh;
        position:absolute;
        top:0px;
        left:${ ( {click} ) => (click ? 0 : '-100%' )};
        opacity:1;
        transition: transform 0.5s ease-in-out;
        
    }
    `;



export const NavDropdown = styled(Dropdown)`

    margin-right:10px;
    left:0;
    height:50px;
    border-bottom: 1px solid transparent;
    border-radius:0px;
    &:hover{
        border-bottom:1px solid black;
        
    }

    @media screen and (max-width:960px){
        width:100%;

        &:hover{
            border:none;
        }
    }
`
export const NavBoxParentItem = styled.h3`
font-size:1rem;
`

export const NavItem = styled.li`
margin-right:10px;
height:50px;
border-bottom: 1px solid transparent;

&:hover{
    border-bottom:1px solid black;
}

@media screen and (max-width:960px){
    width:100%;

    &:hover{
        border:none;
    }
}
`
export const NavLinks = styled(Link)`
    color:grey;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;
    &:hover{
        color:grey;
        text-decoration:none;
    }
    @media screen and (max-width:960px){
        text-align: center;
        padding:2rem;
        width:100%;
        display:table;

        &:hover{
            color:grey;
            transition:all 0.3 ease;
        }
    }
`

export const NavItemBtn = styled.li`
@media screen and (max-width:960px){
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:120px;
}
`

export const NavBtnLink = styled(Link)`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
padding:8px 16px;
height:100%;
width:100%;
border:none;
outline:none;
`

export const DesktopNavLogoArea = styled(Container)`
display:block;
@media screen and (max-width:960px){
    display:none;

}

`