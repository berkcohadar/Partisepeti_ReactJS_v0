import styled from "styled-components";
import { SendOutlined, CheckOutlined } from "@ant-design/icons";
import ReactSelect from "react-select";

export const AccountDiv = styled.div`
  width: 80%;
  maxwidth: "1300px";
  min-height: 800px;
  max-height: 100%;
  overflow: none;
  display: block;
  align-items: left;
  text-align: left;
  padding: 2% !important;
  background-color: #fff;
  box-shadow: 0px -15px 60px 55px #ffffff inset, 0px 5px 10px -5px #000000 inset;
  padding-top: 30px;
`;

export const OrderItem = styled.div`
  width: 90%;
  height: 20vh;
  max-height: 100%;
  overflow: none;
  display: block;
  border-radius: 10px;
  transition: 0.3s;
  margin-bottom: 3%;
  padding: 1%;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 4px 0px #111;
  }
`;
export const OrderItemArea = styled.div`
  width: 100%;
  height: 18vh;
  overflow: none;
  display: block;
`;

export const OrderMain = styled.div`
  width: 100%;
  height: 40%;
  max-height: 40%;
  overflow: none;
  display: flex;
  padding: 3px 10px;
`;

export const OrderMainStatus = styled.div`
  width: 50%;
  height: 100%;
  overflow: none;
  display: flex;
  padding: 3px 10px;
  align-items: center;
  text-align: center;
`;

export const OrderMainStatusDelivery = styled(SendOutlined)`
  font-size: 16px;
  display: flex;
  padding: 1px;
  margin: auto 0 auto 5px !important;
  cursor: pointer;
  color: #000;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.3);
  }
`;

export const OrderMainStatusSuccess = styled(CheckOutlined)`
  font-size: 20px;
  display: flex;
  padding: 1px;
  margin: auto 0 auto 5px !important;
  cursor: pointer;
  color: #000;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.3);
  }
`;

export const OrderMainStatusText = styled.p`
  font-weight: 700;
  font-size: 20px;
  overflow: none;
  display: block;
  margin: auto 10px;
  color: #000;
  align-items: center;
`;

export const OrderMainButtonArea = styled.div`
  width: 50%;
  height: 100%;
  overflow: none;
  display: flex;
  padding: 3px 10px;
  align-items: center;
  text-align: center;
`;

export const OrderMainButton = styled.button`
  width: 30%;
  min-width: 100px;
  height: 75%;
  min-height: 30px;
  overflow: none;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px;
  margin: auto;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
    border: 2px solid rgb(0, 0, 0, 0.5);
    transition: all 0.3s;
  }
`;

export const OrderMainButtonText = styled.p`
  overflow: none;
  display: block;
  color: #fff;
  font-weight: 550;
  font-size: 14px;
  margin: auto;
`;

export const OrderInfo = styled.div`
  width: 100%;
  height: 60%;
  max-height: 60%;
  overflow: none;
  display: block;
  padding: 3px 10px;
`;

export const OrderInfoRow = styled.div`
  width: 100%;
  height: 50%;
  max-height: 50%;
  overflow: none;
  display: flex;
  padding: 3px 10px;
`;

export const OrderInfoRowDetail = styled.div`
  width: 33%;
  height: 100%;
  overflow: none;
  display: block;
  align-items: left;
  text-align: left;
`;

export const OrderInfoRowDetailText = styled.p`
  width: 100%;
  height: 100%;
  overflow: none;
  display: block;
  align-items: left;
  text-align: left;
  color: #000;
  font-weight: 300;
  font-size: 14px;
  &:hover {
    cursor: text !important;
  }
`;

export const ProfileForms = styled.div`
  width: 100%;
  height: 550px;
  overflow: none;
  display: flex;
`;

export const EditProfileForm = styled.form`
  width: 50%;
  overflow: none;
  display: block;
  border-radius: 10px;
  transition: 0.3s;
  margin-right: 3%;
  padding: 1%;
`;

export const FormRow = styled.div`
  width: 100%;
  height: 10%;
  overflow: none;
  display: flex;
  padding: 3px 10px;
  margin-bottom: 4%;
`;

export const FormTextArea = styled.div`
  width: 30%;
  height: 100%;
  overflow: none;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const FormText = styled.p`
  overflow: none;
  display: block;
  margin: auto auto auto 0;
  color: #000;
  font-weight: 300;
  font-size: 14px;
`;

export const FormInput = styled.input`
  width: 70%;
  height: 100%;
  overflow: none;
  display: flex;
  align-items: left;
  text-align: left;
  border-color:rgb(0,0,0,0.2);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 15px;
  &::placeholder {
    color: gray;
    opacity: 0.6;
    font-size: 15px;
  }
  &::defaultvalue {
    color: #fff;
    opacity: 1;
  }
`;

export const FormInputHalf = styled.input`
  width: 33%;
  height: 100%;
  overflow: none;
  display: flex;
  align-items: left;
  text-align: left;
  border-color:rgb(0,0,0,0.2);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 15px;
  &::placeholder {
    color: gray;
    opacity: 0.6;
    font-size: 15px;
  }
  &::defaultvalue {
    color: #fff;
    opacity: 1;
  }
`;

export const FormSelectInput = styled(ReactSelect)`
  width: 70%;
  overflow: none;
  display: block;
  align-items: left;
  text-align: left;
  border-radius: 5px;
  font-size: 15px;
  line-height:35px;
`;

