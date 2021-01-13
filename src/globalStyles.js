import styled,{createGlobalStyle} from 'styled-components'

import { Input } from 'antd';
import {primaryColor,primaryHover} from "./globalColors";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin: 0;
    padding:0;
    font-family:'Source Sans Pro',sans-serif;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active,
a:hover {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  color: #000 !important;
}
//eskiler
.App {
  margin-top: 30px;

  text-align: center;
}
.header {
  margin-top: 0px;
  margin-bottom: 30px;
}
.searchContainer {
  padding-top: 15px !important;
}
.onSearch {
  border-bottom: 0.07rem solid rgb(240, 240, 240) !important;
  border-radius: 0px !important;
}
.menubar-container {
  background-color: #ffffff;
}
.collection {
  margin-bottom: 7px;
  align-items: center;
}
.collection img {
  border: none;
  margin-right: auto;
  margin-left: auto;
}
.prod-row {
  margin-top: 20px;
}

.footer {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  background-color: #e4e4e4;
  display: flex;
  margin-top: 430px;
  height: 515px;
  
  @media screen and (max-width:960px){
    display:none;
}
  
}
.footer__wrapper {
  padding-top: 50px;
  padding-bottom: 55px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
}
.footer_list {
  font-size: 16px;
  color: #222;
  padding: 30px;
  padding-left: 40px;
}
.footer_item_text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  color: #222;
  font-size: 14px;
  border-bottom: 1px solid #e4e4e4 !important;
}
.footer_item_text:hover {
  border-bottom: 1px solid black !important;
}
.footer-copyright {
  background-color: black;
  display: block !important;
  width: 100%;
}

.site-button-ghost-wrapper {
  color: rgb(0, 0, 0) !important;
  border-color: black;
}
.site-button-ghost-wrapper:hover {
  color: white !important;
}
.site-button-ghost-wrapper::selection {
  color: rgb(33, 107, 30);
}

.btn-add-adress {
  margin-top: 20px;
}
.prod-star {
  margin-top: 5px;
}
.prod-star svg {
  width: 80%;
}
.add-to-cart {
  font-size: x-large;
  margin-right: 2px;
  color: rgb(187, 70, 70);
  position: relative;
  display: block;
  opacity: 0.7;
  transition: 0.3s;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
  /* transition: transform .3s;  */
}

.add-to-cart:hover {
  opacity: 1;
}
.add-to-cart > svg {
  transition: transform 0.3s;
}

.add-to-cart > svg:hover {
  transform: scale(1.3);
}


.product-app {
  width: 1200px;
  margin: 0 auto;
}
.product-app-container {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.prod-rslt {
  display: flex;
  margin-top: 15px;
}
.filter-cont {
  width: 220px;
  margin-right: 10px;
  visibility: visible;
}
#sticky {
  padding-top: 20px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

.filter-elem-list {
  display: block !important;
  margin-top: 60px;
}

.prod-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.fltrs-wrppr {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 185px;
  margin: 15px 0 0 0;
}

.header-icon {
  opacity: 0.8;
  transition: 0.3s;
}

.header-icon:hover {
  border-color: #000 !important;
  color: #000 !important;
  opacity: 1;
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
  color: #000;
  border-bottom: 2px solid #fff;
  
}

.ant-menu-submenu-title {
  opacity: 0.8;
  transition: 0.3s;
  color: #000 !important;
  border-bottom: 2px solid #fff;
  
}

.ant-menu-submenu-title:hover {
  color: #000 !important;
  border-bottom: 2px solid #000;
  opacity: 1;
  
}
.radioStyle {
  display: "block";
  height: "30px";
  line-height: "30px";
  width: 185px;
  margin: 15px 0 0 0;
  
}

.cart-divs {
  margin-left: 80px !important;
}

.go-to-payment {
  background-color: rgb(104, 145, 195) !important;
  border-color: #6891c3;
}
.go-to-payment span {
  color: white;
}
.go-to-payment:hover {
  background-color: rgb(55, 96, 146) !important;
  border-color: rgb(55, 96, 146);
}
.go-to-payment:focus {
  border-color: rgb(0, 0, 0);
}
.carousel-container{
  height: 450px !important;
}
.carousel-item-padding-40-px{
  padding-left: 37px !important;

}
.best-collections-menu{
  margin-top: 60px !important;
}
.best-collections-menu::selection{
  color: #000000;
}
.react-multi-carousel-item {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  
}
.ant-menu-item-selected {
  color: #000000;
}
.ant-scrolling-effect{
  overflow: scroll !important;

}
.react-multiple-carousel__arrow{
  padding: 20px 0px 20px 0px;
  color:#000 !important;
  background: transparent !important;
}
.react-multiple-carousel__arrow:hover{
}
.react-multiple-carousel__arrow::before{
  color:#000 !important;
}
.react-multiple-carousel__arrow::after{
}
.react-multiple-carousel__arrow--left{
  left: calc(4% - 40px);
}
.react-multiple-carousel__arrow--right{
  right: calc(4% - 40px);
}


// yeniler
.maincampaign {
  margin-top: 0px !important;
  background-color: #fa8c8c;
  height: 35px;
  margin-bottom: 5px;
  opacity: 0.85;
  transition: 0.3s;
  display: flex;

}

.maincampaign:hover {
  opacity: 1;
}

.maincampaign > p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  color: white;
  margin: auto;
  padding: auto;
}

.mobile-nav{
    background-color:purple;
}
.navMenu{
    margin-top:10px;
    /* background-color:grey; */
}
.nav-button{
    border: 0px solid transparent;
    &:hover{
        color: black;
    }
}

.wrapper{
    margin-top:10px;
    width: 100%;
    display:block;
    position: relative;
    z-index: 1;
    @media screen and (max-width:960px){
    display:none;
}
}

.mega_menu{
	width: 100%;
	height: 60px;
}



.mega_menu ul{
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 59px;
  position: relative;
}

.mega_menu ul>li{
	display: inline-block;
	margin: 0 8px;
  padding: 0 5px;
  text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
  font-size: 12px;
  color: black;
  a{
    color: black;
  }
  &:hover{
    border-bottom:1px solid black;

	  color: #ca914e;
  }
  &:hover a{
	  color: #ca914e;
  }

}



.mega_menu ul li .sub_menu{
    margin-top:2px;
    position: absolute;
    background: white;
    width: 100%;
    left: 0;
    max-width:1400px;
    top: 60px;
    padding: 25px 15px;
    display: flex;
    justify-content: space-between;
    visibility: hidden;
    line-height: 24px;
    box-shadow: 0 27px 24px 0 rgba(0,0,0,0.2), 0 40px 77px 0 rgba(0,0,0,0.22);
}


.mega_mene_ulist {
    display:flex;
    flex-direction:column;
    align-items:center;
    list-style:none;
    text-align:center;
    justify-content: center;
}

/* 
.mega_menu ul li:hover{
} */



.mega_menu ul li:hover .sub_menu{
  visibility: visible;
}

.mega_menu ul li .sub_menu .col img{
	width: 250px;
	height: 180px;
	display: block;
}

.mega_menu ul li .sub_menu p{
	color: black;
	margin-top: 15px;
	font-size: 14px;
}

.mega_menu ul li .sub_menu h4{
	color: #ca914e;
}
.searchContainer{
    max-width:300px;
    width:100%;
    margin-top:20px;
}
.iconsContainer{
    margin-top:20px;
}
.campaing-container{
    overflow-x:hidden;
    display: block;
    @media screen and (max-width:960px){
        display:none;
    }
}

`;

export const Container = styled.div`
z-index:1;
width: 100%;
max-width:1300px;
margin-right:auto;
margin-left:auto;
padding-right:50px;
padding-left:50px;

@media screen and (max-width:991px){
    padding-right:30px;
    padding-left:30;
}

`;


export const myButton = styled.button`
border-radius: 4px;
background: ${({primary}) => (primary ? primaryColor : '#0467FB')};
white-space:nowrap;
padding:${({big})=> (big ? '12px 64px' : '10px 20px')};
color : black;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;

&:hover{
    transition: all 0.3s ease-out;
    background: #0467fb;

    background: ${({primary}) => (primary ? primaryHover : '#4b59f7')};
}
@media screen and (max-width:960px){
    width: 100%;

}
`

export const Search = styled(Input)`
color:black;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height:100%;

    @media screen and (max-width:960px){
        text-align: center;
        padding:2rem;
        width:100%;
        display:table;

        &:hover{
            color:#4b59f7;
            transition:all 0.3 ease;
        }
    }
`


export default GlobalStyle;