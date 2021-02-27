import styled from "styled-components";

export const CampaignDiv = styled.div`
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin:10px auto;
    width:75%;
    height: 150px;
    border-radius:10px;
`;

export const CampaignItem = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin:auto;
    width:120px;
    height:120px;
    border-radius:100px;
    box-shadow: 0px 0px 10px 0px #1a1b29;
    transition: transform 0.3s;
    cursor:pointer;
    position: relative;
    overflow: hidden;
  &:hover{
    transform: scale(1.1);
  }
  &::select{
    transform: scale(1.1);
  }
`;

export const CampaignItemImage = styled.img`
display: inline;
  margin: 0 auto;
  margin-left: -25%; //centers the image
  height: 100%;
  width: auto;
`;
