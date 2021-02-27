import React, { useState,useCallback,useEffect,useRef } from 'react'
import HomeMenuList from "./HomeMenuList"
import styled from "styled-components";

const HomeMenuBurger = styled.div`
  width:1.5rem;
  height:2rem;
  position:fixed;
  top:65px;
  left:15px;
  display:flex;
  justify-content:space-around;
  flex-flow: column nowrap;
  z-index:4;
  cursor:pointer;

  &:hover{
    div {
        &:nth-child(1){
        transform: ${({open}) => !open ? "rotate(-45deg)":"" };
    }}
  }
  div {
    width: 2rem;
    height:0.25rem;
    background-color:${({open}) => open ? "rgb(252, 170, 50)" : "#fff"};
    border-radius: 10px;
    transform-origin:1px;
    transition:all 0.2s linear;

    
    
    &:nth-child(1){
        transform: ${({open}) => open ? "rotate(45deg)":"rotate(0)" };
    }
    &:nth-child(2){
        transform: ${({open}) => open ? "translateX(-100%)":"translateX(0)" };
        opacity:  ${({open}) => open ? 0:1 }
    }
    &:nth-child(3){
        transform: ${({open}) => open ? "rotate(-45deg)":"rotate(0)" };
    }
  }
  transition: transform 0.3s ;

`;

function useOutsideAlerter(ref,setOpen) {
    useEffect(() => {
        function handleClickOutside(event) {if (ref.current && !ref.current.contains(event.target))setOpen(false);}
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const HomeMenu = () => {
    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            setOpen(false)
        }
    }, []);

    useEffect(() => {
      document.addEventListener("keydown", escFunction, false);
      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }, [escFunction]);
      
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef,setOpen);
    return(
        <div ref={wrapperRef} >
        <HomeMenuBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </HomeMenuBurger>
        <HomeMenuList open={open}></HomeMenuList>
        </div>
    )
}

export default HomeMenu;