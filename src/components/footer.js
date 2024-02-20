import {styled} from "styled-components"
import SocialMediaIcon from "./socialMediaIcon";

const Footer =()=>{
    return(
        <FooterStyle>
            <div className="footerTextComp">
                <div className="text">Home</div>
                <div className="text">page 1</div>
                <div className="text">page 2</div>
            </div>
            <div className="iconComp">
                <SocialMediaIcon/>
            </div>
            <div className="footerLogo">© Logo, Inc.</div>
        </FooterStyle>
    )
}

export default Footer;


const FooterStyle = styled.div`
    width: 100%;
    background-color: #5D6273;
    padding: 80px 0px 80px 0px;
    .footerTextComp{
        width: 25%;
        display: grid;
        grid-template-columns: repeat(3, 30%);
        grid-column-gap: 5%;
        margin: auto;
        margin-bottom: 50px;
        .text{
            color: #FFFFFF;
            font-family: Noto Sans;
            font-size: 16px;
            font-weight: 600;
            line-hight: 26px;
        }
    }
    .iconComp{
        width: 66%;
        border-top: 4px solid white;
        margin: auto;
    }
    .footerLogo{
        width: 25%;
        margin: auto;
        color: #FFFFFF;
        font-family: Noto Sans;
        font-size: 12px;
        font-weight: 400;
        line-hight: 18px;
        margin-top: 40px;
    }
    @media screen and (max-width: 1120px){
        .footerTextComp{
            width: 35%;
        }
        .iconComp{
            width: 75%;
        }
    }
    @media screen and (max-width: 768px){
        .footerTextComp{
            width: 45%;
        }
        .iconComp{
            width: 80%;
        }
    }
    @media screen and (max-width: 568px){
        .footerTextComp{
            grid-template-columns: repeat(1, 100%);
            grid-row-gap: 15%;
        }
    }
`