import styled from "styled-components";

export const ProductDetailDiv = styled.div`
    top:0;
    display: flex;
    justify-content: space-around;
    margin:10px auto;
    padding:10px;
    width:100%;
    height:80vh;
    box-shadow: 0px 0px 3px 0px #1a1b29;
`;

export const ProductGallery = styled.div`
    display: flex;
    justify-content: space-around;
    padding:10px;
    width:35%;
    height:100%;
`;

export const ProductAllImages = styled.div`
    display: block;
    width:20%;
    height:100%;
    overflow-y:none;
    img{
        box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.68);
        width:100%;
        transition: transform 0.3s ease-in-out;
        margin: 5px 5px;
        cursor:pointer;
        &:hover{
            transform: scale(1.1);
        }
    }
`;

export const ProductCurrentImage = styled.div`
    display: block;
    width:70%;
    height:100%;
    img{
        box-shadow: 2px 2px 10px -1px rgba(0,0,0,0.68);
        width:100%;
        transition: transform 2s;
        transition-delay: 0.8s;
        border-radius:3px;
        &:hover{
            transform: scale(1.1);
        }
    }
`;

/////////////////////////////////
export const ProductInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:35%;
    height:100%;
    padding:10px;
    
`;

export const ProductInfo = styled.div`
    display: flex;
    padding:3px;
    width:100%;
    height:25%;
`;
export const ProductInfoDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:3px;
    width:65%;
    height:100%;
`;
export const ProductInfoDetailName = styled.h6`
    display: block;
    width:100%;
    height:50%;
    font-size:25px;
`;
export const ProductInfoDetailBrand = styled.div`
    display: flex;
    width:100%;
    height:18%;
    font-size:15px;

`;
export const ProductInfoDetailBrandName = styled.a`
    display: block;
    font-size:15px;
    font-weight:700;
    margin-left:1%;
    text-decoration:underline;
    color:#1a1b29;
`;
export const ProductInfoDetailStar = styled.div`
    display: flex;
    margin:auto;
    width:100%;
    height:18%;
    p{
    margin:auto;
        
    }
`;
export const ProductInfoPriceArea = styled.div`
    display:flex;
    justify-content: space-around;

    height: 10%;
    line-height: 280px;
`;
export const ProductInfoPrice = styled.div`
    display:flex;
    justify-content: space-around;
    width:40%;
    height: 100%;
    line-height: 30px;
`;
export const ProductInfoPriceP = styled.span`
    margin:auto;

    font-size: 22px;
`;


export const ProductInfoSpecs = styled.div`
    display: block;
    margin:0 auto;
    width:100%;
    height:35%;
`;

export const ProductInfoDesc = styled.div`
    display: block;
    margin:0 auto;
    height:35%;
    width:100%;
`;




/////////////////////////////////////////

export const BuyProduct = styled.div`
    display: block;
    width:25%;
    height:100%;
`;
export const ProductOtherOptions = styled.div`
    display: block;
    height:25%;
    width:100%;
`;
export const ProductOtherOptionsShow = styled.div`
    display: flex;
    width:100%;
`;
export const ProductSellOn = styled.a`
    display: block;
    height:10%;
    width:100%;
    text-align:right;
    font-size:16px;
    padding:20px;    
`;
export const ProductButtonArea = styled.div`
    bottom:0;
    height:30%;
    width:100%;
`;
export const ProductButtonAreaDiv = styled.div`
    display: block;
    height:100%;
    width:100%;
`;
export const ProductButtonRow = styled.div`
    display: flex;
    height:50%;
    width:100%;
`;
export const ProductQuantity = styled.div`
    display: flex;
    width:50%;
    height:100%;
`;
export const ProductAddToFav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:50%;
    height:100%;
`;
