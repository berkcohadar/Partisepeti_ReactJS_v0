import styled, { createGlobalStyle } from "styled-components";

import { Input } from "antd";
import { primaryColor, primaryHover } from "./globalColors";

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
  margin-top: 300px;

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
  border: 0.07rem solid rgb(240, 240, 240) !important;
  border-radius: 10px !important;
  background:#eee;
  height:35px;

  &:hover{
   background:#eee;
    box-shadow: 0px 0px 8px 0px #eee !important; 
  }
  p{
    color:black;
  }
}
.menubar-container {
  background-color: #ffffff;
}
.collection {
  border:none;
  width:100%;
  height:100%;
  border-radius:5px;
  align-items:center;
  text-align:center;
}

.collection img {
  border: none;
  width:99%;

  border-radius:5px 5px 0 0;
  padding:0;
}

.prod-row {
  margin-top: 20px;
}

.footer {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  background-color: #e4e4e4;
  display: flex;
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
  width: ;
}
.add-to-cart {
  font-size: 28px;
  margin-right: 18px;
  color: rgb(252,170,50);
  position: relative;
  display: block;
  opacity: 1;
  transition: 0.3s;
  cursor:pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
  /* transition: transform .3s;  */
}

.ant-menu-item{
  border-radius: 10px !important;
  opacity:1;
  transition: 0.1s; 
  &:hover{
    border-right: 3px solid;
    box-shadow: 0px 0px 5px 0px black; 
    color: black;
  }
  &:after{
    border-right: 0px solid !important;
  }
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: white;
  box-shadow: 0px 0px 5px 0px black; 
  color: black;
  border-right: 0px solid;

}

.site-page-header{
  border-radius: 10px;
  transition: 0.3s; 
}
.site-page-header:hover{
  box-shadow: 0px 0px 15px 0px black; 
  color: black;
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
  width: 1200;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 300px;

  background:rgb(245,245,245,0.5);

}

.product-app-container {
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

#sticky {
  width: 100%;
  padding:10px 10px 5px 10px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 6em;
  max-height:100%;
}
.prod-rslt {
  top:6em;
  display: flex;
}
.filter-cont {
  max-height:100%;
  display: block;
  width: 25% !important;
  margin-right: 15px;
  background-color: rgb(240,240,240,0.2);
  box-shadow: 0px 0px 8px 0px #ddd; 
  border-radius:4px;
  @media screen and (max-width: 960px) {
    display: none;
  }
}

.filter-elem-list {
  display: block !important;
  margin-top: 60px;
}

.cart-cont{
  width:700px !important;
  @media screen and (max-width: 1390px) {
    display: none;
  }
}

.prod-table {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-left:20px !important;
}

.fltrs-wrppr {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 15px 0 0 0;
}
.justify-content-md-center{
  margin-top:5px;
  height:50px !important;
  margin-left:0px !important;
  margin-right:0px !important;
}
.logoContainer{
  height:inherit !important;
  padding-top:3px;
  padding-left:0px;
  display:flex;
}

.header-icon {
  font-size:18px;
  width:25px;
  height:50%;
  opacity: 1;
  background: inherit !important;
  border: 0px solid;
  transition:0.1s;
  color: #fff;
  margin-top:0 important!;
  &:hover {
  border-bottom: 1px solid;
  border-color: rgb(252, 170, 50) !important;
  color: rgb(252, 170, 50) !important;
  opacity: 1;
  }
}

.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected,
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
  color: #fff;
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


/* yeniler */
.campaign-container{
  overflow-x:hidden;
  display: block;
  @media screen and (max-width:960px){
      display:none;
  }
}

.maincampaign {
  background: linear-gradient(to right,rgb(220, 107, 117), rgb(200, 98, 107), rgb(190, 89, 98), rgb(175, 66, 95), rgb(160, 55, 85));
  ${
    "" /* background: linear-gradient(to right,rgb(254, 107, 117), rgb(231, 98, 107), rgb(209, 89, 98), rgb(200, 81, 89), rgb(195, 72, 78)); */
  }
  height: 35px;
  opacity: 0.7;
  transition: 0.3s;
  display: flex;
}

.maincampaign:hover{
  opacity: 1;
}

.maincampaign >  p {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
  color: white;
  margin: auto;
  padding: auto;
}

.mainpage-login{
  top: 0;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  z-index: 2;
  overflow-x:hidden;
  opacity:0.9;
  background-color:#1a1b29;
  height: 30px;
  width: 100%;
  transition: 0.3s;
  display: flex;
  align-items:center;
  @media screen and (max-width:960px){
      display:none;
  }
  &:hover{
    opacity: 1;
  }
}
.mainpage-login div{
  margin:0 8px 0 auto;
}
.mainpage-login a{
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 500; line-height: 23px;
  color: white;
  font-weight:600;
  margin: auto 4px auto 4px;
  padding: auto;
  cursor:pointer;
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
    top: 0;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    opacity: 1;
    background-color: #1a1b29;
    width: 100%;
    margin:0 auto 0px auto;
    display:block;
    z-index: 2;
    @media screen and (max-width:960px){
      display:none;
    }

}

.mega_menu{
	width: 100%;
	height: 30px;
  opacity:1;
  background-color:#1a1b29;
}

.mega_menu ul{
  opacity:1 !important;
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 25px;
  position: relative;
  color:#fff;
  
}

.mega_menu ul>li{
  opacity:1 !important;
	display: inline-block;
	margin: 0 8px;
  padding: 0 5px;
  text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
  font-size: 11px;
    
  &:hover{
    border-bottom:1px solid rgb(252, 170, 50);
    color:#ff7c1f;
  }

}

.mega_menu ul>li>a{
  opacity:1 !important;
  color:#fff;
  font-weight:600;
  position: relative;
  display: block;
  transition: transform 0.3s;
  transform: scale(1) !important;
  &:hover{
    color:#fff !important;
    transition: transform 0.1s;
    ${'' /* transform: scale(1.05) !important; */}
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

.ant-col-8 {
    flex: 0 0 25%;
    text-align: left;
}

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
    max-width:%100;
    width:100%;
    margin-top:0px;
}

.ant-btn-primary{
  background: linear-gradient(to bottom,#1a1b29,#1a1b29);
  border-radius: 4px !important;
  opacity:0.9;
  height:30px;
  width:60%;
  border-color: #fff;
  margin-top:5%;
  margin-right:1%;
  padding:1px 6px;
  transition: transform 0.3s;
  transform: scale(1) !important;
  }
}

.ant-btn-primary span {
  color: #fff;
  font-weight:200;
  line-height:80%;
  font-size:85%;
  
}

.ant-btn-secondary{
  background: #FF9637 !important;
  border-radius: 12px !important;
  color: #fff !important;
  border: #FDCF84 1px solid;
}
.ant-btn-danger{
  background: #b52c51 !important; 
  border-radius: 12px !important;
  ${"" /* DB1D4B */}
}
.ant-btn-secondary:hover, .ant-btn-secondary:focus{
  background: #FDCF84 !important;
  border-radius: 12px !important;
  color: #000 !important;
  border: #FDCF84 1px solid;
}
.ant-btn-danger:hover, .ant-btn-danger:focus {
    background: #E42E5A !important;
    color: #fff !important;
}
.ant-btn-primary:hover, .ant-btn-primary:focus {
  background: linear-gradient(to bottom,#383A57,#28293E,#383A57);
  border-color: #fff;
  span{
    color:#fff;
    transition: transform 0.1s;
    transform: scale(1.01) !important;
  }
}

.slider {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slider>div>img {
  width:100%;
  height:inherit;
  border-radius: 15px;
}

.right-arrow{
  position:absolute;
  top:45%;
  right:13%;
  font-size:3rem;
  color:#000;
  cursor:pointer;
  user-select:none;
  z-index:10;
  transition: transform 0.3s;
  &:hover{
    transform: scale(1.3);
  }
}

.left-arrow{
  position:block;
  top:45%;
  left:13%;
  font-size:3rem;
  color:#000;
  transition: transform 0.3s;
  cursor:pointer;
  z-index:10;
  user-select:none;
  &:hover{
    transform: scale(1.3);
  }
}

.slide {
  opacity:0;
  transition-duration: 1s ease;
}
.slide.active{
  opacity:1;
  transition-duration: 1s;
  transform: scale(1.01)
}

.menu-icon{
  padding-left:15px;
  font-size:25px;
  transition: transform 0.3s;
  cursor:pointer;
  color:white;
  margin-left:0px !important;
  position:absolute;
  &:hover{
    transform: scale(1.1);
  }
}

h1 { margin-bottom:35px;font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 23px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; } h3 { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; } p { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; } blockquote { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; } pre { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 11px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: 0;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30;
  }
`;

export const myButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? primaryColor : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: black;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #0467fb;

    background: ${({ primary }) => (primary ? primaryHover : "#4b59f7")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Search = styled(Input)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3 ease;
    }
  }
`;

export default GlobalStyle;
