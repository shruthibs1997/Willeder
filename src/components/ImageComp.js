import styled from "styled-components";

const ImageComp =({img,text1,text2,text3})=>{
    return(
        <ImageCompStyle imageUrl = {img}>
                <div className="numberText" >{text1}</div>
                <div className="title" >{text2}</div>
                <div className="discription" >{text3}</div>
        </ImageCompStyle>
    )
}

export default ImageComp;

const ImageCompStyle = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => props.imageUrl});
    background-size: 100% 600px;
    position: relative;
    background-repeat: no-repeat;
    .numberText{
        width: 71%;
        margin: 35% auto auto;
        color: #FFFFFF;
        font-family: Noto Sans;
        font-size: 24px;
        font-weight: 600;
        line-height: 38.4px;
    }
    .title{
        width: 50%;
        margin: 5px auto auto;
        color: #FFFFFF;
        font-family: Noto Sans;
        font-size: 32px;
        font-weight: 600;
        line-height: 54px;
    }
    .discription{
        width: 71%;
        margin: 20px auto auto;
        color: #FFFFFF;
        font-family: Noto Sans;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
    }
    
    @media screen and (max-width: 768px){
        background-size: 100% 256px;
        height: 256px;
        overflow: hidden;
        .numberText{
            display: none;
        }
        .title{
            width: 55%;
            margin: 20% auto auto;
            font-size: 20px;
            font-weight: 600;
            line-height: 32px;
        }
        .discription{
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
        }
    }
    
`