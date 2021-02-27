import React, { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: #1a1b29;
  position: fixed;
  transform: ${({ open }) => (!open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  left: -300px;
  height: 100vh;
  width: 300px;
  padding-top: 7.5rem;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  li {
    font-size: 16px;
    padding: 6px 20px;
    color: #eee;
    padding-top: 3px;
    p {
      font-size: 14px;
      padding: 3px 30px;
      color: #fff;
    }
  }
`;

const HomeMenuList = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        Partisepeti
        <p>Bakalim</p>
        <p>Nasil</p>
        <p>Oldu</p>
      </li>
      <li>
        Scistone
        <p>Bence</p>
        <p>Baya</p>
        <p>Iyi</p>
        <p>Oldu</p>
      </li>
      <li>
        Gururla
        <p>Saaardi</p>
      </li>
      <li>
        Sunar
      </li>
      <li>
        ESC'YE BAS + BU SUTUN DISINDA BIR YERE TIKLA.
      </li>
    </Ul>
  );
};

export default HomeMenuList;
