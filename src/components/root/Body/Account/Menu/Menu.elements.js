import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom';

export const Menu = styled.div`
    width:20%;
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:0.85rem;
    position:sticky;
    z-index:0;
    flex-flow:column nowrap;

    box-shadow: 0px 100px 50px -40px #ffffff inset,
        0px -100px 50px -40px #ffffff inset,
        -5px 0px 10px -5px rgba(19,39,67,0.3) inset;

    @media screen and (max-width:960px){
        display:none;
    }
`;

export const MenuItem = styled.div`
    width:90%;
    margin-bottom:6px;
    padding-left:8px;
    height:2.5rem;
    transition: 0s;
    cursor: pointer;
    outline: none;
    ${props =>
    props.selected &&
    css`
        border-radius: 5px;
        box-shadow: 1px 0px 3px 0px #1a1b29;
    `}

    &:hover{
        border-radius: 5px;
        box-shadow: 0px 0px 6px 0px #1a1b29;
    }
`;

export const MenuTitle = styled.p`
    color:black;
    padding-top:0.5rem;
`;